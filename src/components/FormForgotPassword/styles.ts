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
        marginBottom: '5%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    screenTitle: {
        display: 'flex',
        textAlign: 'center',
        marginBottom: '10%',
        color: 'white',
        fontSize: 30
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        width: '100%',
        marginTop: '5%'

    },
    emailInput: {
        width: '70%',
        borderWidth: 2,
        borderColor: 'blue'
    },

    text: {
        display: 'flex',
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },

    buttonContainer: {
        backgroundColor: 'blue',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 40,
        borderRadius: 10,
        marginBottom: '2%'
    },
    enterButton: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '5%'
    },
    bottomButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textButton: {
        color: 'white',
        fontSize: 15
    },
    backButton: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '5%'
    }
});
