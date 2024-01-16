import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import auth from '@react-native-firebase/auth';


const FormRegister = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');
    const [equalPassword, setEqualPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
  
    const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  
  
    useEffect(() => {
      if (confirmaSenha != senha) {
        setEqualPassword(false);
      }
      else {
        setEqualPassword(true);
      }
    }, [confirmaSenha]);
  
    const handleNewAccount = () => {
      setLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(() => { Alert.alert("Conta", "Cadastrado com sucesso!") })
        .catch((error) => {
          console.log(error);
          Alert.alert("Ops!", "Algo deu errado ao fazer o cadastro!");
        })
        .finally(() => setLoading(false));
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/myAcademy.png')} style={styles.image} />
                </View>

                <Text style={styles.screenTitle}>Cadastrar</Text>

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
                    <TextInput
                        style={{ borderColor: equalPassword ? 'blue' : 'red', width: '70%', marginBottom: '5%', borderWidth: 2 }}
                        secureTextEntry={true}
                        onChangeText={setConfirmaSenha}
                        value={confirmaSenha}
                        placeholder="Confirme a Senha"
                        keyboardType="default"
                    />
                </View>

                <View style={styles.enterButton}>
                    <TouchableOpacity onPress={() => handleNewAccount()} disabled={email.length != 0 && equalPassword == true ? false : true} style={styles.buttonContainer}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.haveAccount} onPress={() => { navigation.goBack() }}>Já possuo conta</Text>

            </View>

        </>

    );

}

export default FormRegister;