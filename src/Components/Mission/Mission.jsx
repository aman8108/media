import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles
import missi from "../Assets/mission.86521dbb8a2290379d71.png"
import vissi from "../Assets/vission.6d0a1938fabc017754e5.png"
function Mission() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for smooth animation
  }, []);

  return (
    <>
      <section className="MissionVission section">
        <div className="titleSection" data-aos="fade-up">
          {/* <span>Our Mission, Vision</span> */}
          <h2>Our Mission & Vision</h2>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6" data-aos="slide-up">
              <div className="missionVissionCard">
                <div className="cardImage">
                  <img
                    src={missi}
                    alt="About Mission"
                  />
                </div>
                <div className="cardDiscription">
                  <h4>Our Mission</h4>
                  <p>
                  Our mission is to empower businesses by providing them with the tools, strategies, and insights they need to thrive in a competitive marketplace. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="slide-up">
              <div className="missionVissionCard">
                <div className="cardImage">
                  <img
                    src={vissi}
                    alt="About Vision"
                  />
                </div>
                <div className="cardDiscription">
                  <h4>Our Vision</h4>
                  <p>
                  Our goal is to create value-driven campaigns that resonate with your target audience and deliver tangible results.                  </p>
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
