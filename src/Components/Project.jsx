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
padding:50px;
padding-top:20px;
display: grid;
grid-template-columns:repeat(3,1fr);
grid-auto-rows:450px;
column-gap:30px;
row-gap: 0px;

  
`


