import React from 'react'
import styled from 'styled-components';

function Contact() {
  return (
    <Container>
      <Left>
        <h2>Prachi's Portfolio</h2>
        <p>Thank you for visiting my personal portfolio website. </p>
        <div className="icon">
          <a href="https://www.linkedin.com/in/prachi-gore-4772a11a5">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Prachi-Gore">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.hackerrank.com/prachi_gore">
            <i class="fa-brands fa-hackerrank"></i>
          </a>
          <a href="mailto:prachigore408@gmail.com">
           <i class="fa-solid fa-envelope"> </i>
          </a>
          <a href="https://dev.to/prachigore">
            <i class="fa-brands fa-dev"></i>
          </a>
        </div>
        
      </Left>
      <Right>
        <h1>Contact Info</h1>
        <p><i class="fa-solid fa-phone-flip"></i><span>+91 XXX-XXX-XXXX</span></p>
        <p><i class="fa-solid fa-envelope"></i><span>prachigore408@gmail.com</span></p>
       <p><i class="fa-solid fa-location-dot"></i> <span>Mumbai, India</span></p>
       
        
      </Right>
    </Container>
  );
}

export default Contact;

const Container=styled.div`
display:flex;
justify-content: space-around;
padding-bottom:30px;
background-color: #3D0B45;
color: white;
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
h1,h2{
    
    font-weight:200;
}

    
`
const Right=styled.div`
p{
    margin-bottom:15px;
    i{
        color:#ffcc00 ;
        margin-right:10px;
    }
}
span{
    //display: block;
    
}
    
`
const Left=styled.div`

.icon{
    padding-top:20px;
font-size:25px;

a{
    color:#3D0B45;
    margin-right:20px;
   
    padding:8px;
    
    border-radius:50%;
    
    background-color:white;
    :hover{
        color: #ffcc00;
        background-color: #3D0B45;
        border:0.5px solid white;
    }
}
}
    
`


