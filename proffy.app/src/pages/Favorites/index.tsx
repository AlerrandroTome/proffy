import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title='Favorite Proffys' />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }} style={styles.teacherList}>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default Favorites;