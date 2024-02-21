import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


function WhyIsNew() {
    const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.screenTitle}>O que há de novo?</Text>
                <Text style={styles.text}>Bem-vindo ao MyAcademy!</Text>
                <Text style={styles.text}>Abaixo estarão as novidades da versão:</Text>
                <Text style={styles.listItem}>-Cadastro da ficha de treino;</Text>
                <Text style={styles.listItem}>-Edição da ficha de treino;</Text>
                <Text style={styles.listItem}>-Deletar um treino específico;</Text>
                <Text style={styles.listItem}>-Marcar treino como concluído;</Text>
                <Text style={styles.listItem}>-Resetar os treinos da semana;</Text>
                <Text style={styles.listItem}>-Deletar a ficha de treino completa;</Text>
                
                <View style={styles.returnButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
                        <Text style={styles.text}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default WhyIsNew;