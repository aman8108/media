import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutright from "../Assets/FaboutDigital-Marketing-3.png"

function About() {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      easing: 'ease-in-out', // easing function
      once: false, // whether animation should happen only once
    });
  }, []);
   useEffect(() => {
      window.scrollTo(0, 0); 
     // Scroll to top when component mounts
    }, []);
  

  return (
    <>
      <div className="section pt-0 mt-5">
        <div className="r-container">
          <div className="row row-cols-lg-2 row-cols-1 align-items-center">
            <div
              className="col px-4"
              data-aos="fade-up" // AOS animation type
            >
              <div className="d-flex flex-column gap-4 pe-lg-3 border-bottom border-1 border-dark pb-5 align-items-center align-items-xl-start">
                {/* <div className="linear-gradient">
                  <span className="fntitle">About Faunten Network</span>
                </div> */}
                <h3 className="font-1 fw-bold">
                 About Faunten Network
                </h3>
                <p className="text-color-2">
                  We help companies achieve long-term growth by becoming their
                  personal marketing department not as a typical “vendor” In a
                  world where success is ushered by digital footprints, we serve
                  as your stewards on your journey to online greatness. At
                  Fauntennetwork, we've developed an exclusive team of certified
                  digital experts with deep expertise in conversion optimization
                  (the science of converting visitors into customers from your
                  website). We are an experienced influencer marketing agency
                  based in India, dedicated to connecting brands with the right
                  influencers for impactful campaigns.
                </p>
              
              </div>
              <div
                className="d-flex flex-row py-3 justify-content-between justify-content-xl-between justify-content-md-around text-center"
                data-aos="fade-up" // Apply AOS animation
                data-aos-delay="200" // Delay the animation
              >
                <div className="pb-3">
                  <h2 className="font-1 fw-bold outline">7+</h2>
                  <span>Years Experience</span>
                </div>
                <div className="pb-3">
                  <h2 className="font-1 fw-bold outline">1700+</h2>
                  <span>Satisfied Customers</span>
                </div>
                <div className="pb-3">
                  <h2 className="font-1 fw-bold outline">50+</h2>
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
            <div
              className="col ps-0 mt-5"
              data-aos="fade-up" // Add animation
              data-aos-delay="400" // Adjust delay for staggered effect
            >
              <div className="col position-relative ps-lg-0 ps-0 mb-3">
                <div className="mb-5 px-5">
                  <img
                    src={aboutright}
                    alt=""
                    className="img-fluid-abt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
