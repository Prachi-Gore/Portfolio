// Import css files

import { sliderSettings } from '../constant/sliderSettings';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState,useEffect } from 'react';
import Loading from '../common/loading';
import React from 'react'
import PCard from './PCard'
//import data from './project.json'

import { Select } from 'antd';
import axios from 'axios';
import baseUrl from '../constant/constant';


 //const arraySrc=[amazon_frontend,finance_calculator,netflix_frontend,dvmft,fun_with_triangle,airbnb,meme_generator,react_info_app,random_multiplication,cash_register_manager,char_count,digital_clock,stock_price,quiz_cli,palindrome_birthday,blog_shiny,lucky_bday,portfolio]


function Project() {
  const [loading,setLoading]=useState(true);
  const [skillLoading,setSkillLoading]=useState(true);
  const [skill,setSkill]=useState([]);  
  const [project,setProject]=useState([]);
  let settings={};
  function handleChange(value){
    console.log("selecred skill from dropdown ",value)
  }
  useEffect(()=>{
axios.get(`${baseUrl}skills/`).then(response=>{
  setSkill(response.data)
  setSkillLoading(false);
}).catch(error=>{
  console.error("skill option list api error ",error)
  setSkillLoading(false);
})
// project api
axios.get(`${baseUrl}projects/`).then(response=>{
  setProject(response.data)
  settings=sliderSettings(response.data)
  console.log('settings ',settings)
  setLoading(false);
}).catch(error=>{
  console.error("project list api error ",error)
  setLoading(false);
})

  },[]) 
   return (
    <section id='project'>

    <div className='project-container min-h-44'>
    <div className='flex items-center justify-center m-0'>
    
    <i className="fa-solid fa-laptop-code inline-block mr-[15px] text-white text-[48px]"></i>
    <h1 className='inline-block section-title'>Projects <span style={{color:"#ffff00"}} className="section-title">Made</span></h1>
    </div>
    <div className='flex justify-end px-8 '>
    <Select
      mode="multiple"
      allowClear
      // style={{ width: '100%' }}
      placeholder="Please select skill"
      onChange={handleChange}
      options={skill?.map(item=>({label:item?.name,value:item?.name}))||[]}
      loading={skillLoading}
      className='w-96'
      placement='bottomLeft'
      size='large'
    />
    </div>
   {loading?   <Loading /> : project?.length>0 && <Slider {...settings} className="" key={settings?.slidesToShow}>
     {project.map((item,index)=><PCard src={`/${item.video_name}.mp4`} name={item.name} descr={item.descr} preview={item.preview} code={item.code} key={index}></PCard>)}
     </Slider>}
   
     
    </div>
     </section >

  )
}

export default Project


