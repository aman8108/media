import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import Footer from '../Price/Footer/Footer'
import bannerabout from "../Assets/bannerabout.png"



function Web() {
    useEffect(() => {
      // Scroll to the top of the page when the component is mounted
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
     <div
  className="section position-relative"
  style={{
    backgroundImage: `url(${bannerabout})`,
    height: "70vh"
  }}
>
  <div className="image-overlay" />
  <div className="r-container h-100 position-relative" style={{ zIndex: 2 }}>
    <div
      className="d-flex flex-column w-100 h-100 justify-content-center align-items-center mx-auto text-center text-white gap-3"
      style={{ maxWidth: 895 }}
    >
      <h1 className="font-1 m-0 text-white fw-semibold">Website Marketing</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        
          <li className="breadcrumb-item active" aria-current="page">
          <p>Endless entertainment" resonates with diverse audiences</p>
          </li>
        </ol>
      </nav>
    </div>
  </div>
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
            <h1>Website Marketing</h1>
            <p>
            Web marketing is the process of marketing your business online, and it’s a cost-effective way to reach people who are most interested in your business.
There are numerous strategies that are a part of web marketing, which we’ll discuss in detail later. These strategies, from search engine marketing to content marketing, help you promote your business
            </p>
          <div></div>
          </div>
        </div>
      </div>
      <div className="service3 service-page sp">
              <div className='container'>
                      <div className="row mb-4">
                      <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           What Is Web Marketing
                           </h4>
                           <div className="space16" />
                           <p>

                           Web marketing can help you reach more leads looking for your products and services online — and it’s a great way to help your business expand your reach and online presence and earn more revenue.
</p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           Identify Your Target Audience
                           </h4>
                           <div className="space16" />
                           <p>

                           Before you decide on your web marketing strategies, know who you’re trying to reach. It’s important to establish your target market first. This will help you determine which methods and strategies will work best to reach them
                           
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           Search Engine Optimization (SEO)
                           </h4>
                           <div className="space16" />
                           <p>

                           SEO is the process of boosting your website’s ranking in the search results. Since Google fields 3.5 billion searches a day, using SEO is an excellent way for you to reach valuable leads for your business because so many people search for information through this search engine.
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           Target specific people
                           </h4>
                           <div className="space16" />
                           <p>

                           Targeting is the biggest benefit of web marketing. When you run campaigns with traditional methods, it’s a challenge to target only leads that are interested in your business. You end up putting money towards leads that aren’t interested in your company.

                                                      </p>
                         </div>
                       </div>
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

export default Web
