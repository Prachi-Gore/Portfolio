import React from 'react';
import styled from 'styled-components';
import finance_calculator from '../assets/finance_calculator.mp4';



function PCard({src,name,descr,code,preview}) {
  
  return (
   
    <Container>
   
    <video    controls  src={'src/assets/blog_shiny.mp4'} type="video/mp4"></video>
    
     <h2>{name}</h2>
     <SubContainer className='subcontainer'>
     <h2>{name}</h2>
    <p className='descr'>{descr}</p>
    <div className="buttons">
    <a href={preview}><Button><i class="fa-regular fa-eye"></i>Preview</Button></a>
    <a href={code}><Button><i class="fa-solid fa-code"></i>Code</Button></a> 
    </div>
    
</SubContainer>


    

    </Container>
    )
  
}

export default PCard;

const Container=styled.div`
display: flex;
flex-direction:column;





  
  
    
    
  
  video{
   height:253px;
    cursor: pointer;
   
   
   
  
  }
 


  h2{
   height: 50px;
   background-color: #f4f411;
   color: black;
   display: flex;
   align-items: center;
   padding-left:10px;
   margin: 0px;
   font-family:arial;
   @media screen and (max-width: 1352px){
   height: 40px;
  
  
  }
  @media screen and (max-width: 388px) {
  margin-top: -45px;
  }

   :hover+.subcontainer{
    
    display: block;

 }
 
 
   
   
   

  }
  

    
`;
const SubContainer=styled.div`
display: none;
font-family:arial;
background-color:white;
margin-top:-200px;
height:200px;
@media screen and (max-width: 1352px){
 margin-top: -180px;
  
  
  }
:hover{
  display: block;
}





p{
  color: black;
  padding: 10px;
  font-size:17px;
  height:50px;
 
  
}
.buttons{
  display: flex;
  justify-content: space-evenly;
  
  padding-top:15px ;
  padding-bottom:25px;
  i{
    margin-right:5px;
  }
  
} 

`;
const Button=styled.button`
font-size:17px;
padding: 8px 15px;
cursor: pointer;


`
    


 




