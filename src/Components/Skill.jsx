import React from 'react'
import styled from 'styled-components';
import Card from './Card';

function Skill() {
  return (
   <Container>
    <p>
    <i class="fa-duotone fa-laptop-code"></i>
    <h1>Skills & <span style={{color:"#ffff00"}}>Hands On</span></h1>
    </p>
    <SubContainer>
        <Card></Card>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>


    </SubContainer>

   </Container>
  )
}

export default Skill;

const Container=styled.div`
background-color:#0000cd;
color:white;
display: flex;
flex-direction: column;
margin:auto;
p{
    text-align:center;
    
}
    
`
const SubContainer=styled.div`
margin:50px;
padding:50px;
    background-color: #000080;
    border-radius:10px;
    display: grid;
    grid-template-columns:repeat(6,1fr);
    grid-auto-rows:auto;
    gap:20px;

`



