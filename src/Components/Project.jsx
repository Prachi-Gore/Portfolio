// Import css files

import { sliderSettings } from '../constant/sliderSettings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react'
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
import portfolio from '../assets/portfolio.mp4';
import { useState } from 'react';

 //const arraySrc=[amazon_frontend,finance_calculator,netflix_frontend,dvmft,fun_with_triangle,airbnb,meme_generator,react_info_app,random_multiplication,cash_register_manager,char_count,digital_clock,stock_price,quiz_cli,palindrome_birthday,blog_shiny,lucky_bday,portfolio]

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
  },
  {
    "src":portfolio,
    "name":"Portfolio",
    "descr":"This is my portfolio as a JavaScript, ReactJS, R Shiny Developer ",
    "code":"https://github.com/Prachi-Gore/portfolio",
    "preview":"https://prachi-gore-portfolio.netlify.app/"
    }
]
const settings=sliderSettings(data)
function Project() {
  const [loading,setLoading]=useState(true);
  return (
    <section id='project'>

    <div className='project-container min-h-32'>
    <div className='flex items-center justify-center m-0'>
    
    <i className="fa-solid fa-laptop-code inline-block mr-[15px] text-white text-[48px]"></i>
    <h1 className='inline-block section-title'>Projects <span style={{color:"#ffff00"}} className="section-title">Made</span></h1>
    </div>
   {loading? <div className="text-center !w-full">
       <div role="status">
           <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
           </svg>
           <span className="sr-only">Loading...</span>
       </div>
   </div> : data?.length>0 && <Slider {...settings} className="">
     {data.map((item,index)=><PCard src={item.src} name={item.name} descr={item.descr} preview={item.preview} code={item.code} key={index}></PCard>)}
     </Slider>}
   
     
    </div>
     </section >

  )
}

export default Project


