import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import auth from '@react-native-firebase/auth';
import validateEmail from "../assets/utils";


const FormRegister = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');
    const [equalPassword, setEqualPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [focusEmail, setFocusEmail] = useState<boolean>(false);
    const [focusPassword, setFocusPassword] = useState<boolean>(false);
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [disabledNewAccount, setDisabledNewAccount] = useState<boolean>(true);

    const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();

    useEffect(() => {
        if (confirmaSenha != senha) {
            setEqualPassword(false);
        }
        else {
            setEqualPassword(true);
        }
    }, [confirmaSenha]);

    const handleEmail = (text: string) => {
        const emailValido = validateEmail(text);
        setEmail(text);
        if (emailValido != null) {
            //email valido
            setValidEmail(true);
        }
        else {
            //email invalido
            setValidEmail(false);
        }

    };

    const handleSenha = (text:string) =>{
        setSenha(text);
        if(text.length>=6){
            //senha valida
            setValidPassword(true);
        }
        else{
            //senha invalida
            setValidPassword(false);
        }
    };

    const handleDisabledNewAccount = () => {
        if (validEmail && senha.length > 6 && equalPassword) {
            return false;
        }
        else {
            return true;
        }
    };

    useEffect(() => {
        if (validEmail && senha.length >= 6 && equalPassword) {
            console.log('CAINDO AQUI');
            setDisabledNewAccount(false);

        } else {
            setDisabledNewAccount(true);
        }
    }, [validEmail, senha, equalPassword]);



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

    function handleBorderColorEmail() {
        if (!focusEmail && validEmail) {
            return 'blue';
        }
        if (focusEmail && !validEmail) {
            return 'red';
        }
        if (!focusEmail && email.length == 0) {
            return 'blue';
        }
        if(focusEmail && email.length == 0){
            return 'red';
        }
        if (focusEmail && validEmail) {
            return 'blue';
        }
        else {
            return 'blue';
        }
    };

    function handleBorderColorPassword() {
        if (!focusPassword && validPassword) {
            return 'blue';
        }
        if (focusPassword && !validPassword) {
            return 'red';
        }
        if (focusPassword && validPassword) {
            return 'blue';
        }
        else {
            return 'blue';
        }
    };

    useEffect(()=>{
        console.log('FOCUS PASSWORD: ', focusPassword);
    },[focusPassword])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/img/myAcademy.png')} style={styles.image} />
                </View>

                <Text style={styles.screenTitle}>Cadastrar</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ borderColor: handleBorderColorEmail(), width: '70%', marginBottom: '5%', borderWidth: 2 }}
                        onChangeText={(text: string) => handleEmail(text)}
                        onFocus={() => setFocusEmail(true)}
                        onBlur={() => setFocusEmail(false)}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={{borderColor: handleBorderColorPassword(), width:'70%', marginBottom:'5%', borderWidth:2}}
                        secureTextEntry={true}
                        onChangeText={(text: string) => handleSenha(text)}
                        onFocus={() => setFocusPassword(true)}
                        onBlur={() => setFocusPassword(false)}
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
                    <TouchableOpacity onPress={() => handleNewAccount()} disabled={handleDisabledNewAccount()} style={{ backgroundColor: disabledNewAccount ? 'gray' : 'blue', alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: '50%', height: 30, borderRadius: 10, marginBottom: '10%' }}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.haveAccount} onPress={() => { navigation.goBack() }}>Já possuo conta</Text>

            </View>

        </>

    );

}

export default FormRegister;