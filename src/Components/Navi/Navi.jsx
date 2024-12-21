import React from 'react'

function Navi() {
  return (
    <div>
      <header className="sticky-top bg-white">
  <div className="r-container">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ps-3">
        <div className="logo-container">
          <a
            className="navbar-brand"
            href="https://prositus.rometheme.pro/html/"
          >
            <img src="image/logo.png" alt="" className="img-fluid" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered accent-color-2" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 gap-1">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="about.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="team.html">
                    Team
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="services.html">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="service_detail.html">
                    Service Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="project.html">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="project_detail.html">
                    Project Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="price_plan.html">
                    Pricing Plan
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="faq.html">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="404.html">
                    404 Error
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="single_blog.html">
                    Single Post
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
          <div className="mb-xl-0 mb-3">
            <a href="contact.html" className="btn btn-accent px-5 py-3">
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navi
