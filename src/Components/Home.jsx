import React, { useState } from 'react';
import home_img from '../assets/home-img.png'

function Home() {
   const words=["Frontend  Development","JavaScript","ReactJS","Django"]
   const [index,setIndex]=useState(0);
   setTimeout(()=>setIndex(index+1),1500) // 1.5sec
  return (
    <section id='home'>

   <div className='home-container'>
   <div className='flex flex-col'>
<h1 className='text-[#4DA17F] text-2xl font-bold '>Hi There 👋</h1>
<h1 className='text-[#4DA17F] text-2xl font-bold '>I'm Prachi <span style={{color:"orange"}}>Gore</span></h1>
<p className='mt-[10px] text-[20px]'>I Am Learning <span style={{color:"red"}}>{words[index%words.length]}</span></p>
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

