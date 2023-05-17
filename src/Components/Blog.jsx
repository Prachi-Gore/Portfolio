import React from 'react'
import styled from 'styled-components';
import blog from '../assets/blog.jpg'

function Blog() {
  return (
    <section id='blog'>

    <Container>
      <p>
      <i class="fa-solid fa-newspaper"></i>
      <h1>Blog</h1>
      </p>
      <SubContainer>
 <Left>
  <img src={blog} alt="" />
 </Left>
<Right>
  <p>In my final semester of master I have given seminar on R Shiny. This blog is about <span>R Shiny</span>.</p>
 <a href='https://web-app-shiny-blog.netlify.app/' target='_blank'> <button>Visit Blog</button> </a>
</Right>
      </SubContainer>

    </Container>
    </section >

  )
}

export default Blog;

const Container=styled.div`

padding-bottom:50px;
background-color:#ffbf00 ;
/* #ceffce */
p{
  display: flex;
  align-items: center;
  justify-content: center;
  i{
    display: inline-block;
    font-size: 35px;
   margin-right:10px;
   color: #222020;
  }

h1{
  display: inline-block;
 
  font-family: Arial, Helvetica, sans-serif;
  color: #010057;
}
} 

`
const SubContainer=styled.div`
display: flex;


justify-content: space-evenly;
height: 200px;

@media screen and (max-width:820px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  
  height: fit-content;
  

  
}
  
`
const Left=styled.div`
height: 100%;
img{
  height: 100%;
  width:400px;
  border-radius:5px;
  @media screen and (max-width:410px) {
  width:300px;
  
  
  
}
}

  
`
const Right=styled.div`
font-size: 18px;
width: 400px;
button{
padding: 10px 20px;
background-color:#0896d8;
color:white;
border: none;
outline: none;
border-radius:3px;
margin-top:20px;
font-size: 17px;
:hover{
  cursor: pointer;
  background-color:#257ebd;

}
@media screen and (max-width:820px) {
  margin-left:150px;
}
} 
p{
  display: inline-block;
  @media screen and (max-width:410px) {
 width:280px;
 
 
 
  margin-left:50px;
 
  
  
}
  span{
    font-size: 20px;
    color:#010057;
  }
}

  
`
