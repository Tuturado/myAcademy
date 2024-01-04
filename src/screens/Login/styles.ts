import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
      
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    imageContainer: {
        height: '30%',
        width: '50%',
        marginTop: '40%',
        marginBottom: '10%'
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        width: '100%'
    },
    emailInput: {
        backgroundColor: 'white',
        width: '70%',
        marginBottom: '5%',
        borderWidth:2,
        borderColor:'blue'
    },
    passwordInput: {
        backgroundColor: 'white',
        width: '70%',
        marginBottom: '5%',
        borderWidth:2,
        borderColor:'blue'
    },
    text: {
        color: 'white',
    },
    buttonContainer: {
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '50%',
        height:'5%',
        borderRadius: 10,
    },
    bottomButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'5%'
    },
    registerButton:{
        backgroundColor:'blue',
        color:'white',
    },
    textButton: {
        color: 'white'
    }
});