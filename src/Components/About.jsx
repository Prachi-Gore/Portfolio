import React from 'react'
import profilePic from '../assets/profile-pic.jpg';


function About() {
  return (
    <section id='about' className='py-[20px] px-[50px] bg-[#dcfedc]'>
        <div className='about-top-container'>
        <img src="https://img.icons8.com/glyph-neue/45/null/user-female-circle.png" className='mr-[3px]'/>
        <h1 className="mr-[7px] section-title" color='black'>About </h1>
        <h1 className="section-title" style={{color:"#000080"}}> Me</h1>
        </div>
        <div className='about-sub-container'>
        <div className='about-left-container'>
          <div>
          {/* <span>🙏🏻</span> */}
          
          <img src={profilePic} alt="" />
          </div>
        </div>
        <div className='about-right-container'>
            <h2 className="mb-[3px] 868px:pl-[152px]  font-semibold font-mono">I'm Prachi</h2>
            <small className="text-[#000080] text-[16px] font-semibold font-mono">Full Stack Developer</small>
            <p>
            {/* I am a Django Full Stack developer based in Mumbai, India. I am Statistics Postgraduate from KBCNMU, Jalgaon. I am very passionate about programming & developing websites. I build WebApps and shiny dashboard. currently Working on my skills. I would Love to collaborate to build Statistical Software.  */}
            I am a Python web developer skilled in building scalable and secure web applications using Django and Django REST Framework. I’ve worked on full-stack projects that integrate modern frontend technologies like React.js and Tailwind CSS with robust backend systems, JWT authentication, WebSockets for real-time communication, and Celery for asynchronous tasks. I focus on writing clean, maintainable code and delivering features that solve real-world problems effectively.
            </p>
            <p style={{fontFamily:"serif"}} ><span style={{color:"blue",margindiv:"4px" }}>Email: </span>prachigore408@gmail.com</p>
            <p style={{fontFamily:"serif"}}><span style={{color:"blue",marginRight:"4px" }}>Place: </span>Mumbai, India</p>
            <div className='resume-container'>
              
              <span className="mr-[20px] text-[20px] text-red-500 font-serif">Resume </span>
              {/* <i className="fa-regular fa-greater-than"></i> */}
             
              <div className='flex flex-row gap-x-6'>
             <a href='https://drive.google.com/file/d/1vI5A5KnnysmMWiAMNVLGTYAf8u7k-byd/view'target='_blank' download> <button>Python Web Developer</button> </a>
             <a href="https://drive.google.com/file/d/1HMNKdMVNLuQUqsekxjcd50idUmufmJ2R/view"target='_blank' download> <button>R Shiny Developer</button></a>
             </div>

            </div>

        </div>
        </div>
        
        
     
     </section> 
  )
}

export default About;
