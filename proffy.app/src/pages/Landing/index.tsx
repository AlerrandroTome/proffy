import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import hearthIcon from '../../assets/images/icons/heart.png';
import { useEffect, useState } from 'react';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses', {});
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('Study', {});
    }


    useEffect(() => {
        api.get('connections').then(response => {
            setTotalConnections(response.data.total);
        });
    }, []);

    return (
    <View style={styles.container}>
        <Image source={landingImg} style={styles.banner} />
        <Text style={styles.title}>
            Wellcome, {'\n'}
            <Text style={styles.titleBold}>
                What would you like to do?
            </Text>
        </Text>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                <Image source={studyIcon} />
                <Text style={styles.buttonText}>Study</Text>
            </TouchableOpacity>            
            <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                <Image source={giveClassIcon} />
                <Text style={styles.buttonText}>Give Class</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.totalConnections}>
            Total of {totalConnections} connections already made {' '}
            <Image source={hearthIcon} />
        </Text>
    </View>
    );
}

export default Landing