import React from 'react';
import './Styles.scss'


const Qualifications = () => {
  return (
    <section className="qualifications section section__margin" id="qualifications">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            
            <div className="qualification__button button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
            </div>

          </div>

          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
              
              <div className="qualification__data">
                
                <div>
                  <h3 className="qualification__title">studying Systems and Analyst Development</h3>
                  <span className="qualification__subtitle">FATEC Americana university</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>
                
                <div>
                  <h3 className="qualification__title">Google Cloud Foundations</h3>
                  <span className="qualification__subtitle">SENAI - Americana</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>

              </div>

              <div className="qualification__data">
                
                <div>
                  <h3 className="qualification__title">High School</h3>
                  <span className="qualification__subtitle">Ary Menegatto</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>
                
                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              {/* <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>
                
                <div>
                  <h3 className="qualification__title">Google Cloud Foundations</h3>
                  <span className="qualification__subtitle">SENAI - Americana</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>

              </div> */}

            </div>

            {/* <div className="qualification__content">
              
              <div className="qualification__data">
                
                <div>
                  <h3 className="qualification__title">studying Systems and Analyst Development</h3>
                  <span className="qualification__subtitle">FATEC Americana university</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2022 - 2024
                  </div>
                </div>
                
                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>
                
                <div>
                  <h3 className="qualification__title">Google Cloud Foundations</h3>
                  <span className="qualification__subtitle">SENAI - Americana</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>

              </div>

              <div className="qualification__data">
                
                <div>
                  <h3 className="qualification__title">high school</h3>
                  <span className="qualification__subtitle"></span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>

                <div></div>

                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rouder"></span>
                  <span className="qualification__line"></span>
                </div>
                
                <div>
                  <h3 className="qualification__title">Google Cloud Foundations</h3>
                  <span className="qualification__subtitle">SENAI - Americana</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>

              </div>

            </div> */}

          </div>
        </div>
    </section>
  );
}

export default Qualifications;
