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
                {/* <div className="linear-gradient">
                  <span className="">Why Choose Us</span>
                </div> */}
                <h3 className="fw-bold">Why Choose Faunten Network</h3>
                <p className="text-color-2">
                We are connected to the pulse of the online We’re here to revolutionize your brand’s presence in this dynamic digital world. We’re a team of passionate professionals armed with the latest digital tools and strategies, all geared up to lift your business into the limelight
                we aim to enhance your brand, engage your audience, and drive tangible results.
                </p>

                {[
                  {
                    title: "Who Are We",
                    description:
                      " We are an experienced marketing agency based in India, dedicated to connecting brands with the right influencers for impactful campaigns.Fauntennetwork is a full-service marketing agency committed to providing innovative and effective marketing solutions tailored to your business needs. With a team of passionate experts, we help brands connect with their audience, increase visibility, and achieve measurable growth.",
                    delay: 300,
                  },
                  {
                    title: "What We Do",
                    description:
                      "At Fauntennetwork, we specialize in a wide range of marketing services:In a world where success is ushered by digital footprints, we serve as your stewards on your journey to online greatness.At Fauntennetwork, we don’t just steer the digital landscape; we thrive within it.",
                    delay: 400,
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
