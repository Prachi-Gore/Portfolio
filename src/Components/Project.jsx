import React from 'react'
import styled from 'styled-components'
import PCard from './PCard'
//import data from './project.json'
import finance_calculator from '../assets/finance_calculator.mp4';
import blog_shiny from '../assets/blog_shiny.mp4';
import amazon_frontend from '../assets/amazon_frontend.mp4';
import netflix_frontend from '../assets/netflix_frontend.mp4';
import dvmft from '../assets/dvmft.mp4';
import fun_with_triangle from '../assets/fun_with_triangle.mp4';
import airbnb from '../assets/airbnb.mp4';
import react_info_app from '../assets/react_info_app.mp4';
import random_multiplication from '../assets/random_multiplication.mp4';
import cash_register_manager from '../assets/cash_register_manager.mp4';
import char_count from '../assets/char_count.mp4';
import digital_clock from '../assets/digital_clock.mp4';
import stock_price from '../assets/stock_price.mp4';
import quiz_cli from '../assets/quiz_cli.mp4';
import palindrome_birthday from '../assets/palindrome_birthday.mp4';
import meme_generator from '../assets/meme_generator.mp4';
import lucky_bday from '../assets/lucky_bday.mp4';

 //const arraySrc=[amazon_frontend,finance_calculator,netflix_frontend,dvmft,fun_with_triangle,airbnb,meme_generator,react_info_app,random_multiplication,cash_register_manager,char_count,digital_clock,stock_price,quiz_cli,palindrome_birthday,blog_shiny,lucky_bday]

const data=[
  {
      "src":amazon_frontend,
      "name":"Amazon🛒 Clone",
      "descr":"This is Amazon clone build with ReactJS, Styled Components and HTML5",
      "code":"https://github.com/Prachi-Gore/amazon",
      "preview":"https://amazon-frontend-responsive.netlify.app/"
  },
  {
  "src":finance_calculator,
  "name":"Finance Calculator",
  "descr":"This Finance Calculator has feature of calculating Present Value, Future Value, Annuity/Series Of Payments/EMI ",
  "code":"https://github.com/Prachi-Gore/Finance-Calculator",
  "preview":"https://prachigore29.shinyapps.io/Finance_Calculator/"
},
{
  "src":dvmft,
  "name":"Data Visualization&Model Fitting Tool",
  "descr":"Now user can visualize dataset, fit the model without knowing any programming language",
  "code":"https://github.com/Prachi-Gore/Model-Fitting-Data-Visualization-Tool",
  "preview":"https://prachigore29.shinyapps.io/DataVisualizationAndModelFittingTool/"
  
},
{
  "src":netflix_frontend,
  "name":"Netflix Clone",
  "descr":"This is Netflix clone build with HTML5, SCSS and ReactJS ",
  "code":"https://github.com/Prachi-Gore/Netflix-Clone",
  "preview":"https://netflix-ui-react-scss.netlify.app/"
},
{
  "src":fun_with_triangle,
  "name":"Fun With Triangle📐",
  "descr":"This is multi page website Here you can check whether given geometry is triangle? Area? Hypotenous? Quizzes ",
  "code":"https://github.com/Prachi-Gore/Fun_With_Triangles",
  "preview":"https://learn-triangles-with-fun.netlify.app/"
},
{
  "src":airbnb,
  "name":"Airbnb",
  "descr":"This is Airbnb clone build with HTML, CSS, ReactJS",
  "code":"https://github.com/Prachi-Gore/airbnb-clone",
  "preview":"https://airbnbscrimba.netlify.app/"
},
{
  "src":react_info_app,
  "name":"React Info App",
  "descr":"Do you want to know about react ",
  "code":"https://github.com/Prachi-Gore/react-info-app",
  "preview":"https://react-info-app.netlify.app/"
},
{
  "src":random_multiplication,
  "name":"Multiplication🧮 App",
  "descr":"Practice multiplication and keep track of score",
  "code":"https://github.com/Prachi-Gore/MultiplicationApp",
  "preview":"https://multiplicationpractice.netlify.app/"
},
{
  "src":cash_register_manager,
  "name":"Cash💵 Register Manager",
  "descr":"help the user by telling how can he/she return the change to the customer with a minimum number of notes ",
  "code":"https://github.com/Prachi-Gore/Cash-Register-Manager",
  "preview":"https://cash-exchange-guide.netlify.app/"
},
{
"src":char_count,
"name":"Count Character",
"descr":"let's count characters",
"code":"https://github.com/Prachi-Gore/Count_Characters",
"preview":"https://prachi-gore.github.io/Count_Characters/"
},
{
"src":digital_clock,
"name":"Digital Clock⏰",
"descr":"This is Digital Clock",
"code":"https://github.com/Prachi-Gore/DigitalClock",
"preview":"https://prachi-gore.github.io/DigitalClock/"

},
{
"src":lucky_bday,
"name":"Is Your 🎂 Lucky",
"descr":"This is fun app to see whether your Birthdate is Lucky",
"code":"https://github.com/Prachi-Gore/isYourBirthdayLucky",
"preview":"https://is-your-birthdate-special.netlify.app/"
},
{
"src":meme_generator,
"name":"meme 🎭 Generator",
"descr":"This is meme generator",
"code":"https://github.com/Prachi-Gore/meme-generator",
"preview":"https://generate-funny-meme.netlify.app/"
},
{
"src":palindrome_birthday,
"name":"Palindrome Birthday🍰",
"descr":"palindrome birthday checker",
"code":"https://github.com/Prachi-Gore/palindrome-birthday",
"preview":"https://palindromric-birthday.netlify.app/"
},
{
"src":quiz_cli,
"name":"Quiz🤔 App",
"descr":"let's play, how well do you know india . this APP made on Command Line Interface",
"code":"https://github.com/Prachi-Gore/Quiz_in_CLI",
"preview":"https://replit.com/@Prachi-Gore/Quiz#index.js?embed=1&output=1"
},
{
"src":stock_price,
"name":"Stock Price💰 Calculator",
"descr":"This is Stock Purchase Profit and Loss Calculator App ",
"code":"https://github.com/Prachi-Gore/Stock-Price-Calculator",
"preview":"https://stock-purchase-calculator.netlify.app/"
},
{
  "src":blog_shiny,
  "name":"Blog📝Web App With R Shiny",
  "descr":"This blog is regarding how to create dashboard in R shiny. specially for How to render Plots ",
  "code":"https://github.com/Prachi-Gore/blog-shiny",
  "preview":"https://web-app-shiny-blog.netlify.app/"
  }



]

function Project() {
  return (
    <section id='project'>

    <Container>
    <p>
    
    <i class="fa-solid fa-laptop-code"></i>
    <h1>Projects <span style={{color:"#ffff00"}}>Made</span></h1>
    </p>
    <ProjectContainer>
     {data.map((item)=><PCard src={item.src} name={item.name} descr={item.descr} preview={item.preview} code={item.code}></PCard>)}
    {/* dont do this */}
     {/* {arraySrc.map((a)=>data.map((item)=><PCard src={a} name={item.name} descr={item.descr} preview={item.preview} code={item.code}></PCard>))} */}
     
     
    </ProjectContainer>
    </Container>
     </section >

  )
}

export default Project

const Container=styled.div`
background-color:  #09143C;
height: fit-content;
color:white;
display: flex;
flex-direction: column;
margin-bottom:-17px;


p{
   display: flex;
     align-items: center;
     justify-content:center; 
  
    margin:0px;
    i{
        display: inline-block;
       margin-right:15px;
       color: white;
       font-size: 48px;
       
    }
    h1{
        display: inline-block;
        font-family:arial;
        
        span{
            color: #c79601;
        }
    }
}

    
`
const ProjectContainer=styled.div`
padding:20px 40px 50px 50px;
display: grid;
grid-template-columns:repeat(3,450px);
grid-auto-rows:303px;
column-gap:30px;
row-gap: 30px;
@media screen and (max-width: 1352px){
  grid-template-columns:repeat(2,450px);
 column-gap:50px ;
  margin: auto;
  
  
  }
  @media screen and (max-width: 1480px) and (min-width: 1312px){
  grid-template-columns:repeat(3,400px);
 
  margin: auto;
  
  
  }
  @media screen and (max-width: 1312px) and (min-width: 1352px){
  grid-template-columns:repeat(3,400px);
 
  padding-left:5px;
  padding-right: 5px;
  
  
  }
  @media screen and (max-width: 1000px) {
  grid-template-columns:repeat(2,400px);
  }
  @media screen and (max-width: 905px) {
  grid-template-columns:repeat(1,450px);
  }
  @media screen and (max-width: 520px) {
  grid-template-columns:repeat(1,350px);
  padding-left:0px;
  padding-right: 0px;
  }
  @media screen and (max-width: 520px) {
  grid-template-columns:repeat(1,350px);
  padding-left:0px;
  padding-right: 0px;
  }
  @media screen and (max-width: 388px) {
  grid-template-columns:repeat(1,300px);
  padding-left:0px;
  padding-right: 0px;
  row-gap: 0px;
  grid-auto-rows:250px;
  }


  
`


