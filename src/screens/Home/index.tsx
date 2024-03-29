import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TrainingSheet } from '../TrainingSheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { SelectList } from 'react-native-dropdown-select-list';
import ModalComponent from '../../components/Modal';

function Home() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const [treinos, setTreinos] = useState<TrainingSheet[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [list, setList] = useState(treinos);
  const [diaSemana, setDiaSemana] = useState<string>('');
  const [treinosSegunda, setTreinosSegunda] = useState<TrainingSheet[]>([]);
  const [treinosTerca, setTreinosTerca] = useState<TrainingSheet[]>([]);
  const [treinosQuarta, setTreinosQuarta] = useState<TrainingSheet[]>([]);
  const [treinosQuinta, setTreinosQuinta] = useState<TrainingSheet[]>([]);
  const [treinosSexta, setTreinosSexta] = useState<TrainingSheet[]>([]);
  const [treinosSabado, setTreinosSabado] = useState<TrainingSheet[]>([]);
  const [treinosDomingo, setTreinosDomingo] = useState<TrainingSheet[]>([]);
  let user = firebase.auth().currentUser;


  const handleSignOut = () => {
    user = null;
    auth().signOut();
  };

  const excludeTraining = (id: string) => {

    //Toda essa parte de baixo faz a deleção corretamente, mas só vai de fato deletar se o usuário cliar em sim no modal
    firestore()
      .collection(`fichaTreino${user?.uid}`)
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert("Treino", "Treino Deletado com sucesso!")
        console.log('documento deletado!');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Ops!", "Parece que houve um problema ao deletar o treino!");
      });
  };

  const updateStatusTraining = (id: string) => {
    firestore()
      .collection(`fichaTreino${user?.uid}`)
      .doc(id)
      .update({
        'fichaTreino.status': 'Concluído',
      })
      .then(() => {
        Alert.alert("Status", "O treino foi marcado como concluído!");
        console.log('Status Atualizado');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Ops!", "Parece que houve um problema ao marcar o treino como concluído!");
      });
  };


  async function excludeTrainingSheet() {
    const TrainingSheetQuerySnapshot = await firestore().collection(`fichaTreino${user?.uid}`).get();
    TrainingSheetQuerySnapshot.forEach(document => {
      document.ref.delete();
    });
  };


  async function massUpdateTrainingStatus() {
    const usersQuerySnapshot = await firestore().collection(`fichaTreino${user?.uid}`).get();
    const batch = firestore().batch();

    usersQuerySnapshot.forEach(documentSnapshot => {
      batch.update(documentSnapshot.ref, {
        'fichaTreino.status': 'Pendente',
      })
    })
    return batch.commit();
  }


  useEffect(() => {
    const subscriber = firestore()
      .collection(`fichaTreino${user?.uid}`)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as TrainingSheet[];
        setTreinos(data);
      });

    return () => subscriber();
  }, []);

  // useEffect(() => {
  //   console.log('Treinos: ', treinos.fichaTreino);
  //   if(filter === ""){
  //     setList(treinos);
  //   }
  //   else{
  //     setList(
  //       treinos?.fichaTreino?.filter((item:TrainingSheet)=>{
  //         if(item.diaSemana.indexOf(filter) > -1){
  //           return true;
  //         }
  //         else{
  //           return false;
  //         }
  //       })
  //     );
  //   }
  // }, [filter]);

  // useEffect(()=>{
  // },[list]);

  useEffect(() => {
    let treinosSegunda: any = [];
    let treinosTerca: any = [];
    let treinosQuarta: any = [];
    let treinosQuinta: any = [];
    let treinosSexta: any = [];
    let treinosSabado: any = [];
    let treinosDomingo: any = [];

    treinos.map((treino: TrainingSheet) => {
      if (treino?.fichaTreino.diaSemana == "Segunda") {
        treinosSegunda.push(treino);
      }
      if (treino?.fichaTreino.diaSemana == "Terça") {
        treinosTerca.push(treino);
      }
      if (treino?.fichaTreino.diaSemana == "Quarta") {
        treinosQuarta.push(treino);
      }
      if (treino?.fichaTreino.diaSemana == "Quinta") {
        treinosQuinta.push(treino);
      }
      if (treino?.fichaTreino.diaSemana == "Sexta") {
        treinosSexta.push(treino);
      }
      if (treino?.fichaTreino.diaSemana == "Sábado") {
        treinosSabado.push(treino);
      }
      if (treino?.fichaTreino.diaSemana == "Domingo") {
        treinosDomingo.push(treino);
      }

    });

    setTreinosSegunda(treinosSegunda);
    setTreinosTerca(treinosTerca);
    setTreinosQuarta(treinosQuarta);
    setTreinosQuinta(treinosQuinta);
    setTreinosSexta(treinosSexta);
    setTreinosSabado(treinosSabado);
    setTreinosDomingo(treinosDomingo);
  }, [treinos]);



  function renderList(item: any) {
    const Item = ({ diaSemana, nome, periodo, peso, repeticoes, series, status, observacoes }: TrainingSheet) => (
      <View style={styles.item} >
        <View style={styles.topButtonsContainer}>

          <View style={styles.exitButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('updateTraining', {item})} style={styles.updateTrainingButton}>
              <Text style={styles.text}>Atualizar Treino</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exitButtonContainer}>
            <TouchableOpacity onPress={() => excludeTraining(item?.id)} style={styles.excludeTrainingButton}>
              <Text style={styles.text}>Excluir Treino</Text>
            </TouchableOpacity>
          </View>

        </View>

        <Text style={styles.text}>Dia da Semana: {diaSemana}</Text>
        <Text style={styles.text}>Nome do Exercício: {nome}</Text>
        <Text style={styles.text}>Período de treino: {periodo}</Text>
        <Text style={styles.text}>Peso: {peso} kg</Text>
        <Text style={styles.text}>Repetições: {repeticoes}</Text>
        <Text style={styles.text}>Series: {series}</Text>
        <Text style={styles.text}>Status: {status}</Text>
        <Text style={styles.text}>Observações: {observacoes}</Text>


        <View style={styles.exitButtonContainer}>
          <TouchableOpacity onPress={() => updateStatusTraining(item?.id)} disabled={status == 'Concluído' ? true : false} style={[{ backgroundColor: status == "Concluído" ? 'gray' : 'green' }, styles.updateStatusTraining]}>
            <Text style={styles.text}>Concluir Treino</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    return (
      <Item id={item?.id} diaSemana={item?.fichaTreino?.diaSemana} nome={item?.fichaTreino?.nome} periodo={item?.fichaTreino?.periodo} peso={item?.fichaTreino?.peso} repeticoes={item?.fichaTreino?.repeticoes} series={item?.fichaTreino?.series} status={item?.fichaTreino?.status} observacoes={item?.fichaTreino?.observacoes} />
    )
  }


  const dias = [
    { key: '1', value: 'Todos' },
    { key: '2', value: 'Segunda' },
    { key: '3', value: 'Terça' },
    { key: '4', value: 'Quarta' },
    { key: '5', value: 'Quinta' },
    { key: '6', value: 'Sexta' },
    { key: '7', value: 'Sábado' },
    { key: '8', value: 'Domingo' },
  ]

  const selectedFilter = () => {
    switch (diaSemana) {
      case 'Todos':
        return treinos;

      case 'Segunda':
        return treinosSegunda;
        break;

      case 'Terça':
        return treinosTerca;
        break;

      case 'Quarta':
        return treinosQuarta;

      case 'Quinta':
        return treinosQuinta;

      case 'Sexta':
        return treinosSexta;

      case 'Sábado':
        return treinosSabado;

      case 'Domingo':
        return treinosDomingo;

      default:
        return treinos;

    }
  };

  return (
    <>

      <View style={styles.container}>
        <View style={styles.exitButtonContainer}>

          <TouchableOpacity onPress={() => massUpdateTrainingStatus().then(() => {
            Alert.alert("Status", "Todos os treinos foram marcados como pendente novamente!");
            console.log('Status Atualizado');
          })
            .catch((error) => {
              console.error(error);
              Alert.alert("Ops!", "Parece que houve um problema ao marcar os treinos como pendentes!");
            })} style={styles.resetAllTrainingButton}>
            <Text style={styles.text}>Resetar treinos</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => handleSignOut()} style={styles.exitButton}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.text}>Mostrar treinos de:</Text>

        <SelectList
          placeholder='Dia da Semana'
          boxStyles={{ borderRadius: 0, borderColor: 'blue', }}
          setSelected={(val: string) => setDiaSemana(val)}
          data={dias}
          save="value"
        />

        {treinos.length != 0 ? <FlatList
          data={selectedFilter()}
          renderItem={({ item }) => renderList(item)}
          keyExtractor={item => item?.id}
          style={{ borderColor: 'blue', borderWidth: 5, margin: 5, padding:5, marginTop:20 }}
        /> : <Text style={styles.text}>Ainda não existem treinos cadastrados, clique no botão "+" para adicionar!</Text>}

        <View style={styles.plusButtonContainer}>
          <TouchableOpacity disabled={treinos.length == 0 ? true : false} onPress={() => excludeTrainingSheet().then(() => {
            Alert.alert("Status", "A ficha de treino foi deletada por completo!");
            console.log('Ficha de treino deletada');
          })
            .catch((error) => {
              console.error(error);
              Alert.alert("Ops!", "Parece que houve um problema ao deletar a ficha de treino!");
            })} style={[{backgroundColor: treinos.length == 0 ? 'gray': 'red'} ,styles.excludeAllTrainingButton]}>
            <Text style={styles.text}>Excluir ficha de treino</Text>
          </TouchableOpacity>
            {/* <ModalComponent visible = {false}></ModalComponent> */}

          <TouchableOpacity onPress={() => navigation.navigate('newTrainingSheet')} style={styles.plusButtom}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>

      </View >

    </>
  );
}

export default Home;