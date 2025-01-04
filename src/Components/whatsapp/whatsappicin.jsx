import React from 'react'

import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


function whatsappicin() {
  const handleCompose = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const gmailLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=fauntennetwork@gmail.com&su=Enquiry&body=Hi Sir,";
    window.open(gmailLink, "_blank"); // Opens Gmail in a new tab
  };
  return (
    
    <>
      <div className="icon-bar1">
      
      <a href="#" onClick={handleCompose} class="mail-icon">
  
    <i className="fa-regular fa-envelope" aria-hidden="true" ><FaRegEnvelope /></i>
    
  </a>
</div>

    </>


  )
}

export default whatsappicin ;
