import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";





function Footer() {
  return (
    <div>
      <footer>
  <div className="section pb-0 bg-accent">
    <div className="r-container">
      <div className="border-bottom">
        <div className="row row-cols-lg-2 row-cols-1">
          <div className="col col-lg-4 mb-3">
            <div className="d-flex flex-column gap-3">
              <img
                src="image/logo.png"
                alt=""
                className="img-fluid"
                width={160}
              />
              <p className="text-color-2">
                Lorem ipsum dolor sit amet consectetur adipiscing mauris
                volutpat ante ut sagittis efficitur arcu diam faucibus eli quis
                rhoncus enim augue ut orci donec.
              </p>
              <div className="social-container mb-lg-0 mb-3">
                <a href="https://www.facebook.com" className="social-item">
                  <i className="fa-brands fa-xs fa-facebook-f"><FaFacebookF /></i>
                </a>
                <a href="https://www.twitter.com" className="social-item">
                  <i className="fa-brands fa-xs fa-twitter"><FaXTwitter /></i>
                </a>
                <a href="https://www.instagram.com" className="social-item">
                  <i className="fa-brands fa-xs fa-instagram"><SlSocialInstagram /></i>
                </a>
                {/* <a href="https://www.youtube.com" className="social-item">
                  <i className="fa-brands fa-xs fa-youtube" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col col-lg-8 mb-3">
            <div className="row row-cols-lg-3 row-cols-1">
              <div className="col mb-3">
                <div className="d-flex flex-column gap-3">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Quick Links</h4>
                  </div>
                  <ul className="list gap-2">
                    <li>
                      <a
                        href="index.html"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Homepage
                      </a>
                    </li>
                    <li>
                      <a
                        href="about.html"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="services.html"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="team.html"
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Our Team
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column gap-3">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Services</h4>
                  </div>
                  <ul className="list gap-2">
                    <li>
                      <a
                        href=""
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Digital Strategy Development
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Social Media Management
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="link d-flex flex-row gap-3 align-items-center"
                      >
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column gap-3">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Get In Touch</h4>
                  </div>
                  <ul className="list gap-3">
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-location-dot"><FaLocationDot /></i>
                        </div>
                        KLLG st, No.99, Pku City, ID 28289
                      </span>
                    </li>
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-phone"><IoMdCall /></i>
                        </div>
                        0761-8523-398
                      </span>
                    </li>
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-envelope"><BiLogoGmail /> </i>
                        </div>
                        hello@domainsite.com
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
      <div className="d-flex flex-xl-row flex-column gap-3 justify-content-between py-3">
        <span className="text-center fs-6">
          Copyright © 2024 Rometheme. All Rights Reserved.
        </span>
        <a href="" className="text-center text-color fs-6">
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
