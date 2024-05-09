import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import hearthIcon from '../../assets/images/icons/heart.png';

function Landing() {
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
            <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                <Image source={studyIcon} />
                <Text>Study</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                <Image source={giveClassIcon} />
                <Text>Give Class</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.totalConnections}>
            Total of 208 connections {' '}
            <Image source={hearthIcon} />
        </Text>
    </View>
  );
}

export default Landing