import React, { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [exibirSenha, setExibirSenha] = useState<boolean>(false);
  const navigateTo = () => {
    console.log('FAZ O LOGIN');
  };


  useEffect(() => {
    console.log('EMAIL: ', email);
  }, [email]);

  useEffect(() => {
    console.log('SENHA: ', senha);
  }, [senha]);

  useEffect(()=>{
    console.log('EXIBIR SENHA: ', exibirSenha);
  },[exibirSenha])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/myAcademy.png')} style={styles.image} />
      </View>

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
          secureTextEntry={exibirSenha ? false : true}
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
          keyboardType="default"
        />
      </View>

      <View style={styles.checkContainer}>
        <BouncyCheckbox
          size={25}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Mostrar Senha"
          iconStyle={{ borderColor: "blue" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {setExibirSenha(!exibirSenha)}}
        />
      </View>

      <View style={styles.enterButton}>
        <TouchableOpacity onPress={navigateTo} style={styles.buttonContainer}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity onPress={navigateTo} style={styles.bottomButtons}>
          <Text style={styles.textButton}>Registrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateTo} style={styles.bottomButtons}>
          <Text style={styles.textButton}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;