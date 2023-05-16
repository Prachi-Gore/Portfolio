import React from 'react'
import styled from 'styled-components'
import PCard from './PCard'

function Project() {
  return (
    <section id='project'>

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
     </section >

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
@media screen and (max-width: 1352px){
  grid-template-columns:repeat(2,450px);
 column-gap:50px ;
  margin: auto;
  
  
  }
  @media screen and (max-width: 1480px) and (min-width: 1312px){
  grid-template-columns:repeat(3,400px);
 
  margin: auto;
  
  
  }
  @media screen and (max-width: 1312px) and (min-width: 1352px){
  grid-template-columns:repeat(3,400px);
 
  padding-left:5px;
  padding-right: 5px;
  
  
  }
  @media screen and (max-width: 1000px) {
  grid-template-columns:repeat(2,400px);
  }
  @media screen and (max-width: 905px) {
  grid-template-columns:repeat(1,450px);
  }
  @media screen and (max-width: 520px) {
  grid-template-columns:repeat(1,350px);
  padding-left:0px;
  padding-right: 0px;
  }
  @media screen and (max-width: 520px) {
  grid-template-columns:repeat(1,350px);
  padding-left:0px;
  padding-right: 0px;
  }

  
`


