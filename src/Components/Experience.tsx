import React from 'react'
import { Collapse } from 'antd';
import {PlusCircleTwoTone,MinusCircleTwoTone} from '@ant-design/icons'

const Experience = () => {
  const items = [
    {
      key: '1',
      label: 'Frontend Developer @ Osian Infotech',
      children: <p>joi</p>,
    },]
  return (
<section id='experience'>
  <div className='experience-container mx-auto'>
<div className='flex items-center justify-center pb-5 text-white'>
    
    <i className="fa-solid fa-suitcase inline-block mr-[15px]  text-[48px]"></i>
    <h1 className='inline-block section-title '>Experience</h1>
    </div>
<Collapse accordion items={items} expandIconPosition='end' className='experience-collapse text-white'
expandIcon={({ isActive }) => isActive ? <MinusCircleTwoTone style={{ fontSize: '32px'}} /> :<PlusCircleTwoTone style={{ fontSize: '32px'}}/> }
/>
</div>
</section>
  )
}

export default Experience;
