import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="How incredible that you want to teach."
                description="The first step is to fill this form" />

                <main>
                    <fieldset>
                        <legend>Your data</legend>
                        <Input label='Full name' name='name' />
                        <Input label='Avatar' name='avatar' />
                        <Input label='WhatsApp' name='whatsapp' />
                        <Textarea label='Bio' name='bio' />
                    </fieldset>

                    <fieldset>
                        <legend>About the class</legend>
                        <Select label='Subject' name='subject' options={[
                            {value: 'Art', label: 'Art'},
                            {value: 'Biology', label: 'Biology'},
                            {value: 'PE', label: 'Physical education'},
                            {value: 'Physical', label: 'Physical'},
                            {value: 'Geography', label: 'Geography'},
                            {value: 'Chemical', label: 'Chemical'}]} />
                        <Input label='Cost per hour' name='cost' />
                    </fieldset>

                    <fieldset>
                        <legend>Available Times</legend>
                        <Input label='Time' name='time' />
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning" />
                            Important! <br />
                            Fill all the data
                        </p>
                        <button type="button">
                            Save register
                        </button>
                    </footer>
                </main>
        </div>
    );
}

export default TeacherForm;