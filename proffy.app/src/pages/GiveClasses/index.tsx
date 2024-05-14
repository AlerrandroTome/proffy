import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function GiveClasses() {
    const { goBack } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Do you want to be a Proffy?</Text>
                <Text style={styles.description}>To get started, you need to register as a teacher on our platform</Text>
            </ImageBackground>

            <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>All right</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GiveClasses;