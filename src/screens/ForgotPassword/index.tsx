import React, { useEffect, useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Register';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import auth from '@react-native-firebase/auth';

function ForgotPassword() {
    const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        console.log('EMAIL: ', email);
    }, [email]);

    const handleForgotPassword = ()=>{
        auth()
        .sendPasswordResetEmail(email)
        .then(()=>{Alert.alert("Redefinir senha", "Enviamos um email para você!")})
        .catch(error =>{
            console.log(error);
            Alert.alert("Ops!", "Algo deu errado ao fazer o seu cadastro");
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/myAcademy.png')} style={styles.image} />
            </View>

            <Text style={styles.screenTitle}>Esqueci a Senha</Text>
            <Text style={styles.text}>Instruções de recuperação:</Text>
            <Text style={styles.text}>1. Preencha seu email</Text>
            <Text style={styles.text}>2. Clique em recuperar conta</Text>
            <Text style={styles.text}>3. Aguarde o email, e siga as instruções</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.emailInput}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                />

            </View>
            <View style={styles.enterButton}>
                <TouchableOpacity onPress={() => handleForgotPassword()} style={styles.buttonContainer}>
                    <Text style={styles.textButton}>Recuperar Conta</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.backButton}>
                <TouchableOpacity onPress={() =>navigation.goBack()} style={styles.buttonContainer}>
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default ForgotPassword;