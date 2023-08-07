import './Styles.scss'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/guilherme-bedan-1aa703249/" className="home__social-icon" target={"_blank"}>
            <i className="uil uil-linkedin"></i>
        </a>
        
        <a href="https://github.com/guibedan" className="home__social-icon" target={"_blank"}>
            <i className="uil uil-github"></i>
        </a>
    </div>
  );
}

export default Social;

