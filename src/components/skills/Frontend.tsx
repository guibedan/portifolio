import './Styles.scss'


const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                    
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">VueJS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>


            </div>

            <div className="skills__group">
                    
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">React Native</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Swift</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Frontend;