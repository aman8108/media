import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";

import { FaTelegram } from "react-icons/fa";

import { SlSocialInstagram } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

import imgg from "../../Assets/fnlogo.png"
import { Link } from 'react-router-dom';





function Footer() {
  return (
    <div>
      <footer>
  <div className="section pb-0 bg-accent-footer">
    <div className="r-container">
      <div className="border-bottom">
        <div className="row row-cols-lg-2 row-cols-1">
          <div className="col col-lg-4 mb-3">
            <div className="d-flex align-items-center flex-column gap-3">
              <img
                src={imgg}
                alt=""
                className="img-fluid"
                width={100}
              />
              <p className="text-color-2">
              We help companies achieve long-term growth by becoming their personal marketing department not as a typical “vendor” In a world where success is ushered by digital footprints.
              </p>
              <div className="social-container mb-lg-0 mb-3">
                <a href="https://www.linkedin.com/in/faunten-network-82785a312" className="social-item">
                  <i className="fa-brands fa-xs fa-facebook-f"><FaLinkedinIn /></i>
                </a>
                <a href="https://t.me/fauntennetwork1" className="social-item">
                  <i className="fa-brands fa-xs fa-twitter"><FaTelegram /></i>
                </a>
                <Link to="https://www.instagram.com/fauntennetwork.in" className="social-item">
                  <i className="fa-brands fa-xs fa-instagram"><SlSocialInstagram /></i>
                </Link>
                {/* <a href="https://www.youtube.com" className="social-item">
                  <i className="fa-brands fa-xs fa-youtube" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col col-lg-8 mb-3">
            <div className="row row-cols-lg-3 row-cols-1">
              <div className="col mb-3">
                <div className="d-flex flex-column align-items-center gap-3">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Quick Links</h4>
                  </div>
                  <ul className="list gap-2">
                    <li>
                      <Link
                        to="/"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Homepage
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutpage"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Our Services
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        href="team.html"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Our Team
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column align-items-center gap-3">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Services</h4>
                  </div>
                  <ul className="list gap-2">
                    <li>
                      <Link
                        to="/ott"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        OTT Platform
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/brand"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Brand
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/music"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Song Compaign
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        href=""
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Email Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Pay-Per-Click Advertising
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column align-items-center gap-3">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Get In Touch</h4>
                  </div>
                  <ul className="list gap-3">
                    <li className="link">
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-location-dot"><FaLocationDot /></i>
                        </div>
                        KLLG st, No.99, Pku City, ID 28289
                      </span>
                    </li>
                    {/* <li className="link">
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-phone"><IoMdCall /></i>
                        </div>
                        0761-8523-398
                      </span>
                    </li> */}
                    <li className="link">
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-envelope"><BiLogoGmail /> </i>
                        </div>
                        fauntennetwork@gmail.com
                      </span>
                    </li>
                    {/* <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-globe" />
                        </div>
                        www.domainsite.com
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{"justify-self": "center"}} className="d-flex flex-xl-row flex-column gap-3 justify-content-between py-3">
        <span className="text-center link fs-6">
        Copyright ©2025 All rights reserved | Faunten Network by <Link to="https://www.byondtechs.com/">Byondtechs</Link>.
        </span>
        <a href="" className="text-center text-color link fs-6">
          Privacy &amp; Cookie Policy
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
