
import React from 'react'
import styled from 'styled-components'
import jsLogo from '../assets/js-logo.png'

function Card() {
  return (
   <Container>
    <img src={jsLogo} alt="" />
    <h4>JavaScript</h4>
   </Container>
  )
}

export default Card

const Container=styled.div`
//margin:10px;
background-color:#000034;
border-radius:10px;
width:190px;
height:150px;
display: flex;
flex-direction: column;
align-items: center;
padding-top:20px;
font-size: 18px;
font-family:Arial, Helvetica, sans-serif;

    
`