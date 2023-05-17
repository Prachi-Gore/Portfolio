import React from 'react'
import styled from 'styled-components';

function ECard({image,degree,name,descr}) {
  return (
    <Container >
<Left>
    <img src={image} alt="" />
</Left>
<Right>
    <h2>{degree}</h2>
    <p>{name}</p>
    <p>{descr}</p>
</Right>
    </Container>
  )
}

export default ECard;

const Container=styled.div`
height:150px;
width:100%;
display: flex;
background-color:white;
border-radius:5px;
margin-bottom: 20px;
:hover{
  box-shadow:3px 3px 3px 3px #83c1f8;
}
 @media screen and (max-width: 900px) {
  height: fit-content;
  display: flex;
  flex-direction: column;
  
 }   
`
const Left=styled.div`
width:35%;
margin-right:30px;

img{
  height:100%;
  width:100%;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
  @media screen and (max-width: 900px) {
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    border-bottom-left-radius:0px;
    
}
@media screen and (max-width: 900px) {
  height: 150px;
}
}
@media screen and (max-width: 900px) {
  width: 100%;
}
    
`
const Right=styled.div`
width: 65%;
h2{
  color:rgb(10, 10, 101);
  @media screen and (max-width: 900px) {
    font-size:20px;
  }
  
}
p:nth-child(3){
  color: #2c922c;
  font-size: 20px;
  font-family:Arial;
 font-weight:700;
  
}
@media screen and (max-width: 900px) {
  width: 80%;
  
  padding-left:10px;
  height:fit-content;
}

    
`

