import React from 'react'
import Footer from '../Price/Footer/Footer'
import { Link } from 'react-router-dom'

function OutDoorMarketing() {
  return (
    <div>
       <div className="bannerr">
      <h1>Outdoor Marketing</h1>
      <p>Endless entertainment" resonates with diverse audiences</p>
    </div>
    <div className="ditalMarktingSection mt-5">
<section className="pricingBanner">
  <div className="container">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-end">
        <div className="pricingImg">
          <img
            src="https://media.licdn.com/dms/image/v2/C5612AQFM5hVsLBbxtg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520179076149?e=2147483647&v=beta&t=9Orf-u_OFzx9E6kg27LgSZYe50ZqPmjWYMC00sypTWo"
            alt="Social Media Management"
          />
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-end">
        <div className="pricingTextt">
          <h1>Outdoor Marketing</h1>
          <p>
          Step into the lighter side of the internet with Fauntennetwork’s meme marketing services. We turn viral trends into marketing treasures, crafting content that’s not just relatable but highly shareable too. Our team of meme specialists curate and create engaging, humorous content that strikes a chord with the target audience.Meme marketing can be defined as a new-age marketing strategy that uses memes to promote a product/service and communicate the brand narrative in a humorous, relatable way. The scope of meme marketing is huge: from a witty tweet to a parody video, brands can create content in unique and unassuming ways. Memes are a potent communication tool that combines humor, relatability, and underlying messages or themes that strike a chord with audiences. They spark dialogue, increase awareness, and articulate intricate emotions.With its ability to convey thoughts and emotions in a humorous and engaging way, memes can start conversations and bring people closer.

Get set for your brand to become the buzz of the meme world by captivating general curiosity!
          </p>
          <div className="buttonsList">
              <Link to="/contact">
              <button className="btn btn-accent px-5 py-3">
              Pricing <i className="fa fa-angle-right" aria-hidden="true" />
            </button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>

</div>
    </div>
  )
}

export default OutDoorMarketing