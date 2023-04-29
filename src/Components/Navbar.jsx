import React from 'react'
import styled from 'styled-components';
import jsLogo from '../assets/js-logo.png'
export default function Navbar() {
  return (
    <Container>
<Left>

<a href="/" class="logo"><img src={jsLogo} alt="" width="22px" /> Prachi</a>
</Left>
<Right>
<nav>
    <ul>
   <li><a href='#home'> Home</a></li>
   <li><a href='#about'> About</a></li>
   <li> <a href='#skills'>  Skills</a></li>
   <li><a href='#education'> Education</a></li>
   <li><a href='#project'> Project</a></li>
   <li><a href='#contact'> Contact</a></li>
   </ul>
</nav>
</Right>

    </Container>
  )
}

const Container=styled.div`

letter-spacing: 0.1ch;
font-family: 'Oswald', sans-serif;
font-size: 20px;
display:flex;
align-items:center;
padding-right: 120px;
padding-left:120px;
justify-content:space-between;
height: 60px;
box-shadow: 0px 0px 5px 2px lightgray;
margin-bottom:5px;



`;
const Right=styled.div`
display: flex;

nav{
   
   
    ul{
       display:flex;
        li{
        margin-right:30px;
        list-style:none;  
    a{
        color: black;
        text-decoration:none;
        :hover{
        color: blue;
        border-bottom:2px solid blue;
        padding-bottom: 5px; 
    }
    }
    }
    }
    
    
}

`;
const Left=styled.div`

a{
display: flex;
align-items: center;
text-decoration:none;
color: black;

img{
    margin-right:10px;
}
}
:hover{
    a{
    color:orange;
    }
}
`;
