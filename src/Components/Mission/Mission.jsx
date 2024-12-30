import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles

function Mission() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for smooth animation
  }, []);

  return (
    <>
      <section className="MissionVission">
        <div className="titleSection" data-aos="fade-up">
          <span>Our Mission, Vision</span>
          <h2>Our Company Growth</h2>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6" data-aos="slide-up">
              <div className="missionVissionCard">
                <div className="cardImage">
                  <img
                    src="https://skdm.in/static/media/mission.86521dbb8a2290379d71.png"
                    alt="About Mission"
                  />
                </div>
                <div className="cardDiscription">
                  <h4>Our Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="slide-up">
              <div className="missionVissionCard">
                <div className="cardImage">
                  <img
                    src="https://skdm.in/static/media/vission.6d0a1938fabc017754e5.png"
                    alt="About Vision"
                  />
                </div>
                <div className="cardDiscription">
                  <h4>Our Vision</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
