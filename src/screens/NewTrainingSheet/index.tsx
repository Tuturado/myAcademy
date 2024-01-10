import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';

function NewTrainingSheet() {

  return (
    <>
      <View style={styles.container}>
        <Text>TRAINING SHEET</Text>
      </View>
    </>
  );
}

export default NewTrainingSheet;