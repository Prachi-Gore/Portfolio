
import React from 'react'
import styled from 'styled-components'


function Card({icon,name}) {
  return (
   <Container>
    <img src={icon} alt="" />
    <h4>{name}</h4>
   </Container>
  )
}

export default Card

const Container=styled.div`
//margin:10px;
background-color:#000034;
border-radius:10px;
width:190px;
height:130px;
display: flex;
flex-direction: column;
align-items: center;
padding-top:20px;
font-size: 18px;
font-family:Arial, Helvetica, sans-serif;
img{
width:55px;
height: 55px;


}

    
`