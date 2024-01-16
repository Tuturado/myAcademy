import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        height: '100%',
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
        padding: 20,
        alignItems: 'flex-end'
    },
    exitButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 30,
    },
    plusButtonContainer: {
        paddingRight: 20,
        alignItems: 'flex-end',
        borderColor: 'red',
        border: 5
    },
    plusButtom: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        height: 60,
        borderRadius: 100,
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