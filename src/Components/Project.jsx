import React from 'react'
import styled from 'styled-components'
import PCard from './PCard'

function Project() {
  return (
    <Container>
    <p>
    
    <i class="fa-solid fa-laptop-code"></i>
    <h1>Projects <span style={{color:"#ffff00"}}>Made</span></h1>
    </p>
    <ProjectContainer>
    <PCard></PCard>
    <PCard></PCard>
    <PCard></PCard>
    <PCard></PCard>
    <PCard></PCard>
    <PCard></PCard>
    <PCard></PCard>
    <PCard></PCard>
    </ProjectContainer>
    </Container>
  )
}

export default Project

const Container=styled.div`
background-color:  #09143C;
height: fit-content;
color:white;
display: flex;
flex-direction: column;
margin-bottom:-17px;


p{
   display: flex;
     align-items: center;
     justify-content:center; 
  
    margin:0px;
    i{
        display: inline-block;
       margin-right:15px;
       color: white;
       font-size: 48px;
       
    }
    h1{
        display: inline-block;
        font-family:arial;
        
        span{
            color: #c79601;
        }
    }
}

    
`
const ProjectContainer=styled.div`
padding:20px 40px 50px 50px;
display: grid;
grid-template-columns:repeat(3,450px);
grid-auto-rows:303px;
column-gap:30px;
row-gap: 30px;

  
`


