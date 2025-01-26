import React, { useEffect } from 'react'
import Footer from '../Price/Footer/Footer'
import { Link } from 'react-router-dom'

function Graphicsdesign() {
    useEffect(() => {
      // Scroll to the top of the page when the component is mounted
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
       <div className="bannerr">
      <h1>Graphics Desigh</h1>
      <p>Graphic design creates visually impactful and effective messages.</p>
    </div>
    <div className="ditalMarktingSection mt-5">
<section className="pricingBanner">
  <div className="container">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-end">
        <div className="pricingImg">
          <img
            src="https://r2logics.com/content/img/content/graphics-design.png"
            alt="Social Media Management"
          />
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-end">
        <div className="pricingTextt">
          <h1>Meta Ads</h1>
          <p>
          Step into the lighter side of the internet with Fauntennetwork’s meme marketing services. We turn viral trends into marketing treasures, crafting content that’s not just relatable but highly shareable too. Our team of meme specialists curate and create engaging, humorous content that strikes a chord with the target audience.Meme marketing can be defined as a new-age marketing strategy that uses memes to promote a product/service and communicate the brand narrative in a humorous, relatable way. The scope of meme marketing is huge: from a witty tweet to a parody video, brands can create content in unique and unassuming ways. Memes are a potent communication tool that combines humor, relatability, and underlying messages or themes that strike a chord with audiences. They spark dialogue, increase awareness, and articulate intricate emotions.With its ability to convey thoughts and emotions in a humorous and engaging way, memes can start conversations and bring people closer.

Get set for your brand to become the buzz of the meme world by captivating general curiosity!
          </p>
          <div className="buttonsList">
              <Link to="/contact">
              <button className="btn btn-accent px-5 py-3">
              Contact Us<i className="fa fa-angle-right" aria-hidden="true" />
            </button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
<div className="service3 service-page sp">
              <div className='container'>
                      <div className="row mb-4">
                      <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>Influencer Identification And Selection
                           </h4>
                           <div className="space16" />
                           <p>We carefully select influencers whose audience aligns with your target demographic.
Our network includes influencers from a variety of sectors, from lifestyle to tech, fashion, beauty and more.
Macro and micro-influencers to suit your campaign goals and budget.

                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           Content Creation and Collaboration


                           </h4>
                           <div className="space16" />
                           <p>Collaborating with influencers on the creation of sponsored content, including blog posts, social media posts, videos, and other formats.
Ensuring that the content aligns with the brand's messaging and guidelines.
</p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
Campaign Management
</h4>
                           <div className="space16" />
                           <p>We handle all communications with influencers, from negotiations to contracts and content guidelines.
Ensuring seamless collaboration and timely delivery of all content.
Building long-term relationships with influencers for ongoing partnership

 </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           Campaign Strategy And Development



                           </h4>
                           <div className="space16" />
                           <p>Customized influencer marketing strategies designed to meet your brand objectives.
We develop engaging campaigns that reflect your brand values ​​and messaging.
Multi-channel strategies (Instagram, YouTube, TikTok, Snapchat, blogs, etc.) to maximize reach and engagement.

 </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>Influencer Outreach

                           </h4>
                           <div className="space16" />
                           <p>Conducting outreach to potential influencers to gauge interest and availability.
Building and maintaining relationships with influencers.

                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           Performance Tracking And Analytics



                           </h4>
                           <div className="space16" />
                           <p>Detailed reports on the success of your influencer campaigns, including reach, engagement, conversions, and ROI.
Data-driven insights to optimize future campaigns and strategies.
Transparent reporting so you can see the real value of your influencer partnerships.


                           
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                            

                           Long-Term Relationship Building


                           </h4>
                           <div className="space16" />
                           <p>Building and maintaining long-term relationships with influencers for ongoing campaigns or ambassador programs.
Nurturing relationships beyond individual campaigns.


                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                       <div className="service4-box">
                         
                         <div className="  heading4">
                           <h4>
                           
Influencer Events And Activations

                           </h4>
                           <div className="space16" />
                           <p>Planning and executing events or activations that involve influencers.
                           Maximizing the impact of influencer partnerships through real-world experiences.
                           </p>                         </div>
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

export default Graphicsdesign
