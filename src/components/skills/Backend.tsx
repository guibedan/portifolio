import './Styles.scss'


const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                    
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Express</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>


            </div>

            <div className="skills__group">
                    
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Spring</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Backend;
