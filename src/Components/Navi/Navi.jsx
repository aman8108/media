import React from 'react';
import imgg from '../Assets/fLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

function Navi() {
  return (
    <div>
      <header className="sticky-top bg-white">
        <div className="r-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ps-3">
              <div className="logo-container">
                <Link
                  className="navbar-brand"
                  to="/"
                >
                  <img src={imgg} alt="" className="img-fluid" />
                </Link>
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/aboutPage">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Service
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Recent Work
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="ott">
                          OTT PLATFORM
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/brand">
                          Branda
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="price_plan.html">
                          Song Compaign
                        </a>
                      </li>
                     
                    </ul>
                  </li>
                  {/* <li className="nav-item dropdown">
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
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="mb-xl-0 mb-3">
                  <Link to="https://www.instagram.com/aman_singh_21?igsh=MXR1Y3k3MGs5eTh4Nw==" 
                     className="btn btn-accent px-5 py-3" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Let’s Talk
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navi;
