import React, { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register';
import { styles } from './styles';

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const navigateTo = () => {
    console.log('FAZ O LOGIN');
  };


  useEffect(() => {
    console.log('EMAIL: ', email);
  }, [email]);

  useEffect(() => {
    console.log('SENHA: ', senha);
  }, [senha]);

  return (
    <View style={styles.container}>

      <Image source={require('../assets/myAcademy.png')} style={styles.imageContainer} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.emailInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
          keyboardType="default"
        />
      </View>

      <TouchableOpacity onPress={navigateTo} style={styles.buttonContainer}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity onPress={navigateTo} style={styles.registerButton}>
          <Text style={styles.textButton}>Registrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateTo} >
          <Text style={styles.textButton}>Esqueci a senha</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Login;