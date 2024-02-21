import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexWrap: 'nowrap',
        margin: 0,
        backgroundColor: '#555'
    },
    screenTitle: {
        display: 'flex',
        textAlign: 'center',
        marginBottom: '5%',
        color: 'white',
        fontSize: 30
    },
    text: {
        color: 'white',
    },
    exitButtonContainer: {
        padding: 10,
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginTop:'6%',
        marginBottom:'5%'
    },
    exitButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 30,
    },
    filterInput:{
        width: '70%',
        borderWidth: 2,
        borderColor: 'blue',
    },
    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    excludeTrainingButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius:10
    },
    excludeAllTrainingButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 30,
    },
    updateTrainingButton: {
        backgroundColor: 'green',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius:10
    },
    updateStatusTraining: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width:'100%',
        height: 30,
    },
    modalView: {
        width: '70%',
        height: '50%',
        color: 'white',
        margin: 20,
        backgroundColor: 'red',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '70%',
    },
    pressedContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: 'blue',
    },
    buttonExclude: {
        backgroundColor: 'yellow',
    },
    plusButtonContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginBottom:'10%',
        alignItems: 'flex-end',
    },
    plusButtom: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        height: 60,
        borderRadius: 100,
    },
    resetAllTrainingButton:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%', 
        height: 40
    },
    item: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    textButton: {
        color: 'white',
        fontSize: 20
    }
});