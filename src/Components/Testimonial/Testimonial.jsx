import React from 'react'
import { CiStar } from "react-icons/ci";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import amit from "../Assets/amitt.jpg"
import motu from "../Assets/motuseth.png"
import krsna from "../Assets/krsna.png"
import chotu from "../Assets/chotu.png"
import yashashvi from "../Assets/yashashvi.png"
import tiwa from "../Assets/tiwa.jpg"
import miss from "../Assets/miss.jpg"

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
                        <img
                          src="https://prositus.rometheme.pro/html/demos/prodigy/image/BG1.png"
                          className="img-fluid border-light rounded-circle"
                          alt=""
                          width={60}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <h5>Daniel Won</h5>
                        <span style={{ fontSize: 12 }}>Support Manager</span>
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
    delay: 2500,
    disableOnInteraction: false,
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
    />
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Faunten Marketing has been a game-changer for our business. Their expertise in digital marketing has boosted our online presence, driving more traffic and conversions. Their team delivers creative, tailored strategies that truly work. We highly recommend them for anyone looking to elevate their digital marketing efforts.”
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
    />
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Working with Faunten Marketing has been a fantastic experience. Their team’s expertise in digital marketing has helped us grow our brand online and reach more customers. Their tailored approach and commitment to success have made a real difference. We highly recommend them for anyone looking to enhance their digital presence.”
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
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Faunten Marketing has exceeded our expectations in every way. Their innovative digital marketing strategies have significantly enhanced our online visibility and engagement. The team is responsive, creative, and dedicated to delivering results. If you're looking to grow your brand in the digital space, Faunten Marketing is the right choice.”
    </span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-slide">
    <img
      src={yashashvi} // Replace with the actual image URL
      alt="Reviewer"
      className="reviewer-image"
    />
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “Working with this digital marketing team has been a great experience. Their innovative strategies have significantly boosted our online visibility and engagement. The team is professional, responsive, and results-driven, always delivering creative solutions to meet our needs. If you're looking to grow your digital presence, I highly recommend their services”
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
    <span className="fst-italic" style={{ fontSize: 24 }}>
      “The digital marketing services provided have truly transformed our online presence. Their team’s expertise, creativity, and attention to detail have driven measurable results for our business. We’ve seen increased engagement and growth, and I couldn’t be more pleased with the outcome. Highly recommend their services to anyone looking to boost their digital strategy.”
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
