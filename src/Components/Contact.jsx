import React from 'react'

function Contact() {
  return (
    <section id='contact'>

    <div className="contact-container">
      <div className=''>
        <h2 className='text-xl font-normal'>Prachi's Portfolio</h2>
        <p className='my-3'>Thank you for visiting my personal portfolio website. </p>
        <div className="icon">
          <a href="https://www.linkedin.com/in/prachi-gore-4772a11a5"target='_blank'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Prachi-Gore"target='_blank'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.hackerrank.com/prachi_gore"target='_blank'>
            <i className="fa-brands fa-hackerrank"></i>
          </a>
          <a href="mailto:prachigore408@gmail.com"target='_blank'>
           <i className="fa-solid fa-envelope"> </i>
          </a>
          <a href="https://dev.to/prachigore" target='_blank'>
            <i className="fa-brands fa-dev"></i>
          </a>
        </div>
        
      </div>
      <div className='690px:mt-5'>
        <h1 className='text-xl font-normal'>Contact Info</h1>
        <p className="my-4"><i className="fa-solid fa-phone-flip text-[#ffcc00] mr-2"></i><span>+91 XXX-XXX-XXXX</span></p>
        <p className="mb-4"><i className="fa-solid fa-envelope text-[#ffcc00] mr-2"></i><span>prachigore408@gmail.com</span></p>
       <p className="mb-4"><i className="fa-solid fa-location-dot text-[#ffcc00] mr-2"></i> <span>Mumbai, India</span></p>
      </div>
    </div>
    </section >

  );
}

export default Contact;