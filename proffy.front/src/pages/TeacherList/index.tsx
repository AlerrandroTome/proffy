import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers.">
                <form id="search-teachers">
                <Select label='Subject' name='subject' options={[
                            {value: 'Art', label: 'Art'},
                            {value: 'Biology', label: 'Biology'},
                            {value: 'PE', label: 'Physical education'},
                            {value: 'Physical', label: 'Physical'},
                            {value: 'Geography', label: 'Geography'},
                            {value: 'Chemical', label: 'Chemical'}]} />
                <Select label='Week Day' name='week_day' options={[
                            {value: '0', label: 'Sunday'},
                            {value: '1', label: 'Monday'},
                            {value: '2', label: 'Tuesday'},
                            {value: '3', label: 'Wednesday'},
                            {value: '4', label: 'Thursday'},
                            {value: '5', label: 'Friday'},
                            {value: '6', label: 'Saturday'}]} />
                    <Input type='time' label='Hour' name='time' />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;