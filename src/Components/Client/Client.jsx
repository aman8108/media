import React from 'react';
import Marquee from "react-fast-marquee";

function Client() {
  return (
    <>
      <section className="whycho">
        <div className="container">
          <div className="about-mar">
            <div className="homepage_whyhomelane_container__1f6jA undefined why-dude">
              <div className="whyChooseUs_why-choose-us-container__MK7ng">
                <div className="whyChooseUs_headingTitle__34rH2">
                 Our  <span className='interial-con'>Clients</span>
                </div>
                <div className="us-p">
                  <p>Trusted by clients for exceptional service and innovative solutions.</p>
                </div>
                <div className="whyChooseUs_slider__vpqwR">
                  <div className="whyChooseUs_slide-icons__3t3Vh">
                    {/* Right-to-Left Marquee */}
                    <Marquee speed={50}>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/4.png" alt="Icon 4" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/3.png" alt="Icon 3" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/2.png" alt="Icon 2" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/1.png" alt="Icon 1" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/20.png" alt="Icon 9" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/21.png" alt="Icon 9" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/22.png" alt="Icon 9" />
                      </div>
                    </Marquee>

                    {/* Left-to-Right Marquee */}
                    <Marquee direction="right" speed={50}>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/7.png" alt="Icon 7" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/5.png" alt="Icon 5" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/8.png" alt="Icon 8" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/6.png" alt="Icon 6" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/9.png" alt="Icon 9" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/11.png" alt="Icon 9" />
                      </div>
                      <div className='marq'>
                        <img src="https://foaxmedia.com/wp-content/uploads/2023/12/19.png" alt="Icon 9" />
                      </div>
                     
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;
