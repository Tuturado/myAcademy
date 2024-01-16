import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    },
    imageContainer: {
        height:'30%',
        width:'60%', 
        marginTop:'15%',
        marginLeft:'20%',
        marginBottom:'10%',    
    },
    image: {
        height: '100%',
        width: '100%',       
    },
    screenTitle:{
        display:'flex',
        textAlign:'center',
        marginBottom:'10%',
        color:'white',
        fontSize:30
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        color:'black',
        width: '100%'
    },
    emailInput: {
        width: '70%',
        marginBottom: '5%',
        borderWidth:2,
        borderColor:'blue'
    },
    passwordInput: {
        width: '70%',
        marginBottom: '5%',
        borderWidth:2,
        borderColor:'blue'
    },
    confirmPassword:{
        width: '70%',
        marginBottom: '5%',
        borderWidth:2,
        borderColor:'blue'
    },
    text: {
        color: 'white',
    },
    checkContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
    },
    buttonContainer: {
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '50%',
        height:30,
        borderRadius: 10,
        marginBottom:'10%'
    },
    enterButton:{
        display:'flex',
        alignItems:'center',      
    },
    bottomButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    bottomButtons:{
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '30%',
        height:30,
        borderRadius: 10,
    },
    textButton: {
        color: 'white'
    },
    haveAccount:{
        display:'flex',
        textAlign:'center',
        color:'white',
        fontSize: 15
    }
});