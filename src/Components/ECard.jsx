import React from 'react'

function ECard({image,degree,name,descr}) {
  return (
    <div className='educationcard-container' >
<div className='educationcardleft-container'>
    <img src={image} alt="" />
</div>
<div className='educationcardright-container'>
    <h2 className='text-[rgb(10,10,101)]'>{degree}</h2>
    <p>{name}</p>
    <p className='text-[#2c922c] text-[20px] font-bold'>{descr}</p>
</div>
    </div>
  )
}

export default ECard;
