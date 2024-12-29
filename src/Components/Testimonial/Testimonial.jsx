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
                <h3 className="fw-semibold">98%</h3>
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
                {/* Slides */}
                {/* <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 3"
                  style={{ width: 553, marginRight: 10 }}
                >
                  <div className="d-flex flex-column gap-3 p-5">
                    <div className="d-flex flex-row gap-3 align-items-center">
                      <div className="customer-item">
                        <img
                          src="image/image-600x600-21.jpg"
                          className="img-fluid border-light rounded-circle"
                          alt=""
                          width={60}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <h5>Dianna Russel</h5>
                        <span style={{ fontSize: 12 }}>Support Manager</span>
                      </div>
                    </div>
                    <span className="fst-italic" style={{ fontSize: 24 }}>
                      {" "}
                      “Working with prodigy was an absolute pleasure. Their team
                      transformed our outdated website into a more modern and
                      user-friendly platform. The results speak "
                    </span>
                  </div>
                </div> */}
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 3"
                  style={{ width: 553, marginRight: 10 }}
                >
                  {/* <div className="d-flex flex-column gap-3 p-5">
                    <div className="d-flex flex-row gap-3 align-items-center">
                      <div className="customer-item">
                        <img
                          src="image/image-600x600-20.jpg"
                          className="img-fluid border-light rounded-circle"
                          alt=""
                          width={60}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <h5>Mark Loan</h5>
                        <span style={{ fontSize: 12 }}>Support Manager</span>
                      </div>
                    </div>
                    <span className="fst-italic" style={{ fontSize: 24 }}>
                      {" "}
                      “Working with prodigy was an absolute pleasure. Their team
                      transformed our outdated website into a more modern and
                      user-friendly platform. The results speak "
                    </span>
                  </div> */}
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
      <span className="fst-italic" style={{ fontSize: 24 }}>
                      {" "}
                      “Working with Faunten Network was an absolute pleasure. Their team
                      transformed our outdated website into a more modern and
                      user-friendly platform. The results speak "
                    </span>
      </SwiperSlide>
      <SwiperSlide>
      <span className="fst-italic" style={{ fontSize: 24 }}>
                      {" "}
                      “Working with Faunten Network was an absolute pleasure. Their team
                      transformed our outdated website into a more modern and
                      user-friendly platform. The results speak "
                    </span>
      </SwiperSlide>
      <SwiperSlide>
      <span className="fst-italic" style={{ fontSize: 24 }}>
                      {" "}
                      “Working with Faunten Network was an absolute pleasure. Their team
                      transformed our outdated website into a more modern and
                      user-friendly platform. The results speak "
                    </span>
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
