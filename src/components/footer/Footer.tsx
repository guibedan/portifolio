import React from 'react';
import './Styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Guibedan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portifolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/guilherme-bedan-1aa703249/" className="footer__social-link" target={"_blank"}>
            <i className="uil uil-linkedin"></i>
        </a>
        
        <a href="https://github.com/guibedan" className="footer__social-link" target={"_blank"}>
            <i className="uil uil-github"></i>
        </a>
            </div>

            <span className='footer__copy'>&#169; guibedan</span>
        </div>
    </footer>
  );
}

export default Footer;