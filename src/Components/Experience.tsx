import React from 'react'
import { Collapse } from 'antd';
import {PlusCircleTwoTone,MinusCircleTwoTone} from '@ant-design/icons'
import firstCompanyLogo from '../assets/first-company-logo.png'

const Experience = () => {
  const items = [
    {
      key: '1',
      label: 'Software Developer @ Osian',
      children: <div className='collapse-item-container'>
        <div className='flex justify-between gap-x-5 items-center'>
          <a className="company-logo" href='https://osiansoftware.com/'>
            <img alt='osian logo'src={firstCompanyLogo} className=' w-[450px]' />
          </a>
          <div className="work-description">
          {/* I work as a software developer. My daily responsibilities include creating dynamic and reusable components, ensuring smooth navigation between components, and integrating APIs with POST, PUT, and GET calls. I use Tailwind CSS and Ant Design to design user-friendly interfaces and collaborate using Git for version control. My focus is on delivering seamless and efficient user experiences. */}
          Worked as a Full Stack Developer building web applications using Django for backend and React.js for frontend. Created and integrated REST APIs to manage user data, forms, and dashboard features. Handled database models, views, and serializers while ensuring smooth communication with the frontend through API endpoints. Collaborated with the team to implement responsive UI, perform testing, and debug issues during development.
          </div>
        </div>
        <div className='flex flex-wrap gap-4'>
{
  ['Javascript','Python','Django','MySql','Typescript','Refine','ant design','Tailwind'].map((item,index)=><p key={index} className='skill-item'>{item}</p>)
}
        </div>
      </div>,
      extra:<div className='text-white text-base font-semibold'>Nov 2023 - Present</div>
    },]
  return (
<section id='experience'>
  <div className='experience-container mx-auto'>
<div className='flex items-center justify-center pb-5 text-white'>
    
    <i className="fa-solid fa-suitcase inline-block mr-[15px]  text-[48px]"></i>
    <h1 className='inline-block section-title '>Experience</h1>
    </div>
    <div className='collapsecontainer'>
<Collapse accordion defaultActiveKey={['1']} items={items} expandIconPosition='end' className='experience-collapse'
expandIcon={({ isActive }) => isActive ? <MinusCircleTwoTone style={{ fontSize: '28px'}} twoToneColor='#7257da' /> :<PlusCircleTwoTone style={{ fontSize: '28px'}} twoToneColor='#7257da'/> }
/>
</div>
</div>
</section>
  )
}

export default Experience;
