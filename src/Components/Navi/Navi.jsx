import React,{ useState }  from 'react';
import imgg from '../Assets/fnlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import sidebar from '../Assets/hamburger.jpg';
function Navi() {

  const [activeLink, setActiveLink] = useState("/");

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <header className="sticky-top fn-nav">
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
             <div className="mobile-nav-head d-flex flex-column align-items-center">
              <h2 className='mb-0' style={{color:'#1e90ff'}}>FAUNTEN </h2> 
              <h6>NETWORK</h6>
             </div>
             <button  
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{
    "color":"black",
    "font-size":'40px',
    'padding':'0',
    'height':'40px'
  }}
  
> <img src={sidebar} alt="" className="img-fluid45" />
  <i className="fa-thin fa-sidebar"></i>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 gap-1 fnnavul" style={{ color: "white !important" }}>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            aria-current="page"
            to="/"
            onClick={() => handleNavLinkClick("/")}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeLink === "/aboutPage" ? "active" : ""}`}
            to="/aboutPage"
            onClick={() => handleNavLinkClick("/aboutPage")}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeLink === "/service" ? "active" : ""}`}
            to="/service"
            onClick={() => handleNavLinkClick("/service")}
          >
            Service
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className={`nav-link dropdown-toggle ${activeLink === "recent" ? "active" : ""}`}
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Recent Work
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                to="ott"
                onClick={() => handleNavLinkClick("recent")}
              >
                Ott Platform
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/brand"
                onClick={() => handleNavLinkClick("recent")}
              >
                Brand
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/music"
                onClick={() => handleNavLinkClick("recent")}
              >
                Song Campaign
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeLink === "/contact" ? "active" : ""}`}
            to="/contact"
            onClick={() => handleNavLinkClick("/contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="mb-xl-0 mb-3">
        <Link
          to="https://www.instagram.com/aman_singh_21?igsh=MXR1Y3k3MGs5eTh4Nw=="
          className="btn btn-accent px-5 py-3"
          target="_blank"
          rel="noopener noreferrer"
        >
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
