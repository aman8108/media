import React, { useEffect } from 'react';


function OttP() {

   useEffect(() => {
      window.scrollTo(0, 0); 
     // Scroll to top when component mounts
    }, []);
  
  return (
    <>
     <div className="banner">
      <h1>OTT PLATFORM</h1>
      <p>Endless entertainment" resonates with diverse audiences</p>
    </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/14.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/13.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/16.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="container-img">
                <img
                  className="flip-on-hover img-fluid"
                  src="https://foaxmedia.com/wp-content/uploads/2023/12/21.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OttP;
