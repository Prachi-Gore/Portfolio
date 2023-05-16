import React from 'react'

import styled from 'styled-components';
import ECard from './ECard';
import nmu from '../assets/nmu.png';
import sathaey from '../assets/sathaey.png';
import viva from '../assets/viva.png';
import avsv from '../assets/avsv.jpg';

function Education() {
  return (
    <section id='education'>

    <Container >
        <div className="header">
        <i class="fa-solid fa-graduation-cap"></i>
        <h1 >My <span>Education</span></h1>
        
        </div>
        <q>for me the purpose of education is not just to get a degree but the time given by parents to explore different things and find our passion.</q>
        <SubContainer>
        
        <ECard image={nmu} degree="Master of Science in Statistics" name="Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon" descr="2021-2023 | Pursuing "/>  
        <ECard image={sathaey} degree="Bachelor of Science in Statistics" name="Parle Tilak Vidyalaya institution, Mumbai" descr="2017-2020 | Completed | 79% "/>
        <ECard image={viva} degree="HSC Science | PCMCS" name="Shri Vishnu Waman Thakur Charitable Trust VIVA College, Virar" descr="2015-2017 | Completed | 75.57% "/>
        <ECard image={avsv} degree="SSC" name="Annasaheb Vartak Smarak Vidyamandir, Virar" descr="2015 | Completed | 90.60% "/>

        </SubContainer>
        
    </Container>
     </section >

  )
}

export default Education;

const Container=styled.div`
font-family:Arial, Helvetica, sans-serif;
background-color:#d7ecff;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom:50px;
margin-bottom:-22px;


.header{
  i{
   display:inline-block;
   font-size: 45px;
   margin-right:5px;
  }
  h1{
    display:inline-block;
    span{
      color: #ba41ba;
    }

  }
}
q{
  font-size:17px;
  margin-bottom:30px;
  font-family: 'Ysabeau', sans-serif;
  :before, :after{ content: "";}
}

    
`

const SubContainer=styled.div`
width:70%;
    
`
