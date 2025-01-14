import React from 'react'
import { CiStar } from "react-icons/ci";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import amit from "../Assets/amitt.jpg"
import motu from "../Assets/motuseth.png"
import krsna from "../Assets/krsna.png"
import chotu from "../Assets/f1.jpg"
import yashashvi from "../Assets/yashashvi.png"
import tiwa from "../Assets/tiwa.jpg"
import miss from "../Assets/f2.jpg"
//import { FaFontAwesome } from 'react-icons/fa';

function Testimonial() {
  return (
    <>
      <div className="section bg-accent-6">
  <div className="r-container">
    <div className="d-flex justify-content-center">
      <div className="row row-cols-xl-2 row-cols-1 w-100 overflow-hidden rounded-4">
        <div className="col col-xl-6 d-flex align-items-center text-center text-xl-start bg-accent p-5">
          <div className="d-flex flex-column gap-3 mx-auto mb-4 align-items-center align-items-xl-start">
            <div className="linear-gradient">
              <span className="text-white">Testimonials</span>
            </div>
            <h3 className="fw-bold">What Our Clients Saying About Faunten Network</h3>
            <p className="text-color-2">
              Here’s a testimonial from a satisfied client who embarked on a
              journey towards financial prosperity with the help of our esteemed
              Finance and Investment Consultant.
            </p>
            <hr />
            <div className="d-flex flex-row gap-5">
              <div className="d-flex flex-column gap-1">
                <h3 className="fw-semibold">100%</h3>
                <div className="flex-row">
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  ><CiStar /></i>
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  ><CiStar /></i>
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  />
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  ><CiStar /></i>
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "var(--text-color-1)" }}
                  ><CiStar /></i>
                </div>
                <h4 className="text-color-2">Satisfied Clients</h4>
              </div>
              <div className="d-flex flex-column gap-1">
                <h3 className="fw-semibold">4.8</h3>
                <div className="flex-row">
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  ><CiStar />
</i>
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  ><CiStar /></i>
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  />
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "#FFD43B" }}
                  ><CiStar /></i>
                  <i
                    className="fa-solid fa-xs fa-star"
                    style={{ color: "var(--text-color-1)" }}
                  ><CiStar /></i>
                </div>
                <h4 className="text-color-2">Average Rating</h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col col-xl-6 col-12 d-flex align-items-center bg-accent-2"
          style={{ backgroundImage: "url(image/BG1.png)" }}
        >
          <div className="overflow-hidden">
            <div className="swiper swiperTestimonials swiper-initialized swiper-horizontal swiper-backface-hidden">
              {/* Additional required wrapper */}
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-dc9dd794fcf4bcaf"
                aria-live="off"
                style={{
                  cursor: "grab",
                  transitionDuration: "0ms",
                  transform: "translate3d(0px, 0px, 0px)"
                }}
              >
                
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 3"
                  style={{ width: 553, marginRight: 10 }}
                >
                  
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 3"
                  style={{ width: 553, marginRight: 10 }}
                >






                  <div className="d-flex flex-column gap-3 p-5">
                    <div className="d-flex flex-row gap-3 align-items-center">
                      <div className="customer-item">
                      
                      </div>
                      <div className="d-flex flex-column">
                       
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
                <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 3500,
    disableOnInteraction: true,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Autoplay, Pagination]} // Removed Navigation module
  className="mySwiper"
>
<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={amit} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
      width='200px'
    />
     <h3>Vijay Khanna</h3>
     <FaStar style={{ color: "#FFD43B" }} />
     <FaStar style={{ color: "#FFD43B" }} />
     <FaStar style={{ color: "#FFD43B" }} />
     <FaStar style={{ color: "#FFD43B" }} />
     <FaStar style={{ color: "#FFD43B" }} />
                  <br/>
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Faunten Marketing has been a game-changer for our business. Their expertise in digital marketing has boosted our online presence, driving more traffic and conversions. ”
    </span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={motu} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
    />
    <h3>Raj Ahluwalia</h3>
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />        
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
                 <FaStarHalfAlt style={{ color: "#FFD43B" }} />

                  <br/>
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “ “Working with Faunten Network was an absolute pleasure. Their team
      transformed our outdated website into a more modern and
      user-friendly platform. The results speak.””
    </span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={krsna} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
    /> <h3>Krishna Sharma</h3>
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />        
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
                  <br/>
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Working with Faunten Marketing has been a fantastic experience. Their team’s expertise in digital marketing has helped us grow our brand online and reach more customers. ”
    </span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={chotu} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
    />
     <h3>Sakshi Jain</h3>
     <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />        
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
                 <FaStarHalfAlt style={{ color: "#FFD43B" }} />
                  <br/>
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Faunten Marketing has exceeded our expectations in every way. Their innovative digital marketing strategies have significantly enhanced our online visibility and engagement. ”
    </span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={yashashvi} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
    /> <h3>Rose Mary</h3>
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />        
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
                  <br/>
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Working with this digital marketing team has been a great experience. Their innovative strategies have significantly boosted our online visibility and engagement.”
    </span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={miss} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
    />
    <h3>Anjani Mehta</h3>
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />        
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />
    <FaStar style={{ color: "#FFD43B" }} />                  <br/>
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “The digital marketing services provided have truly transformed our online presence. Their team’s expertise, creativity, and attention to detail have driven measurable results for our business.”
    </span>
  </div>
</SwiperSlide>

</Swiper>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Testimonial
