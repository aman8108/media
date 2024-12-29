import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Service from '../Service/Service';
import Footer from '../Price/Footer/Footer';
import { Link } from 'react-router-dom';


function ServiceP() {
  return (
    <>


<div
  className="section position-relative"
  style={{
    backgroundImage: "url(https://prositus.rometheme.pro/html/demos/prodigy/image/image-1920x1280-25.jpg)",
    height: "70vh"
  }}
>
  <div className="image-overlay" />
  <div className="r-container h-100 position-relative" style={{ zIndex: 2 }}>
    <div
      className="d-flex flex-column w-100 h-100 justify-content-center align-items-center mx-auto text-center text-white gap-3"
      style={{ maxWidth: 895 }}
    >
      <h1 className="font-1 m-0 text-white fw-semibold">Sevices</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Sevices
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>

      

    {/*=====progress END=======*/}
    {/* Preloader Start */}
  
    {/* Preloader End */}
    {/*=====HEADER START=======*/}
  
  
    {/*=====Mobile header end=======*/}
  
    {/*=====HERO AREA END=======*/}
    {/*=====SERVICE AREA START=======*/}
    <div className="service3 service-page sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img1.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <Link to="/brandbuilding">Brand building</Link>
                </h4>
                <div className="space16" />
                <p>
                Unlock the true potential of your brand with Fox Media's comprehensive brand-building services.
                </p>
                <a href="#" className="learn">
                  <i to className="fa-solid fa-arrow-right"><Link to="/brandbuilding"><FaArrowAltCircleRight /></Link></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img2.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <Link to="/gmb">GMB optimisation</Link>
                </h4>
                <div className="space16" />
                <p>
                Put your business on the digital map with Fox Media's Google My Business (GMB) optimization.
                </p>
                <Link to="/gmb" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img4.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <Link tof="/meme">Meme Marketing</Link>
                </h4>
                <div className="space16" />
                <p>
                Step into the lighter side of the internet with Fox Media's meme marketing services.
                </p>
                <Link to="/meme" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img5.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <a href="#">Meta ADS</a>
                </h4>
                <div className="space16" />
                <p>
                Ready to explore the forefront of advertising with Meta Ads (or Facebook Ads)..
                </p>
                <a href="#" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img6.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <a href="#">Influencer
                  Marketing</a>
                </h4>
                <div className="space16" />
                <p>
                Dive into the sphere of industry thought leaders and social media stars with Fox Media's influencer marketing services.
                </p>
                <a href="#" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img6.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <a href="#">Google Ads</a>
                </h4>
                <div className="space16" />
                <p>
                Seeking targeted traffic, increased brand visibility, and amplified conversions for your business
                </p>
                <a href="#" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img5.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <a href="#">Graphics design</a>
                </h4>
                <div className="space16" />
                <p>
                  At Faunten Media, we comprehend that exceptional design transcends mere aesthetics.
                </p>
                <a href="#" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service3-box">
              <div className="image">
                <img src="https://html.fleexstudio.com/seomax/assets/img/service/service3-img3.png" alt="" />
              </div>
              <div className="heading3">
                <h4>
                  <a href="#">Outdoor
                  marketing</a>
                </h4>
                <div className="space16" />
                <p>
                Effective marketing extends beyond digital platforms. Outdoor Marketing serves an imperative role ..
                </p>
                <a href="#" className="learn">
                  <i className="fa-solid fa-arrow-right"><FaArrowAltCircleRight /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=====SERVICE AREA END=======*/}
    {/*=====WORKS AREA START=======*/}
    
    {/*=====WORK AREA END=======*/}
    {/*===== SKILLS AREA STARS =======*/}

    {/*=====CTA AREA START=======*/}
    
    {/*=====FOOTER AREA END=======*/}
    {/*=== js === */}
    <Service/>
    <Footer/>
  </>
  )
}

export default ServiceP
