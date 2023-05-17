import React from 'react'
import styled from 'styled-components';
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
    <Container>
<Left>

<a href="/" class="logo"><img src={jsLogo} alt="" width="22px" /> Prachi</a>
</Left>
<Right>
<nav>
    <ul >
      
   <li className={activeTab === 'home' ? 'active' : ''}><a href='#home'> Home</a></li>
   <li className={activeTab === 'about' ? 'active' : ''}><a href='#about'> About</a></li>
   <li className={activeTab === 'skills' ? 'active' : ''}> <a href='#skills'>  Skills</a></li>
   <li className={activeTab === 'education' ? 'active' : ''}><a href='#education'> Education</a></li>
   <li className={activeTab === 'project' ? 'active' : ''}><a href='#project'> Project</a></li>
   <li className={activeTab === 'blog' ? 'active' : ''}><a href='#blog'> Blog</a></li>
   <li className={activeTab === 'contact' ? 'active' : ''}><a href='#contact'> Contact</a></li>
   </ul>
   </nav>
   <button className='open' ref={tl} onClick={(e)=>{
   // console.log(tl)
   setIsOpen(true)
   setIsClose(false)
    tl.current.style.display='none';
    verSidebar.current.style.display='block';
   }}>≡</button>
   
   <div className='verticalSidebar' ref={verSidebar} >
   <button className='close' onClick={(e)=>{
    setIsOpen(false)
    setIsClose(true)
    e.preventDefault();
    tl.current.style.display='block';
    verSidebar.current.style.display='none';
    
   }}>✖</button>
   <ul >
      
      <li className={activeTab === 'home' ? 'active' : ''} ><a href='#home'> Home</a></li>
      <li className={activeTab === 'about' ? 'active' : ''} ><a href='#about'> About</a></li>
      <li className={activeTab === 'skills' ? 'active' : ''} > <a href='#skills'>  Skills</a></li>
      <li className={activeTab === 'education' ? 'active' : ''} ><a href='#education'> Education</a></li>
      <li className={activeTab === 'project' ? 'active' : ''} ><a href='#project'> Project</a></li>
      <li className={activeTab === 'blog' ? 'active' : ''} ><a href='#blog'> Blog</a></li>
      <li className={activeTab === 'contact' ? 'active' : ''} ><a href='#contact'> Contact</a></li>
      </ul>
   </div>
   

</Right>

    </Container>
  )
  }

const Container=styled.div`

letter-spacing: 0.1ch;
font-family: 'Oswald', sans-serif;
font-size: 20px;

display:flex;
align-items:center;
//padding-right: 420px;
padding-left:120px;
justify-content:space-between;
height: 60px;
box-shadow: 0px 0px 5px 2px lightgray;
margin-bottom:5px;
position:fixed;


z-index: 1000;
width:100%;

background-color:aliceblue;
@media screen and (max-width: 996px) {
  
  padding-left: 50px;
  
  
  }



`;
const Right=styled.div`
display: flex;

padding-right:120px;
@media screen and (max-width:950px) {
  padding-right:60px;
  
}

.open,.close{
      font-size:40px;
      display:none;
      cursor: pointer;
      border: none;
      background-color: aliceblue;
      

      :hover{
        background-color: #f1eeee;
        
      }
      
      
    }
    .open{
      font-weight: 400;
      @media screen and (max-width:952px){
        display: block; 
      }
    }
    .close{
      display: block;
      background-color: #00094b;
      padding-left:120px;
      color:white;
      :hover{
        background-color: #00094b;
        
      }
    }
nav{
   
   
    ul{
       display:flex;
       .active a {
  color: #fff;
  background-color: #000;
  padding: 5px 10px;
  border-radius: 5px;
 
  :hover{
    color: #fff;
    border-bottom:none;
    padding-bottom: none; 
  }
}
        li{
        margin-right:30px;
        list-style:none; 
        padding-right:30px; 
       
        @media screen and (max-width:952px){
        display: none;
        }
        

        
        
    a{
        color: black;
        text-decoration:none;
        font-weight: 400;
        :hover{
        color: blue;
        border-bottom:2px solid blue;
        padding-bottom: 5px; 
    }
    }
    }
    
    }
    
    
}
.verticalSidebar{
  display: none ;
 padding-top:450px;
 background-color: #00094b;
 margin-right:-10px;
 width:180px;
 
  ul{
       display:flex;
       flex-direction:column;
       
       
       .active a {
  border-bottom:4px solid blue;
  background-color: #000;
  padding: 5px 10px ;
  border-radius: 5px;
 
  :hover{
    color: #fff;
    border-bottom:none;
    padding-bottom: none; 
  }
}
li{
        
        list-style:none; 
       
        padding-bottom:30px;
       
        
    a{
        color: white;
        text-decoration:none;
        :hover{
          border-bottom:4px solid blue;
  background-color: #000;
  padding: 5px 10px ;
  border-radius: 5px; 
    }
    }
    }
    
        
    
    }
    
}

`;
const Left=styled.div`

a{
display: flex;
align-items: center;
text-decoration:none;
color: black;

img{
    margin-right:10px;
}
}
:hover{
    a{
    color:orange;
    }
}
`;
