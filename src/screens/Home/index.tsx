import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';

function Home() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const handleSignOut = () => {
    auth().signOut();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.exitButtonContainer}>
          <TouchableOpacity onPress={() => handleSignOut()} style={styles.exitButton}>
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>
        </View>


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