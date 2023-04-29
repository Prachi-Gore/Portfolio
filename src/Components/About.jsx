import React from 'react'
import styled from 'styled-components';
import profilePic from '../assets/profile-pic.jpg';


function About() {
  return (
    <Container>
        <Top>

        <img src="https://img.icons8.com/glyph-neue/45/null/user-female-circle.png"/>
        <span color='black'>About </span>
        <span style={{color:"#000080"}}> Me</span>
        </Top>
        <SubContainer>
        <Left>
          <img src={profilePic} alt="" />
        </Left>
        <Right>
            <h2>I'm Prachi</h2>
            <small >Frontend Developer</small>
            <p>
            I am a Frontend developer based in Mumbai, India. I am Statistics Postgraduate from KBCNMU, Jalgaon. I am very passionate about programming & developing websites. I build WebApps and shiny dashboard. currently Working on my skills. I would Love to collaborate to build Statistical Software. 
            </p>
            <p style={{fontFamily:"sans-serif"}} ><span style={{color:"blue",marginRight:"4px" }}>Email:</span>prachigore408@gmail.com</p>
            <p style={{fontFamily:"sans-serif"}}><span style={{color:"blue",marginRight:"4px" }}>Place:</span>Mumbai, India</p>
            <Resume>
              <p>
              <span>Resume </span>
              {/* <i class="fa-regular fa-greater-than"></i> */}
             
              </p>
             <a href=''> <Button>JavaScript Developer</Button> </a>
             <a href=""> <Button>R Shiny Developer</Button></a>

            </Resume>

        </Right>
        </SubContainer>
        
        
     </Container>  
  )
}

export default About;

const Container=styled.div`
padding:50px;
padding-top:20px;
//letter-spacing: 0.1ch;
font-family: 'Oswald', sans-serif;
background-color: #dcfedc;


    
`
const SubContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

    
`
const Top=styled.div`
font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content: center;

span{
  font-size: 24px;
  font-weight: 700;
  margin-right:7px;
}
    
`
const Right=styled.div`
font-family: cursive;
margin-left:300px;
width: 600px;
h2{
  margin-bottom:3px;
}
small{
  color:#000080;
  font-size:16px;
 
  
}

p:first-of-type{
  font-size:18px;
  margin-top:10px;
}
    
`
const Left=styled.div`
img{
  height:300px;
  border-radius:15px;
  transition: all 0.5s ease-in-out ;
  :hover{
    cursor: pointer;
    opacity: 0.7;
  /* filter: grayscale(100%); */
  /* filter: hue-rotate(330deg); */
  filter: brightness(90%) contrast(110%) saturate(150%) hue-rotate(330deg);
  transform: translate3d(50px, 0px, 0px);
  }
}
    
`
const Resume=styled.div`
font-family:"sans-serif";
display:flex;
align-items: center;
p{
 margin-right:20px;
 font-size: 15px;
color:red;
  span{
    
    margin-right:2px;
   
  }
}
  
`
const Button=styled.button`
padding: 15px 10px;
background-color:#00a2ed;
color:white;
border: none;
outline: none;
border-radius:3px;
margin-right:30px;
font-size: 17px;
:hover{
  cursor: pointer;
  background-color:#257ebd;

}
  
`

