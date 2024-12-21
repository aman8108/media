import React from 'react'

function About() {
  return (
    <>
      <div className="section pt-0">
  <div className="r-container">
    <div className="row row-cols-lg-2 row-cols-1 align-items-center">
      <div className="col px-4">
        <div className="d-flex flex-column gap-4 pe-lg-3 border-bottom border-1 border-dark pb-5 align-items-center align-items-xl-start">
          <div className="linear-gradient">
            <span className="text-white">About Company</span>
          </div>
          <h3 className="font-1 fw-bold">
            Join Our Journey of Digital Discovery
          </h3>
          <p className="text-color-2">
            Our data-driven approach ensures that every decision is backed by
            insights, every campaign is optimized for maximum impact, and every
            result is measurable. We bring unparalleled expertise to every
            project we undertake.
          </p>
          <div className="d-flex flex-row gap-3">
            <a href="about.html" className="btn btn-accent px-5 py-3">
              Read More
            </a>
          </div>
        </div>
        <div className="d-flex flex-row py-3 justify-content-between justify-content-xl-between justify-content-md-around text-center">
          <div className="pb-3">
            <h2 className="font-1 fw-bold outline">10+</h2>
            <span>Years Experience</span>
          </div>
          <div className="pb-3">
            <h2 className="font-1 fw-bold outline">200+</h2>
            <span>Statisfied Customers</span>
          </div>
          <div className="pb-3">
            <h2 className="font-1 fw-bold outline">50+</h2>
            <span>Expert Team</span>
          </div>
        </div>
      </div>
      <div className="col ps-0 mt-5">
        <div className="col position-relative ps-lg-0 ps-0 mb-3">
          <div className="mb-5 px-5">
            <img
              src="https://prositus.rometheme.pro/html/demos/prodigy/image/Digital-Marketing-3.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default About
