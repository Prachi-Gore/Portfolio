import React, { useState } from 'react';
import styled from 'styled-components';

import home_img from '../assets/home-img.png'

function Home() {
   const words=["Frontend  Development","JavaScript","ReactJS","R Shiny"]
   const [index,setIndex]=useState(0);
   setTimeout(()=>setIndex(index+1),1500) // 1.5sec
  return (
    <section id='home'>

   <Container>
<Left>
<h1>Hi There 👋</h1>
<h1>I'm Prachi <span style={{color:"orange"}}>Gore</span></h1>
<p>I Am Learning <span style={{color:"red"}}>{words[index%words.length]}</span></p>
<Icon>
<a href='https://www.linkedin.com/in/prachi-gore-4772a11a5'><i class="fa-brands fa-linkedin"></i></a>
<a href='https://github.com/Prachi-Gore'><i class="fa-brands fa-github"></i></a>
<a href='https://www.hackerrank.com/prachi_gore'><i class="fa-brands fa-hackerrank"></i></a>
<a href='https://dev.to/prachigore'><i class="fa-brands fa-dev"></i></a>
</Icon>
</Left>
<Right>
<img src={home_img} alt="" />
</Right>
   </Container>
   </section>

  )
}

export default Home

const Container=styled.div`
background-color:aliceblue;
display:flex;
align-items:center;
justify-content:space-between;

padding: 50px 120px;
font-family: 'Oswald', sans-serif;
letter-spacing: 0.25ch;


    
`;
const Right=styled.div`
img{
    height:300px;
    margin-top:40px;
    border-radius:50%;
    transition:transform 0.5s;
    :hover{
        cursor: pointer;
        transform:translate(0px,-20px);
    }
}
    
`;
const Left=styled.div`
h1{
    color:#4DA17F;
    margin-bottom:-10px;
}
p{
    margin-top:20px;
    font-size: 20px;
}
    
`;
export const Icon=styled.div`
padding-top:20px;
font-size:25px;
a{
    margin-right:20px;
    padding:10px;
    
    border-radius:40%;

    background-color:yellow;
}
    
`;

