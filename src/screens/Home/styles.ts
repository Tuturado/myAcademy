import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        margin: 0,
        backgroundColor: '#555'
    },
    screenTitle:{
        display:'flex',
        textAlign:'center',
        marginBottom:'5%',
        color:'white',
        fontSize:30
    },
    text: {
        color: 'white',
    },
    exitButtonContainer:{
        padding:20,
        alignItems:'flex-end'
    },
    exitButton:{
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        width: '30%',
        height:30,
    },
    plusButtonContainer:{
        top:680,
        position:'relative',
        paddingRight:20,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        alignContent:'center',
        borderColor:'red',
        border: 5
    },
    plusButtom:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent:'center',
        width: '10%',
        height:40,
        borderRadius: 100,
    },
    textButton: {
        color: 'white'
    }
});