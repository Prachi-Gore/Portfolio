import React from 'react'
import styled from 'styled-components';
import Card from './Card';

import data from "../skill.json";

function Skill() {
   const newArray= data.map((item)=><Card icon={item.icon} name={item.name}/>)
  return (
    <section id='skills'>

   <Container>
    <p>
    <img src="https://img.icons8.com/pastel-glyph/64/000000/laptop-coding--v1.png"/>
    <h1>Skills & <span style={{color:"#ffff00"}}>Hands On</span></h1>
    </p>
    <SubContainer>
        
        {newArray}


    </SubContainer>

   </Container>
    </section>

  )
}

export default Skill;

const Container=styled.div`
/* background-color: #a4508b;
background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%); */
 /*#0000cd */
 background-color: #6e72fc;
background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
color:white;
display: flex;
flex-direction: column;
margin:auto;
p{
   display: flex;
    // align-items: center;
     justify-content:center; 
    text-align:center;
    margin-bottom:0px;
    img{
        display: inline-block;
       margin-right:15px;
       
    }
    h1{
        display: inline-block;
    }
}

    
`
const SubContainer=styled.div`
margin:50px;
margin-top:30px;
padding:50px;
background-color: #7f53ac;
background-image: linear-gradient(315deg, #ad1deb 71%,#6e72fc 0%);
    //background-color: #000080;
    border-radius:10px;
    border-bottom-left-radius:0px;
    display: grid;
    grid-template-columns:repeat(6,1fr);
    grid-auto-rows:auto;
    gap:20px;
    @media screen and (max-width: 474px) {
        grid-template-columns:repeat(1,1fr);
        background-image: linear-gradient(290deg, #ad1deb 81%,#6e72fc 0%);
        padding-left: 30px;
        
        
        
  
  
}
    @media screen and (max-width: 568px) and (min-width: 474px){
        grid-template-columns:repeat(1,1fr);
        background-image: linear-gradient(290deg, #ad1deb 71%,#6e72fc 0%);
        
        padding-left: 120px;
        
  
  
}
    @media screen and (max-width: 767px) and (min-width: 568px) {
        grid-template-columns:repeat(2,1fr);
        background-image: linear-gradient(305deg, #ad1deb 71%,#6e72fc 0%);
        
  
  
}
    @media screen and (max-width: 974px) and (min-width:767px){
        grid-template-columns:repeat(3,1fr);
  
  
}
@media screen and (max-width: 1202px) and (min-width: 974px){
        grid-template-columns:repeat(4,1fr);
  
  
}
@media screen and (min-width: 1202px) and (max-width:1406px){
        grid-template-columns:repeat(5,1fr);
  
  
}


`



