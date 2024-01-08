import React, { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Login() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [exibirSenha, setExibirSenha] = useState<boolean>(false);

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

      <Text style={styles.screenTitle}>Entrar</Text>

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
          textStyle={{ fontFamily: "JosefinSans-Regular",textDecorationLine: "none" }}
          onPress={(isChecked: boolean) => {setExibirSenha(!exibirSenha)}}
        />
      </View>

      <View style={styles.enterButton}>
        <TouchableOpacity onPress={()=>{console.log('ENTRAR');}} style={styles.buttonContainer}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('register')} style={styles.bottomButtons}>
          <Text style={styles.textButton}>Registrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('forgotPassword')} style={styles.bottomButtons}>
          <Text style={styles.textButton}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;