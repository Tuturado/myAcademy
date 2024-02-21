import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        margin: 0,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    screenTitle:{
        textAlign:'center',
        marginBottom:'5%',
        color:'white',
        fontSize:30
    },
    text: {
        color: 'white',
        fontSize:18,
        textAlign:'center'
    },   
    listItem: {
        marginTop:'10%',
        color: 'white',
        fontSize:15,
        textAlign:'center'
    },  
    returnButtonContainer:{
        padding:20,
        width:'100%',
        alignItems:'center'
    },
    returnButton:{
        backgroundColor:'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '30%',
        height:40,
    },
    textButton: {
        color: 'white'
    }
});
