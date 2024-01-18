import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    },
    imageContainer: {
        height: '30%',
        width: '60%',
        marginTop: '15%',
        marginLeft: '20%',
        marginBottom: '10%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    screenTitle: {
        textAlign: 'center',
        marginBottom: '10%',
        color: 'white',
        fontSize: 30
    },
    inputContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        width: '100%'
    },
    emailInput: {
        width: '70%',
        marginBottom: '5%',
        borderWidth: 2,
    },
    passwordInput: {
        width: '70%',
        marginBottom: '5%',
        borderWidth: 2,
    },
    confirmPassword: {
        width: '70%',
        marginBottom: '5%',
        borderWidth: 2,
    },
    text: {
        color: 'white',
    },
    buttonContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 30,
        borderRadius: 10,
        marginBottom: '10%'
    },
    enterButton: {
        alignItems: 'center',
    },
    textButton: {
        color: 'white'
    },
    haveAccount: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        textDecorationLine: 'underline'
    }
});
