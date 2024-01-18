import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TrainingSheet } from '../TrainingSheet';

function Home() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const [treinos, setTreinos] = useState<any>([]);

  const handleSignOut = () => {
    auth().signOut();
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
        })
        setTreinos(data);
      });

    return () => subscriber();
  }, []);

  useEffect(() => {
    console.log('TREINOS: ', treinos);
  }, [treinos])

  type ItemProps = {
    //id: string
    diaDaSemana: string
    nome: string
    periodo: string
    peso: string | number
    repeticoes: string | number
    series: string | number
  };

  const Item = ({ diaSemana, nome, periodo, peso, repeticoes, series, status }: TrainingSheet) => (
    <View style={styles.item} >
      <Text>Dia da Semana: {diaSemana}</Text>
      <Text>Nome do Exercício: {nome}</Text>
      <Text>Período de treino: {periodo}</Text>
      <Text>Peso: {peso} kg</Text>
      <Text>Repetições: {repeticoes}</Text>
      <Text>Series: {series}</Text>
      <Text>Status: {status}</Text>
    </View>
  );


  return (
    <>
    
        <View style={styles.container}>
          <View style={styles.exitButtonContainer}>
            <TouchableOpacity onPress={() => handleSignOut()} style={styles.exitButton}>
              <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
          </View>
          {treinos.length != 0 ? <FlatList
            data={treinos}
            renderItem={({ item }) => <Item diaSemana={item?.fichaTreino?.diaSemana} nome={item?.fichaTreino?.nome} periodo={item?.fichaTreino?.periodo} peso={item?.fichaTreino?.peso} repeticoes={item?.fichaTreino?.repeticoes} series={item?.fichaTreino?.series} status={item?.fichaTreino?.status} />}
            keyExtractor={item => item.id}
          /> : <Text>Ainda não existem treinos cadastrados, clique no botão para adicionar!</Text>}

          <View style={styles.plusButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('newTrainingSheet')} style={styles.plusButtom}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
     
    </>
  );
}

export default Home;