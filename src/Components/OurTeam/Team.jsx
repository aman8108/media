import React from 'react'

function Team() {
  return (
    <>
      <div className="section bg-light-color">
  <div className="r-container">
    <div
      className="d-flex flex-column text-center align-items-center mx-auto gap-4 mb-4"
      style={{ maxWidth: 678 }}
    >
      <div className="linear-gradient">
        <span className="text-white">Our Team</span>
      </div>
      <h3 className="fw-semibold">Meet Our&nbsp;Expert&nbsp;Team Members</h3>
      <p className="text-color-2">
        Our services are designed to maximize visibility, enhance brand
        recognition, and drive customer engagement.
      </p>
    </div>
    <div className="row row-cols-lg-3 row-cols-1 pb-3">
      <div className="col mb-3">
        <div className="position-relative">
          <img
            src="https://prositus.rometheme.pro/html/demos/prodigy/image/image-600x800-3.jpg"
            alt="image"
            className="img-fluid rounded-3 w-100"
          />
          <div
            className="position-absolute start-0 w-100"
            style={{ bottom: "3rem" }}
          >
            <div className="w-75 bg-accent-6 rounded-end-4 text-white d-flex flex-column ps-5 py-4">
              <div className="mb-2">
                <h5 className="m-0 font-1">David Smith</h5>
                <span>Product Manager</span>
              </div>
              <div className="social-container team mb-lg-0 mb-3 gap-2">
                <a href="https://www.facebook.com" className="social-item">
                  <i className="fa-brands fa-xs fa-facebook-f" />
                </a>
                <a href="https://www.twitter.com" className="social-item">
                  <i className="fa-brands fa-xs fa-twitter" />
                </a>
                <a href="https://www.instagram.com" className="social-item">
                  <i className="fa-brands fa-xs fa-instagram" />
                </a>
                <a href="https://www.youtube.com" className="social-item">
                  <i className="fa-brands fa-xs fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="position-relative">
          <img
            src="https://prositus.rometheme.pro/html/demos/prodigy/image/image-600x800-16.jpg"
            alt="image"
            className="img-fluid rounded-3 w-100"
          />
          <div
            className="position-absolute start-0 w-100"
            style={{ bottom: "3rem" }}
          >
            <div className="w-75 bg-accent-6 rounded-end-4 text-white d-flex flex-column ps-5 py-4">
              <div className="mb-2">
                <h5 className="m-0 font-1">Alicia Rodguez</h5>
                <span>Content Manager</span>
              </div>
              <div className="social-container team mb-lg-0 mb-3 gap-2">
                <a href="https://www.facebook.com" className="social-item">
                  <i className="fa-brands fa-xs fa-facebook-f" />
                </a>
                <a href="https://www.twitter.com" className="social-item">
                  <i className="fa-brands fa-xs fa-twitter" />
                </a>
                <a href="https://www.instagram.com" className="social-item">
                  <i className="fa-brands fa-xs fa-instagram" />
                </a>
                <a href="https://www.youtube.com" className="social-item">
                  <i className="fa-brands fa-xs fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="position-relative">
          <img
            src="https://prositus.rometheme.pro/html/demos/prodigy/image/image-600x800-15.jpg"
            alt="image"
            className="img-fluid rounded-3 w-100"
          />
          <div
            className="position-absolute start-0 w-100"
            style={{ bottom: "3rem" }}
          >
            <div className="w-75 bg-accent-6 rounded-end-4 text-white d-flex flex-column ps-5 py-4">
              <div className="mb-2">
                <h5 className="m-0 font-1">Emily Brown</h5>
                <span>Project Manager</span>
              </div>
              <div className="social-container team mb-lg-0 mb-3 gap-2">
                <a href="https://www.facebook.com" className="social-item">
                  <i className="fa-brands fa-xs fa-facebook-f" />
                </a>
                <a href="https://www.twitter.com" className="social-item">
                  <i className="fa-brands fa-xs fa-twitter" />
                </a>
                <a href="https://www.instagram.com" className="social-item">
                  <i className="fa-brands fa-xs fa-instagram" />
                </a>
                <a href="https://www.youtube.com" className="social-item">
                  <i className="fa-brands fa-xs fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="d-flex justify-content-center">
      <a href="team.html" className="btn btn-accent px-5 py-3 rounded-pill">
        All Team
      </a>
    </div> */}
  </div>
</div>

    </>
  )
}

export default Team
