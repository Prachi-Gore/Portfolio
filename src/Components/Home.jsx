import React, { useState } from 'react';
import home_img from '../assets/home-img.png'

function Home() {
   const words=["Full Stack Development","JavaScript","Django","ReactJS","Django REST Framework","Redux"]
   const [index,setIndex]=useState(0);
   setTimeout(()=>{
      setIndex(index)
      if(index<words.length-1){
setIndex(index+1)
      }else{
         setIndex(0)
      }
   },1000) // 1.5sec
  return (
    <section id='home'>

   <div className='home-container'>
   <div className='flex flex-col'>
<h1 className='text-[#4DA17F] text-2xl font-bold '>Hi There 👋</h1>
<h1 className='text-[#4DA17F] text-2xl font-bold '>I'm Prachi <span style={{color:"orange"}}>Gore</span></h1>
<p className='mt-[10px] text-[20px]'>I have hand's on <span style={{color:"red"}}>{words[index]}</span></p>
<div className='icon-container'>
<a href='https://www.linkedin.com/in/prachi-gore-4772a11a5'target='_blank'><i className="fa-brands fa-linkedin"></i></a>
<a href='https://github.com/Prachi-Gore'target='_blank'><i className="fa-brands fa-github"></i></a>
<a href='https://www.hackerrank.com/prachi_gore'target='_blank'><i className="fa-brands fa-hackerrank"></i></a>
<a href='https://dev.to/prachigore'target='_blank'><i className="fa-brands fa-dev"></i></a>
</div>
</div>
<div className='home-rightcontainer'>
<img src={home_img} alt="" />
</div>
   </div>
   </section>

  )
}

export default Home

