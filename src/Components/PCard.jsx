import React from 'react';
import styled from 'styled-components';

function PCard() {
  return (
    <Container>
     <video></video>
     <h4>Model Monitoring Tool</h4>
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
    
`;
const SubContainer=styled.div`
    
`;
const Button=styled.button`
    
`;



