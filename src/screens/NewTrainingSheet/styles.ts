import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        alignItems:'center',
        margin: 0,
        backgroundColor: '#555',
        color:'white'
    },
    screenTitle:{
        display:'flex',
        textAlign:'center',
        marginBottom:'5%',
        marginTop:'5%',
        color:'white',
        fontSize:30
    },
    selectBoxContainer:{
        width:'90%',
        marginBottom:'5%'
    },
    inputContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        flexDirection:'row',
        width:360,        
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
    observacoes: {
        width: '90%',
        height:100,
        margin:5,
        borderWidth:2,
        borderColor:'blue'
    },
    registerButtonContainer:{
        padding:20,
        width:'100%',
        alignItems:'center'
    },
    registerButton:{
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '40%',
        height:40,
    },
    returnButton:{
        backgroundColor:'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '30%',
        height:40,
    },
    bottomButtonsContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    text: {
        color: 'white',
    },
   
});