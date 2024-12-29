import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setFormStatus({ type: 'error', message: 'All fields are required!' });
      return;
    }

    // Simulate form submission success
    setFormStatus({ type: 'success', message: 'Your message was successfully sent.' });

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main>
      {/* Banner */}
      <div className="section position-relative" style={{ backgroundImage: 'url(https://prositus.rometheme.pro/html/demos/prodigy/image/image-1920x1280-12.jpg)', height: '70vh' }}>
        <div className="image-overlay" />
        <div className="r-container h-100 position-relative" style={{ zIndex: 2 }}>
          <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center mx-auto text-center text-white gap-3" style={{ maxWidth: 895 }}>
            <h1 className="font-1 m-0 text-white fw-semibold">Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Section Contact Us */}
      <div className="section">
        <div className="r-container">
          <div className="d-flex justify-content-center">
            <div className="row row-cols-xl-2 row-cols-1 d-flex align-items-center">
              <div className="col mb-3">
                <div className="d-flex flex-column gap-3 h-100 justify-content-center pe-xl-5">
                  <div className="d-flex flex-column gap-3">
                    <div className="linear-gradient">
                      <span className="text-white">Get In Touch</span>
                    </div>
                    <h3 className="fw-semibold">Consultation with Marketing Experts</h3>
                    <p className="text-color-2">Whether it's an initial consultation or a follow-up meeting to discuss strategy, the appointment process plays a pivotal role in shaping client relationships and driving business growth.</p>
                  </div>
                  <hr />
                  <div className="d-flex flex-column gap-3">
                    <div className="pb-2 w-max-content pe-3">
                      <h4 className="fw-semibold">Contact Us</h4>
                    </div>
                    <div className="row row-cols-xl-2 row-cols-1">
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-location-dot"><IoLocationOutline /></i>
                          </div>
                          KLLG st, No.99, Pku City, ID 28289
                        </span>
                      </div>
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-phone"><IoCallOutline /></i>
                          </div>
                          0761-8523-398
                        </span>
                      </div>
                    </div>
                    <div className="row row-cols-xl-2 row-cols-1">
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-envelope"><CgMail /></i>
                          </div>
                          hello@domainsite.com
                        </span>
                      </div>
                      {/* <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-globe" />
                          </div>
                          www.domainsite.com
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column gap-4 px-lg-4 px-0">
                  <div className="position-relative">
                    {formStatus && (
                      <div
                        className={`toast align-items-center w-100 shadow-none mb-3 my-4 border rounded-pill ${
                          formStatus.type === 'success' ? 'border-success' : 'border-danger'
                        }`}
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="d-flex p-2">
                          <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center">
                            <i className={`fa-solid ${formStatus.type === 'success' ? 'fa-check text-success' : 'fa-triangle-exclamation text-danger'} f-36`} />
                            {formStatus.message}
                          </div>
                          <button
                            type="button"
                            className="me-2 m-auto bg-transparent border-0 ps-1 pe-0"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                          >
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    )}

                    <form className="d-flex flex-column h-100 justify-content-center w-100 needs-validation" noValidate="" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control py-3 px-4"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">The field is required.</div>
                      </div>
                      <div className="mb-3">
                        <div className="row row-cols-xl-2 row-cols-1">
                          <div className="col mb-3">
                            <input
                              type="email"
                              className="form-control py-3 px-4"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">The field is required.</div>
                          </div>
                          <div className="col mb-3">
                            <input
                              type="tel"
                              className="form-control py-3 px-4"
                              name="phone"
                              id="phone"
                              placeholder="Your Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">The field is required.</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-3">
                        <input
                          type="text"
                          className="form-control py-3 px-4"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">The field is required.</div>
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control py-3 px-4"
                          rows={5}
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">The field is required.</div>
                      </div>
                      <button type="submit" className="btn btn-accent py-3 rounded-4 justify-content-center submit_form">
                        Make Appointment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section p-0">
        <iframe
          loading="lazy"
          className="maps overflow-hidden"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
        />
      </div>
    </main>
    
  );
}

export default Contactus;
