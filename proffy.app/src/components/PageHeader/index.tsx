import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface PageHeaderProps {
    title: string;
    children?: ReactNode;
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain' />
                </TouchableOpacity>

                <Image source={logoImg} resizeMode='contain' />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    );
}

export default PageHeader;