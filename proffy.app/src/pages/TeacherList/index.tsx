import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Available Proffys' headerRight={
                (<TouchableOpacity onPress={handleToggleFiltersVisible}>
                    <Feather name='filter' color='#FFF' size={20} />
                </TouchableOpacity>)}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput style={styles.input} placeholder='Which subject?' placeholderTextColor='#C1BCC' />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Day of The Week</Text>      
                                <TextInput style={styles.input} placeholder='Which day?' placeholderTextColor='#C1BCC' />                    
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>      
                                <TextInput style={styles.input} placeholder='Which time?' placeholderTextColor='#C1BCC' />                    
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </PageHeader>
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

export default TeacherList;