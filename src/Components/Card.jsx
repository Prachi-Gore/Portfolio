
import React from 'react'


function Card({icon,name}) {
  return (
   <div className='skill-card'>
    <img className='w-[55px] h-[55px]' src={icon} alt="" />
    <h4>{name}</h4>
   </div >
  )
}

export default Card