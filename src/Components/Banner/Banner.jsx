import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import Typewriter from "typewriter-effect";



function Banner() {
  return (
    <>
      <div className="section desktop-banner position-relative ps-0">
  <div className="floating-banner-land">
    <img
      src="https://prositus.rometheme.pro/html/demos/prodigy/image/image-1920x1280-19.jpg"
      alt=""
      className="img-fluid-land"
      // style={{ borderTopRightRadius: "30em", borderBottomRightRadius: "30em" }}
    />
  </div>
  <div className="r-container ps-4 ps-xl-0">
    <div className="row row-cols-lg-2 row-cols-1 align-items-center">
      <div className="col"></div>
      <div className="col ps-4 pe-0">
        <div className="d-flex flex-column gap-4">
         
         
         {/* <!-- <div className="linear-gradient">
            <span className="text-white">Welcome to Faunten Network</span>
          </div>--> */}
          <h1 className="fw-semibold">Welcome to <Typewriter
    options={{
      strings: [
        "Faunten Network",
        
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
    ></Typewriter></h1>
          <h2 className="fw-semibold pl-1">Ignite Your Online Performance</h2>
          


          <p>
            At Faunten Network, we help clients navigate the dynamic digital landscape
            and achieve their marketing objectives with precision and impact.
          </p>
          <div className="d-flex flex-row gap-4">
            <a href="contact.html" className="btn btn-accent-land px-5 py-3">
              Contact Us
            </a>
            {/* <button
              type="button"
              className="request-loader"
              data-bs-toggle="modal"
              data-bs-target="#e119"
            >
              <i><CiPlay1 /></i>
            </button> */}
            <div
              className="modal fade"
              id="e119"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-dark-color">
                 
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden w-100 mt-5">
  <div className="d-flex mb-4" style={{ overflowX: "auto", gap: "10px" }}>
    <div className="d-flex justify-content-center">
      <img
        src="https://prositus.rometheme.pro/html/demos/prodigy/image/Logo-2.png"
        className="img-fluid"
        alt="Logo 1"
        style={{ width: "117.25px" }}
      />
    </div>
    <div className="d-flex justify-content-center">
      <img
        src="https://prositus.rometheme.pro/html/demos/prodigy/image/Logo-2.png"
        className="img-fluid"
        alt="Logo 2"
        style={{ width: "117.25px" }}
      />
    </div>
    <div className="d-flex justify-content-center">
      <img
        src="https://prositus.rometheme.pro/html/demos/prodigy/image/Logo-2.png"
        className="img-fluid"
        alt="Logo 3"
        style={{ width: "117.25px" }}
      />
    </div>
    <div className="d-flex justify-content-center">
      <img
        src="https://prositus.rometheme.pro/html/demos/prodigy/image/Logo-2.png"
        className="img-fluid"
        alt="Logo 4"
        style={{ width: "117.25px" }}
      />
    </div>
    
  </div>
</div>
       
        </div>
      </div>
    </div>
  </div>
</div>
<div className="section  mobile-banner position-relative ps-0 pb-0" style={{"padding-right":'0',"padding-top":'0px'}}>
<div className="floating-banner-land">
    <img
      src="https://prositus.rometheme.pro/html/demos/prodigy/image/image-1920x1280-19.jpg"
      alt=""
      className="img-fluid-land"
      // style={{ borderTopRightRadius: "30em", borderBottomRightRadius: "30em" }}
    />
   <div className="overlay-wrapper"></div>
    <h3 className="fw-semibold overlay-title">WELCOME TO</h3>
    <h1 className="fw-semibold overlay-title2"><Typewriter
    options={{
      strings: [
        "FAUNTEN NETWORK",
        
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
     pauseFor:60000
    }}
    ></Typewriter></h1>
  </div>
  <div className='justify-self-center mt-4 ml-4 mr-4 mb-4' style={{"padding":'0 25px 0 25px'}}>
  <h2 className="fw-semibold ">Ignite Your Online Performance</h2>
          


  <div style={{ fontSize: "1.5rem", fontFamily: "monospace", textAlign: "center" }}>
      <Typewriter
        options={{
          strings: [
            "Navigating the dynamic digital landscape...",
            "Achieving marketing objectives with precision...",
            "Delivering impact-driven results with Faunten Network!",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  </div>
</div>

    </>
  )
}

export default Banner
