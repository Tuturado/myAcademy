import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";


const FormLogin = () => {

    const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [exibirSenha, setExibirSenha] = useState<boolean>(false);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [disabledEntry, setDisabledEntry] = useState<boolean>(true)

    const handleSign = () => {
        auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert("Logado com sucesso!");
            })
            .catch((error) => {
                console.log(error);
                Alert.alert("Ops!", "Algo deu errado ao logar!");
            })
    };

    useEffect(()=>{
        if(email.length==0 || senha.length==0 ){
            setDisabledEntry(true);
        }
        else{
            setDisabledEntry(false);
        }
    },[email, senha])


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);
        setEmail('');
        setSenha('');
        return subscriber;
    }, []);


    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/img/myAcademy.png')} style={styles.image} />
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
                        textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: "none" }}
                        onPress={(isChecked: boolean) => { setExibirSenha(!exibirSenha) }}
                    />
                </View>

                <View style={styles.enterButton}>
                    <TouchableOpacity onPress={() => handleSign()} disabled={disabledEntry ? true : false} style={{backgroundColor: disabledEntry ? 'gray' : 'blue', alignItems:'center', alignContent:'center', justifyContent:'center', width:'50%', height:30, borderRadius:10, marginBottom:'10%'}}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('register')} style={styles.bottomButtons}>
                        <Text style={styles.textButton}>Registrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')} style={styles.bottomButtons}>
                        <Text style={styles.textButton}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textBottomContainer}>
                    <Text style={styles.textBottoms}>O que há de novo?</Text>
                    <Text style={styles.textBottoms}>Versão 1.0</Text>
                </View>

            </View>

        </>

    )
};


export default FormLogin;