import React from 'react'
import { MdVerified } from "react-icons/md";


function Whychoo() {
  return (
    <>
      <div className="section bg-accent">
  <div className="r-container">
    <div className="row row-cols-xl-2 row-cols-1 align-items-center">
      <div className="col col-xl-5 ps-0 mt-5 mb-5">
        <div className="position-relative ps-xl-0 ps-0 mb-3">
          <div className="mt-0 px-lg-5 px-xl-5 px-3">
            <img
              src="https://prositus.rometheme.pro/html/demos/prodigy/image/Digital-Marketing-2.png"
              alt=""
              className="img-fluid rounded-4"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="col col-xl-7 px-4">
        <div className="d-flex flex-column gap-3 pe-xl-5 text-center text-xl-start align-items-center align-items-xl-start">
          <div className="linear-gradient">
            <span className="text-white">Why Choose Us</span>
          </div>
          <h3 className="fw-bold">
            Pioneering the Future of Digital Marketing
          </h3>
          <p className="text-color-2">
            Our expert team collaborates closely with startups. We discuss a
            client's content marketing strategy.
          </p>
          <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
            <div>
              <i className="fa-solid fa-circle-check fa-xl accent-color mt-3 " ><MdVerified />
              </i>
            </div>
            <div className="d-flex flex-column">
              <h4>Expertise &amp; innovations</h4>
              <span className="text-color-2">
                Your success is our top priority. We take collaborative and
                approach.
              </span>
            </div>
          </div>
          <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
            <div>
              <i className="fa-solid fa-circle-check fa-xl accent-color-4 mt-3 "><MdVerified />
              </i>
            </div>
            <div className="d-flex flex-column">
              <h4>Specialized solutions</h4>
              <span className="text-color-2">
                Bespoke solutions crafted to meet your unique needs for optimal
                results.
              </span>
            </div>
          </div>
          <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
            <div>
              <i className="fa-solid fa-circle-check fa-xl accent-color-2 mt-3 "><MdVerified />
              </i>
            </div>
            <div className="d-flex flex-column">
              <h4>Clarity &amp; Interaction</h4>
              <span className="text-color-2">
                Craft clear, interactive content to captivate and inform your
                audience.
              </span>
            </div>
          </div>
          <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
            <div>
              <i className="fa-solid fa-circle-check fa-xl text-color mt-3 "><MdVerified />
              </i>
            </div>
            <div className="d-flex flex-column">
              <h4>Client centric approach</h4>
              <span className="text-color-2">
                Centered on clients, exceeding expectations with every
                interaction.
              </span>
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

export default Whychoo
