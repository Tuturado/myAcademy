import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TrainingSheet } from '../TrainingSheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { SelectList } from 'react-native-dropdown-select-list';

function Home() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const [treinos, setTreinos] = useState<TrainingSheet[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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


  const handleSignOut = () => {
    auth().signOut();
  };

  const excludeTraining = (id: string) => {

    //setModalVisible(true);


    //Toda essa parte de baixo faz a deleção corretamente, mas só vai de fato deletar se o usuário cliar em sim no modal
    firestore()
      .collection('fichaTreino')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert("Treino", "Treino Deletado com sucesso!")
        console.log('documento deletado!');
        setModalVisible(false);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Ops!", "Parece que houve um problema ao deletar o treino!");
        setModalVisible(false);
      });
  };


  const updateStatusTraining = (id: string) => {
    firestore()
      .collection('fichaTreino')
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


  async function massUpdateTrainingStatus() {
    // Get all users
    const usersQuerySnapshot = await firestore().collection('fichaTreino').get();

    // Create a new batch instance
    const batch = firestore().batch();

    usersQuerySnapshot.forEach(documentSnapshot => {
      batch.update(documentSnapshot.ref, {
        'fichaTreino.status': 'Pendente',
      })
    })
    return batch.commit();
  }


  function deleteTraining() {

  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('fichaTreino')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as TrainingSheet[];
        //console.log('DATA: ', data);
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
  //   console.log('LISTA: ', list);
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
      //console.log('TREINOS> ', treino?.fichaTreino);
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
    //console.log('TREINOS SEGUNDA: ', treinosSegunda);
    //console.log('TREINOS TERÇA: ', treinosTerca);
    //console.log('TREINOS QUARTA: ', treinosQuarta);
    //console.log('TREINOS QUINTA: ', treinosQuinta);
    //console.log('TREINOS SEXTA: ', treinosSexta);
    //console.log('TREINOS SABADO: ', treinosSabado);
    //console.log('TREINOS DOMINGO: ', treinosDomingo);

  }, [treinos]);



  function renderList(item: any) {
    const Item = ({ diaSemana, nome, periodo, peso, repeticoes, series, status }: TrainingSheet) => (
      <View style={styles.item} >
        <View style={styles.topButtonsContainer}>



          <View style={styles.exitButtonContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.updateTrainingButton}>
              <Text style={styles.text}>Atualizar Treino</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exitButtonContainer}>
            <TouchableOpacity onPress={() => excludeTraining(item?.id)} style={styles.excludeTrainingButton}>
              <Text style={styles.text}>Excluir Treino</Text>
            </TouchableOpacity>
          </View>

        </View>
       
        <Text>Dia da Semana: {diaSemana}</Text>
        <Text>Nome do Exercício: {nome}</Text>
        <Text>Período de treino: {periodo}</Text>
        <Text>Peso: {peso} kg</Text>
        <Text>Repetições: {repeticoes}</Text>
        <Text>Series: {series}</Text>
        <Text>Status: {status}</Text>


        <View style={styles.exitButtonContainer}>
          <TouchableOpacity onPress={() => updateStatusTraining(item?.id)} disabled={status == 'Concluído' ? true : false} style={[{ backgroundColor: status == "Concluído" ? 'gray' : 'green' }, styles.updateStatusTraining]}>
            <Text style={styles.text}>Concluir Treino</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    return (
      <Item id={item?.id} diaSemana={item?.fichaTreino?.diaSemana} nome={item?.fichaTreino?.nome} periodo={item?.fichaTreino?.periodo} peso={item?.fichaTreino?.peso} repeticoes={item?.fichaTreino?.repeticoes} series={item?.fichaTreino?.series} status={item?.fichaTreino?.status} />
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

  useEffect(()=>{
    console.log('DIA DA SEMANA: ', diaSemana);
  },[diaSemana]);

const selectedFilter = () =>{
  switch(diaSemana){
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
          <TouchableOpacity onPress={() => handleSignOut()} style={styles.exitButton}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.text}>Tem Certeza que deseja excluir esse treino?</Text>
              <View style={styles.pressedContainer}>
                <Pressable
                  style={[styles.button, styles.buttonExclude]}
                  onPress={() => deleteTraining()}>
                  <Text style={{ color: 'black' }}>SIM!</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ color: 'white' }}>NÃO!</Text>
                </Pressable>
              </View>


            </View>
          </View>
        </Modal> */}

        <Text style={styles.text}>Mostrar treinos de:</Text>

        <SelectList
            placeholder='Dia da Semana'
            boxStyles={{ borderRadius: 0, borderColor: 'blue', }}
            setSelected={(val: string) => setDiaSemana(val)}
            data={dias}
            save="value"
          />

        <Text style={styles.text}>Treinos:</Text>

        {treinos.length != 0 ? <FlatList
          data={selectedFilter()}
          renderItem={({ item }) => renderList(item)}
          keyExtractor={item => item?.id}
          style={{ borderColor: 'black', borderWidth: 5, margin: 5 }}
        /> : <Text>Ainda não existem treinos cadastrados, clique no botão para adicionar!</Text>}

        <View style={styles.plusButtonContainer}>
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


          <TouchableOpacity onPress={() => navigation.navigate('newTrainingSheet')} style={styles.plusButtom}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>

      </View>

    </>
  );
}

export default Home;