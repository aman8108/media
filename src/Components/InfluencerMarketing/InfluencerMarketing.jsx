import React, { useEffect } from 'react';
import Footer from '../Price/Footer/Footer';
import { Link } from 'react-router-dom';

function InfluencerMarketing() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bannerr">
        <h1>Influencer Marketing</h1>
        <p>Endless entertainment" resonates with diverse audiences</p>
      </div>
      <div className="ditalMarktingSection mt-5">
        <section className="pricingBanner">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-end">
                <div className="pricingImg">
                  <img
                    src="https://media.licdn.com/dms/image/D4D12AQESICV4QMicxg/article-cover_image-shrink_720_1280/0/1696594728028?e=2147483647&v=beta&t=kC6mr1J-JbhBCkMcf4ytXgCo_me3NHoWDkVWmRzImO8"
                    alt="Social Media Management"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-end">
                <div className="pricingTextt">
                  <h1>Influencer Marketing</h1>
                  <p>
                    Dive into the sphere of industry thought leaders and social media stars with Fauntennetwork's influencer marketing services. We seamlessly match your brand with influencers who authentically resonate with your products or services. Our approach is all about authenticity and strategic alignment, ensuring the influencer’s reach, and aligning audiences perfectly with your brand’s objectives.
                    <br />
                    Influencer marketing services encompass a range of activities and strategies designed to help brands identify, connect with, and leverage influencers to promote their products or services. Identifying relevant influencers based on the brand's target audience, industry, and campaign objectives. Evaluating influencers' reach, engagement, and authenticity.
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
        <Footer />
      </div>
    </>
  );
}

export default InfluencerMarketing;
