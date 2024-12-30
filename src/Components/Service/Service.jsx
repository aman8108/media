import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animate only once
    });
  }, []);

  return (
    <>
      <div className="section">
        <div className="r-container">
          <div className="d-flex flex-column gap-5 align-items-center">
            <div
              className="d-flex flex-column gap-3 text-center align-items-center"
              style={{ maxWidth: 567 }}
              data-aos="fade-up" // Add animation
            >
              <div className="linear-gradient">
                <span className="devidd">Our Services</span>
              </div>
              <h3 className="fw-semibold devidd">
                Safeguarding Your Brand's Online Image
              </h3>
              <p className="text-color-2 devidd">
                We offer a comprehensive suite of digital marketing services
                designed to catapult your brand into the digital spotlight.
              </p>
            </div>
            <div className="row row-cols-xl-3 row-cols-1 align-items-stretch">
              <Link to="/PerformanceMarketing">
                <div
                  className="col pb-5"
                  data-aos="fade-up" // Add animation
                  data-aos-delay="100" // Staggered delay for effect
                >
                  <a href="service_detail.html">
                    <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
                      <div className="icon-box">
                        <img
                          src="https://prositus.rometheme.pro/html/demos/prodigy/image/online_marketing.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4 className="text-color devidd">Performance Marketing</h4>
                      <p className="font-1 text-color-2 devidd">
                        Crafting a comprehensive digital strategy tailored to your
                        brand's goals and target audience.
                      </p>
                    </div>
                  </a>
                </div>
              </Link>
              <div
                className="col pb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/Influencer">
                  <a href="service_detail.html">
                    <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
                      <div className="icon-box">
                        <img
                          src="https://prositus.rometheme.pro/html/demos/prodigy/image/online_shopping.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4 className="text-color devidd">Influencer Marketing</h4>
                      <p className="font-1 text-color-2 devidd">
                        Analyzing performance metrics and optimizing strategies to
                        improve reach and engagement.
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                className="col pb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link to="/metaAds">
                  <a href="service_detail.html">
                    <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
                      <div className="icon-box">
                        <img
                          src="https://prositus.rometheme.pro/html/demos/prodigy/image/seo.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h4 className="text-color devidd">Meta Ads</h4>
                      <p className="font-1 text-color-2 devidd">
                        Building high-quality backlinks from reputable websites to
                        increase domain authority.
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/service"
                className="btn btn-accent px-5 py-3 rounded-pill"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
