import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Price/Footer/Footer'


function Gmb() {
  return (
    <>
     <div className="bannerr">
      <h1>GMB optimisation</h1>
      <p>Endless entertainment" resonates with diverse audiences</p>
    </div>










      <div className="ditalMarktingSection mt-5">
  <section className="pricingBanner">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-end">
          <div className="pricingImg">
            <img
              src="https://tbs-marketing.com/wp-content/uploads/2022/11/GMB.jpg"
              alt="Social Media Management"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-end">
          <div className="pricingTextt">
            <h1>GMB optimisation</h1>
            <p>
            Unlock the true potential of your brand with Fauntennetwork comprehensive brand-building services. A strong brand strategy can work wonders for any person or business, helping to boost loyalty and drive long term growth. We understand that a brand is more than just a logo; it’s the heart of your business. Our journey starts by crafting compelling brand narratives that deeply resonate with your audience. We design memorable logos and visual identities that not only reflect your brand’s persona but also etch a lasting memory in your customers’ minds. Our strategies ensure your brand stands out in the crowded digital space.
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

    </>
  )
}

export default Gmb
