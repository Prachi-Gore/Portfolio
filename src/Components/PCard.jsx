import React from 'react';
import styled from 'styled-components';
import mmt from '../assets/mmt.mp4'

function PCard() {
  return (
    <Container>
    <div className='video'>
    <video   controls src={mmt} type="video/mp4"></video>
    
     <h2>Model Monitoring Tool</h2>
     </div>
<SubContainer>
    <p className='descr'></p>
    <Button><i class="fa-regular fa-eye"></i>Preview</Button>
    <Button><i class="fa-solid fa-code"></i>Code</Button>
</SubContainer>
    </Container>
  )
}

export default PCard;

const Container=styled.div`


.video{
 
  
    
    
  
  video{
   height:300px;
    width:100%;
    cursor: pointer;
    margin-bottom: -25px;
    ::-webkit-media-controls-panel{
      display: none !important;
    }
  
  }


  h2{
   height: 50px;
   background-color: #ffbf00;
   color: black;
   display: flex;
   align-items: center;
   padding-left:10px;
   margin-top:0px;

  }
  
}
    
`;
const SubContainer=styled.div`
display: none;
    
`;
const Button=styled.button`
    
`;



