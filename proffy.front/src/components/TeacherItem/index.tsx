import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars.githubusercontent.com/u/53446642?v=4" alt="Alerrandro Tome" />
            <div>
                <strong>Alerrandro Tome</strong>
                <span>Chemistry</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Sit quae aut nam quas iusto, fugit dolorum. Omnis ab quibusdam voluptatem, obcaecati sed quisquam illum, quis accusantium officia minus aperiam! Error?
        </p>

        <footer>
            <p>Price/Hour
                <strong>USD$80,00</strong>
            </p>
            <button type="button">
                <img src={WhatsappIcon} alt="Get in touch by whatsapp" />
                Get in touch
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;