import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalConnections(response.data.total);
        });
    }, []);

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <h2>Your online study platform.</h2>
            </div>

            <img src={landingImg} alt="Study Patform" className="hero-image" />
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={studyIcon} alt="Study" />
                    <p>
                        Study
                    </p>
                </Link>
                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Give Class" />
                    <p>
                        Give Classes
                    </p>
                </Link>
            </div>

            <span className="total-connections">
                Total of {totalConnections} connections already made
                <img src={purpleHeartIcon} alt="Purple Heart" />
            </span>
        </div>
    </div>    
    );
}

export default Landing;