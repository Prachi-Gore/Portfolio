import React from 'react'
import styled from 'styled-components';
import jsLogo from '../assets/js-logo.png'
import { useState,useEffect } from 'react';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
        console.log("scrolled")
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
      console.log(scrollPosition)
      if (scrollPosition < aboutTop) {
        console.log("home")
        setActiveTab('home');
      } else if (scrollPosition >= aboutTop && scrollPosition < skillsTop) {
        console.log("about")
        setActiveTab('about');
      } else if (scrollPosition >= skillsTop && scrollPosition < educationTop) {
        console.log("skills")
        setActiveTab('skills');
      } else if (scrollPosition >= educationTop && scrollPosition < projectTop) {
        console.log("education")
        setActiveTab('education');
      } else if (scrollPosition >= projectTop && scrollPosition < blogTop) {
        console.log("project")
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

  
  return (
    <Container>
<Left>

<a href="/" class="logo"><img src={jsLogo} alt="" width="22px" /> Prachi</a>
</Left>
<Right>
<nav>
    <ul>
   <li className={activeTab === 'home' ? 'active' : ''}><a href='#home'> Home</a></li>
   <li className={activeTab === 'about' ? 'active' : ''}><a href='#about'> About</a></li>
   <li className={activeTab === 'skills' ? 'active' : ''}> <a href='#skills'>  Skills</a></li>
   <li className={activeTab === 'education' ? 'active' : ''}><a href='#education'> Education</a></li>
   <li className={activeTab === 'project' ? 'active' : ''}><a href='#project'> Project</a></li>
   <li className={activeTab === 'blog' ? 'active' : ''}><a href='#blog'> Blog</a></li>
   <li className={activeTab === 'contact' ? 'active' : ''}><a href='#contact'> Contact</a></li>
   </ul>
</nav>
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
@media screen and (max-width: 900px) {
  justify-content: flex-start;
  
  
  }



`;
const Right=styled.div`
display: flex;

padding-right:120px;

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
       
    a{
        color: black;
        text-decoration:none;
        :hover{
        color: blue;
        border-bottom:2px solid blue;
        padding-bottom: 5px; 
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
