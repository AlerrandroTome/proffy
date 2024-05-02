import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number,
    subject: string,
    cost: number,
    user_id: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string
}

export interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createANewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>

        <footer>
            <p>Price/Hour
                <strong>USD$ {teacher.cost}</strong>
            </p>
            <a target='_blank' onClick={createANewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={WhatsappIcon} alt="Get in touch by whatsapp" />
                Get in touch
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;