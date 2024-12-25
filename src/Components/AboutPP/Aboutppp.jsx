import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Price/Footer/Footer'
import About from '../About/About'
import Team from '../OurTeam/Team'
import Whychoo from '../WhyChoo/Whychoo'
import Mission from '../Mission/Mission'

function Aboutppp() {
  return (
    <div>
      <div
  className="section position-relative"
  style={{
    backgroundImage: "url(https://prositus.rometheme.pro/html/demos/prodigy/image/image-1920x1280-17.jpg)",
    height: "70vh"
  }}
>
  <div className="image-overlay" />
  <div className="r-container h-100 position-relative" style={{ zIndex: 2 }}>
    <div
      className="d-flex flex-column w-100 h-100 justify-content-center align-items-center mx-auto text-center text-white gap-3"
      style={{ maxWidth: 895 }}
    >
      <h1 className="font-1 m-0 text-white fw-semibold">About Us</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<About/>
<Whychoo/>
<Mission/>
<Team/>
<Footer/>
    </div>
  )
}

export default Aboutppp
