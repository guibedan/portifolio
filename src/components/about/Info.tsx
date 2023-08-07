import React from 'react';
import './Styles.scss'


const Info = () => {
  return (
    <div className="about__info grid">
        
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Developer</span>
        </div>

        <div className="about__box">
            <i className='bx bx-task about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">6 Projects</span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Work</h3>
            <span className="about__subtitle">team work</span>
        </div>

    </div>
  );
}

export default Info;