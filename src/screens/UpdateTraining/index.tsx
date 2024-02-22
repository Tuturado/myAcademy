import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SelectList } from 'react-native-dropdown-select-list';
import { NavigationProp, useNavigation, Route, useRoute } from '@react-navigation/native';
import { TrainingSheet } from '../TrainingSheet';

function UpdateTraining () {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const [disabledCadastrar, setDisabledCadastrar] = useState<boolean>(true);

  const exercicio: TrainingSheet = {
    nome: item?.fichaTreino?.nome,
    series: item?.fichaTreino?.series,
    repeticoes: item?.fichaTreino?.repeticoes,
    peso: item?.fichaTreino?.peso,
    diaSemana: item?.fichaTreino?.diaSemana,
    periodo: item?.fichaTreino?.periodo,
    status: item.fichaTreino.status
  }

  const [fichaTreino, setFichaTreino] = useState(exercicio);


  const dias = [
    { key: '1', value: 'Segunda' },
    { key: '2', value: 'Terça' },
    { key: '3', value: 'Quarta' },
    { key: '4', value: 'Quinta' },
    { key: '5', value: 'Sexta' },
    { key: '6', value: 'Sábado' },
    { key: '7', value: 'Domingo' },
  ]

  const periodos = [
    { key: '1', value: 'Manhã' },
    { key: '2', value: 'Tarde' },
    { key: '3', value: 'Noite' }
  ]


  const handleOnchange = (text: string | number, input: string | number) => {
    setFichaTreino(prevState => ({ ...prevState, [input]: text }));
  };

  useEffect(() => {
      
      let lengDiaSemana = fichaTreino.diaSemana.length;
      let lengNome = fichaTreino.nome.length;
      let lengPeriodo = fichaTreino.periodo.length;

      if(lengDiaSemana == 0 || lengNome == 0 || lengPeriodo == 0 || fichaTreino.peso == '' || fichaTreino.repeticoes == '' || fichaTreino.series == ''){
        setDisabledCadastrar(true);
      }else{
        setDisabledCadastrar(false);
      }

      console.log('FICHA TREINO: ', fichaTreino);
  }, [fichaTreino]);


  const clearForm = (exercicio:TrainingSheet) =>{
    exercicio.diaSemana = '';
    exercicio.periodo = '';
    setFichaTreino(exercicio);
  };

  function handleUpdateTraining (){
    firestore()
    .collection('fichaTreino')
    .doc(item.id)
    .update({
        'fichaTreino.nome': fichaTreino.nome,
        'fichaTreino.diaSemana': fichaTreino.diaSemana,
        'fichaTreino.periodo': fichaTreino.periodo,
        'fichaTreino.peso': fichaTreino.peso,
        'fichaTreino.repeticoes': fichaTreino.repeticoes,
        'fichaTreino.series': fichaTreino.series,
        'fichaTreino.status': fichaTreino.status,
    })
    .then(()=> {
      Alert.alert("Treino", "Treino atualizado com sucesso!")
      //limpar os estados dos inputs
      //clearForm(exercicio);
    })
    .catch((error)=>{
      console.error(error);
      Alert.alert("Ops!", "Parece que houve um problema ao atualizar o treino!");
    })
  };


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Atualizar Treino</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.nomeExercicio}
            onChangeText={text => handleOnchange(text, 'nome')}
            value={fichaTreino.nome}
            placeholder="Nome do Exercício"
            keyboardType="default"
          />

          <TextInput
            style={styles.nomeExercicio}
            onChangeText={text => handleOnchange(text, 'series')}
            value={fichaTreino.series}
            maxLength={3}
            placeholder="Series"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.nomeExercicio}
            onChangeText={text => handleOnchange(text, 'repeticoes')}
            value={fichaTreino.repeticoes.toString()}
            maxLength={30}
            placeholder="Repetições"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.nomeExercicio}
            onChangeText={text => handleOnchange(text, 'peso')}
            value={fichaTreino.peso.toString()}
            maxLength={3}
            placeholder="Peso"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.selectBoxContainer}>
          <SelectList
            placeholder='Dia da Semana'
            boxStyles={{ borderRadius: 0, borderColor: 'blue', }}
            setSelected={(val: string) => handleOnchange(val, 'diaSemana')}
            data={dias}
            save="value"
          />
        </View>

        <View style={styles.selectBoxContainer}>
          <SelectList
            placeholder='Período de treino'
            boxStyles={{ borderRadius: 0, borderColor: 'blue', }}
            setSelected={(val: string) => handleOnchange(val, 'periodo')}
            data={periodos}
            save="value"
          />
        </View>

        <View style={styles.bottomButtonsContainer}>
          <View style={styles.registerButtonContainer}>
            <TouchableOpacity onPress={() => handleUpdateTraining()} disabled={disabledCadastrar ? true : false} style={[{backgroundColor: disabledCadastrar ? 'gray' : 'blue'} ,styles.registerButton]}>
              <Text style={styles.text}>Atualizar Treino</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registerButtonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
              <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </>
  );
}

export default UpdateTraining;