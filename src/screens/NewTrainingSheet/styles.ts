import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems:'center',
        width: '100%',
        height: '100%',
        margin: 0,
        backgroundColor: '#555',
        color:'white'
    },
    screenTitle:{
        display:'flex',
        textAlign:'center',
        marginBottom:'5%',
        color:'white',
        fontSize:30
    },
    selectBoxContainer:{
        width:'90%',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        flexDirection:'row',
        width:370,        
        marginTop:'5%',
        marginBottom:'2%'

    },
    nomeExercicio: {
        width: '50%',
        margin:5,
        borderWidth:2,
        borderColor:'blue'
    },
    passwordInput: {
        width: '70%',
        marginBottom: '5%',
        borderWidth:2,
        borderColor:'blue'
    },
    registerButtonContainer:{
        padding:20,
        width:'100%',
        alignItems:'center'
    },
    registerButton:{
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '30%',
        height:30,
    },
    text: {
        color: 'white',
    },
   
});