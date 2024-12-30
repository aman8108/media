import React, { useEffect } from 'react';
import { MdVerified } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Whychoo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="section bg-accent">
        <div className="r-container">
          <div className="row row-cols-xl-2 row-cols-1 align-items-center">
            <div
              className="col col-xl-5 ps-0 mt-5 mb-5"
              data-aos="fade-up" // Add animation
            >
              <div className="position-relative ps-xl-0 ps-0 mb-3">
                <div className="mt-0 px-lg-5 px-xl-5 px-3">
                  <img
                    src="https://prositus.rometheme.pro/html/demos/prodigy/image/Digital-Marketing-2.png"
                    alt=""
                    className="img-fluid-abt rounded-4"
                    width="100%"
                  />
                </div>
              </div>
            </div>
            <div
              className="col col-xl-7 px-4"
              data-aos="fade-up" // Add animation
              data-aos-delay="200" // Delay for staggered effect
            >
              <div className="d-flex flex-column gap-3 pe-xl-5 text-center text-xl-start align-items-center align-items-xl-start">
                <div className="linear-gradient">
                  <span className="">Why Choose Us</span>
                </div>
                <h3 className="fw-bold">Pioneering the Future of Digital Marketing</h3>
                <p className="text-color-2">
                  Our expert team collaborates closely with startups. We discuss a
                  client's content marketing strategy.
                </p>

                {[
                  {
                    title: "Expertise & Innovations",
                    description:
                      "Your success is our top priority. We take collaborative and approach.",
                    delay: 300,
                  },
                  {
                    title: "Specialized Solutions",
                    description:
                      "Bespoke solutions crafted to meet your unique needs for optimal results.",
                    delay: 400,
                  },
                  {
                    title: "Clarity & Interaction",
                    description:
                      "Craft clear, interactive content to captivate and inform your audience.",
                    delay: 500,
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "Centered on clients, exceeding expectations with every interaction.",
                    delay: 600,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center"
                    data-aos="fade-up" // Add animation
                    data-aos-delay={item.delay} // Stagger delay for each item
                  >
                    <div>
                      <i className="fa-solid fa-circle-check fa-xl accent-color mt-3">
                        <MdVerified />
                      </i>
                    </div>
                    <div className="d-flex flex-column">
                      <h4>{item.title}</h4>
                      <span className="text-color-2">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychoo;
