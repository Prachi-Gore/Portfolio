import React from 'react'
import styled from 'styled-components';
import profilePic from '../assets/profile-pic.jpg';


function About() {
  return (
    <Section id='about'>

   

    
        <Top>

        <img src="https://img.icons8.com/glyph-neue/45/null/user-female-circle.png"/>
        <h1 color='black'>About </h1>
        <h1 style={{color:"#000080"}}> Me</h1>
        </Top>
        <SubContainer>
        <Left>
          <div>
          <span>🙏🏻</span>
          
          <img src={profilePic} alt="" />
          </div>
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
              
              <span>Resume </span>
              {/* <i class="fa-regular fa-greater-than"></i> */}
             
              <Buttons>
             <a href='https://drive.google.com/file/d/14_SFNx8NahTr5AbPd-KFNE5X1TQwAQGZ/view'target='_blank' download> <Button>ReactJS Developer</Button> </a>
             <a href="https://drive.google.com/file/d/1HMNKdMVNLuQUqsekxjcd50idUmufmJ2R/view"target='_blank' download> <Button>R Shiny Developer</Button></a>
             </Buttons>

            </Resume>

        </Right>
        </SubContainer>
        
        
     
     </Section> 
  )
}

export default About;

const Section=styled.section`
padding:50px;
padding-top:20px;
//letter-spacing: 0.1ch;

background-color: #dcfedc;



    
`
const SubContainer=styled.div`

display: flex;
align-items: center;
justify-content: space-evenly;
@media screen and (max-width: 868px){
  flex-direction: column;
}

    
`
const Top=styled.div`
//font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content: center;
img{
  margin-right:3px;
}

h1{
 
 
  margin-right:7px;
}
    
`
const Right=styled.div`

margin-left:300px;
width: 400px;
@media screen and (max-width: 868px){
  margin-left:auto;
}
@media screen and (max-width: 1000px){
  margin-left: 100px;
}
@media screen and (max-width: 510px){
  margin-left: 5%;
}
@media screen and (max-width: 428px){
  margin-left: 20%;
  width: 350px;
 
 
}
h2{
  margin-bottom:3px;
  @media screen and (max-width: 868px){
  
  padding-left: 152px;
  
}
}
small{
  color:#000080;
  font-size:16px;
  @media screen and (max-width: 868px){
  margin-left:148px;
  
  
}
  
}

p:first-of-type{
  font-size:16px;
  margin-top:10px;
  font-family: cursive;
  @media screen and (max-width: 428px){
 width: 80%;
 
}
}
    
`
const Left=styled.div`
div{
  /* background-color: #dbf26e;
background-image: linear-gradient(319deg, #dbf26e 20%, #61fa74 47%, #1cfdd6 40%); */
background-color: black;
padding: 7px;
 border-radius:15px;
 height:300px;
 width:280px;
 position: relative;
 span{
  display: none;
  font-size: 35px;
  position:absolute;
    top:130px;
    left:30px;
 }
 :hover{
  
    background-color: #ff1a1a;
background-image: linear-gradient(315deg, #ff1a1a 0%, #ffff00 74%);
padding: 0px;
  
  span{
    display: inline;
  }
 }
 
}

img{
  height:100%;
  width: 100%;
 
  border-radius:15px;
  transition: all 0.5s ease-in-out ;
  :hover{
    cursor: pointer;
    opacity: 0.7;
  /* filter: grayscale(100%); */
  /* filter: hue-rotate(330deg); */
  filter: brightness(90%) contrast(110%) saturate(150%) hue-rotate(330deg);
  transform: translate3d(100px, 0px, 0px);

  }
  
}
    
`
const Resume=styled.div`
//font-family:"Arial";
display:flex;
align-items: center;

span{
 margin-right:20px;
 font-size:20px;
color:red;
 
}
@media screen and (max-width:430px){
  flex-direction: column;
  

  
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
@media screen and (max-width:430px){
  font-size:15px;
  padding: 10px;
  margin-top: 10px;
  
}
@media screen and (max-width:355px){
  font-size:15px;
  padding: 10px;
  margin-top: 10px;
  margin-right:15px;
  
}
  
`
const Buttons=styled.div`
  display: flex;
    flex-direction: row;
    @media screen and (max-width:355px){
 
  margin-left:-40px;
  
}
    
`;



