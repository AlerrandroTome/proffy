import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");
    
    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    const [scheduleItems, setScheduleItems] = useState([{week_day: '0', from: "", to: ""}]);
    
    function onAddNewScheduleTime() {
        setScheduleItems([...scheduleItems, {week_day: '0', from: "", to: ""}])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const newArray = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });

        setScheduleItems(newArray);
    }

    function functionHandleCreateClass(event: FormEvent) {
        event.preventDefault();
        const data = {
            name, 
            avatar, 
            whatsapp, 
            bio, 
            subject, 
            cost: Number(cost), 
            scheduleItems
        }

        api.post('classes', data).then(() => {
            alert('Registered successfully!!');
            navigate('/');
        }).catch(() => {
            alert('Error when registering!!')
        });
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="How incredible that you want to teach."
                description="The first step is to fill this form" />
            <main>
                <form onSubmit={functionHandleCreateClass}>
                    <fieldset>
                        <legend>Your data</legend>
                        <Input label='Full name' name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input label='Avatar' name='avatar' value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input label='WhatsApp' name='whatsapp' value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                        <Textarea label='Bio' name='bio' value={bio} onChange={(e) => { setBio(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>About the class</legend>
                        <Select label='Subject' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} 
                            options={[
                                {value: 'Art', label: 'Art'},
                                {value: 'Biology', label: 'Biology'},
                                {value: 'PE', label: 'Physical education'},
                                {value: 'Physical', label: 'Physical'},
                                {value: 'Geography', label: 'Geography'},
                                {value: 'Mathematics', label: 'Mathematics'},
                                {value: 'Chemical', label: 'Chemical'}]} />
                        <Input label='Cost per hour' name='cost' value={cost} onChange={(e) => { setCost(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Available Times
                            <button type="button" onClick={onAddNewScheduleTime}>+ New time</button>
                        </legend>
                        {scheduleItems.map((item, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select label='Week Day' name='week_day' value={item.week_day} onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            {value: '0', label: 'Sunday'},
                                            {value: '1', label: 'Monday'},
                                            {value: '2', label: 'Tuesday'},
                                            {value: '3', label: 'Wednesday'},
                                            {value: '4', label: 'Thursday'},
                                            {value: '5', label: 'Friday'},
                                            {value: '6', label: 'Saturday'}]} />

                                    <Input name='from' label='From' type='time' value={item.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                                    <Input name='to' label='To' type='time' value={item.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning" />
                            Important! <br />
                            Fill all the data
                        </p>
                        <button type="submit">
                            Save register
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;