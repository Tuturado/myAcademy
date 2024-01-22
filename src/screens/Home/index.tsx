import React, { useEffect, useState } from 'react';
import { Button, FlatList, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TrainingSheet } from '../TrainingSheet';

function Home() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const [treinos, setTreinos] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSignOut = () => {
    auth().signOut();
  };

  const excludeTraining = (id:any) =>{
    console.log('ID: ', id);
    setModalVisible(true);
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
    console.log('MODAL VISIBLE: ', modalVisible);
  }, [modalVisible])


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
      </View>
    );

    return (
      <Item diaSemana={item?.fichaTreino?.diaSemana} nome={item?.fichaTreino?.nome} periodo={item?.fichaTreino?.periodo} peso={item?.fichaTreino?.peso} repeticoes={item?.fichaTreino?.repeticoes} series={item?.fichaTreino?.series} status={item?.fichaTreino?.status} />
    )
  }


  return (
    <>

      <View style={styles.container}>
        <View style={styles.exitButtonContainer}>
          <TouchableOpacity onPress={() => handleSignOut()} style={styles.exitButton}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>

        <Modal
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
                  onPress={() => setModalVisible(!modalVisible)}>
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
        </Modal>

        {treinos.length != 0 ? <FlatList
          data={treinos}
          renderItem={({ item }) => renderList(item)}
          keyExtractor={item => item?.id}
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