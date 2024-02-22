import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";




const ModalComponent = (props: any) => {
    const { visible } = props
    console.log('PROPS DO MODAL:', props);
    console.log('VISIBLE MODAL: ', visible);

   

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {!visible}}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>Tem Certeza que deseja excluir esse treino?</Text>
                        <View style={styles.pressedContainer}>
                            <Pressable
                                style={[styles.button, styles.buttonExclude]}
                                onPress={() => console.log('SIM')}>
                                <Text style={{ color: 'black' }}>SIM!</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => !visible}>
                                <Text style={{ color: 'white' }}>NÃO!</Text>
                            </Pressable>
                        </View>


                    </View>
                </View>
            </Modal>
        </>

    )
};


export default ModalComponent;
