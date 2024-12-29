import React, { useState,useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import baseUrl from '../constant/constant';
import Loading from '../common/loading';

function Skill() {
  const [loading,setLoading]=useState(true);
    const [skill,setSkill]=useState();  
    useEffect(()=>{
axios.get(`${baseUrl}skills/`).then(response=>{
    setSkill(response.data)
    setLoading(false);
}).catch(error=>{
    console.error("skill api error ",error)
    setLoading(false);
})
    },[])
  return (
    <section id='skills'>

   <div className='skill-container'>
    <div className="flex justify-center items-center text-center mb-0">
    <img className="inline-block mr-[15px]"  src="https://img.icons8.com/pastel-glyph/64/000000/laptop-coding--v1.png"/>
    <h1 className="inline-block section-title">Skills & <span className='section-title' style={{color:"#ffff00"}}>Hands On</span></h1>
    </div>
    <div className={`skill-subcontainer ${loading?'flex':'skill-subcontainergrid'}`} >
        
        {loading ?
      <Loading />
        : skill?.map((item)=><Card icon={item.iconUrl} name={item.name} key={item.id}/>)
    }


    </div>

   </div>
    </section>

  )
}

export default Skill;