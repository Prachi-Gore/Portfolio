import React from 'react'
import jsLogo from '../assets/js-logo.png'
import { useState,useEffect,useRef } from 'react';


export default function Navbar() {
    const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
        
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const educationSection = document.getElementById('education');
      const projectSection = document.getElementById('project');
      const blogSection = document.getElementById('blog');
      const contactSection = document.getElementById('contact');
      
      const homeTop = homeSection.offsetTop;
      const aboutTop = aboutSection.offsetTop;
      const skillsTop = skillsSection.offsetTop;
      const educationTop = educationSection.offsetTop;
      const projectTop = projectSection.offsetTop;
      const blogTop = blogSection.offsetTop;
      const contactTop = contactSection.offsetTop;
      
      const scrollPosition = window.scrollY+300;
      
      if (scrollPosition < aboutTop) {
        
        setActiveTab('home');
      } else if (scrollPosition >= aboutTop && scrollPosition < skillsTop) {
        
        setActiveTab('about');
      } else if (scrollPosition >= skillsTop && scrollPosition < educationTop) {
        
        setActiveTab('skills');
      } else if (scrollPosition >= educationTop && scrollPosition < projectTop) {
        
        setActiveTab('education');
      } else if (scrollPosition >= projectTop && scrollPosition < blogTop) {
        
        setActiveTab('project');
      } else if (scrollPosition >= blogTop && scrollPosition < contactTop) {
        setActiveTab('blog');
      }  else {
        setActiveTab('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const verSidebar=useRef();
  const tl=useRef();//three lines
  const [isOpen,setIsOpen]=useState(false);
  const [isClose,setIsClose]=useState(true);
  const prevPosition=window.innerWidth;
  window.addEventListener('resize', function() {
    // var currentDiv = document.querySelector('.verticalSidebar');
    
    if (window.innerWidth >=952) {
      verSidebar.current.style.display = 'none';
    }else{
      if(prevPosition<this.window.innerWidth){
       
         setIsClose(true);
        verSidebar.current.style.display = 'none';
        
      }
    } 
  });
  window.addEventListener('resize', function() {
    //!isOpen&&window.innerWidth <=952
  //  isClose&&window.innerWidth<=952
  if(this.window.innerWidth>952){setIsClose(true)}
  if (!isOpen&&window.innerWidth <=952 ||isClose&&window.innerWidth<=952) {
      tl.current.style.display = 'block';
    } else{
      tl.current.style.display = 'none';
    }
  });
  return (
    <div className='navbar-container'>
<div className='navbar-left-container'>

<a href="/" className="logo"><img src={jsLogo} alt="" width="22px" className='mr-2' /> Prachi</a>
</div>
<div className='navbar-right-container'>
<nav>
    <ul className='flex' >
      
   <li className={activeTab === 'home' ? 'active' : ''}><a href='#home'> Home</a></li>
   <li className={activeTab === 'about' ? 'active' : ''}><a href='#about'> About</a></li>
   <li className={activeTab === 'skills' ? 'active' : ''}> <a href='#skills'>  Skills</a></li>
   <li className={activeTab === 'education' ? 'active' : ''}><a href='#education'> Education</a></li>
   <li className={activeTab === 'project' ? 'active' : ''}><a href='#project'> Project</a></li>
   <li className={activeTab === 'blog' ? 'active' : ''}><a href='#blog'> Blog</a></li>
   <li className={activeTab === 'contact' ? 'active' : ''}><a href='#contact'> Contact</a></li>
   </ul>
   </nav>
   <button className='open text-[40px] lg:hidden cursor-pointer hover:bg-[#f1eeee] font-normal' ref={tl} onClick={(e)=>{
   // console.log(tl)
   setIsOpen(true)
   setIsClose(false)
    tl.current.style.display='none';
    verSidebar.current.style.display='block';
   }}>≡</button>
   
   <div className='verticalSidebar' ref={verSidebar} >
   <button className='close text-[30px] lg:hidden block bg-[#00094b] pl-[120px] text-white hover:bg-[#00094b]' onClick={(e)=>{
    setIsOpen(false)
    setIsClose(true)
    e.preventDefault();
    tl.current.style.display='block';
    verSidebar.current.style.display='none';
    
   }}>✖</button>
   <ul className='flex flex-col' >
      
      <li className={activeTab === 'home' ? 'active' : ''} ><a href='#home'> Home</a></li>
      <li className={activeTab === 'about' ? 'active' : ''} ><a href='#about'> About</a></li>
      <li className={activeTab === 'skills' ? 'active' : ''} > <a href='#skills'>  Skills</a></li>
      <li className={activeTab === 'education' ? 'active' : ''} ><a href='#education'> Education</a></li>
      <li className={activeTab === 'project' ? 'active' : ''} ><a href='#project'> Project</a></li>
      <li className={activeTab === 'blog' ? 'active' : ''} ><a href='#blog'> Blog</a></li>
      <li className={activeTab === 'contact' ? 'active' : ''} ><a href='#contact'> Contact</a></li>
      </ul>
   </div>
   

</div>

    </div>
  )
  }


