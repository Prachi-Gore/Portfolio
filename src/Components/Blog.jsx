import React from 'react'
import blog from '../assets/blog.jpg'

function Blog() {
  return (
    <section id='blog'>

    <div className='blog-container'>
      <p className='header'>
      <i className="fa-solid fa-newspaper"></i>
      <h1 className='section-title'>Blog</h1>
      </p>
      <div className='blog-subcontainer'>
 <div className='blogleft-container'>
  <img src={blog} alt="" />
 </div>
<div className='blogright-container'>
  <p className='inline-block 410px:w-[280px] 410px:ml-[50px]'>In my final semester of master I have given seminar on R Shiny. This blog is about <span className="inline-block text-[20px] text-[#010057] font-serif">R Shiny</span>.</p>
  <a href='https://web-app-shiny-blog.netlify.app' target='_blank'><button>Visit Blog</button></a>
</div>
      </div>
    </div>
    </section >

  )
}

export default Blog;