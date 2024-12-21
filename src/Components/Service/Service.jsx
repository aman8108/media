import React from 'react'

function Service() {
  return (
    <>
      <div className="section">
  <div className="r-container">
    <div className="d-flex flex-column gap-5 align-items-center">
      <div
        className="d-flex flex-column gap-3 text-center align-items-center"
        style={{ maxWidth: 567 }}
      >
        <div className="linear-gradient">
          <span className="text-white">Our Services</span>
        </div>
        <h3 className="fw-semibold">Safeguarding Your Brand's Online Image</h3>
        <p className="text-color-2">
          We offer a comprehensive suite of digital marketing services designed
          to catapult your brand into the digital spotlight.
        </p>
      </div>
      <div className="row row-cols-xl-3 row-cols-1 align-items-stretch">
        <div className="col pb-5">
          <a href="service_detail.html">
            <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
              <div className="icon-box">
                <img
                  src="https://prositus.rometheme.pro/html/demos/prodigy/image/online_marketing.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h4 className="text-color">Digital Strategy Development</h4>
              <p className="font-1 text-color-2">
                Crafting a comprehensive digital strategy tailored to your
                brand's goals and target audience.
              </p>
            </div>
          </a>
        </div>
        <div className="col pb-5">
          <a href="service_detail.html">
            <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
              <div className="icon-box">
                <img
                  src="https://prositus.rometheme.pro/html/demos/prodigy/image/online_shopping.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h4 className="text-color">Social Media Management</h4>
              <p className="font-1 text-color-2">
                Analyzing performance metrics and optimizing strategies to
                improve reach and engagement.
              </p>
            </div>
          </a>
        </div>
        <div className="col pb-5">
          <a href="service_detail.html">
            <div className="card card-outline-hover gap-3 align-items-center text-center p-5 h-100">
              <div className="icon-box">
                <img src="https://prositus.rometheme.pro/html/demos/prodigy/image/seo.png" className="img-fluid" alt="" />
              </div>
              <h4 className="text-color">Search Engine Optimization (SEO)</h4>
              <p className="font-1 text-color-2">
                Building high-quality backlinks from reputable websites to
                increase domain authority.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <a
          href="services.html"
          className="btn btn-accent px-5 py-3 rounded-pill"
        >
          All Services
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Service
