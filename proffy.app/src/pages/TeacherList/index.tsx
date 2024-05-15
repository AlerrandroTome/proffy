import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
        setIsFiltersVisible(false);
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeacherIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });
                setFavorites(favoritedTeacherIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

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
                        <TextInput 
                            style={styles.input} 
                            value={subject} 
                            onChangeText={text => setSubject(text)} 
                            placeholder='Which subject?' 
                            placeholderTextColor='#C1BCC' />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Day of The Week</Text>      
                                <TextInput 
                                    style={styles.input} 
                                    value={week_day} 
                                    onChangeText={text => setWeekDay(text)} 
                                    placeholder='Which day?' 
                                    placeholderTextColor='#C1BCC' />                    
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>      
                                <TextInput 
                                    style={styles.input} 
                                    value={time} 
                                    onChangeText={text => setTime(text)} 
                                    placeholder='Which time?' 
                                    placeholderTextColor='#C1BCC' />                    
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </PageHeader>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }} style={styles.teacherList}>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;