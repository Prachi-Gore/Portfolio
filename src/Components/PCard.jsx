import React from 'react';

function PCard({src,name,descr,code,preview}) {
  
  return (
    // <div className='flex flex-col relative'>
    <div className="project-card-container relative">
    <video    controls  src={src} type="video/mp4" className='h-[253px] cursor-pointer'></video>
     <h2 className='h-[50px] bg-[#f4f411] text-black flex items-center pl-[10px] m-0 font-serif  font-semibold hover-property'>{name}</h2>
     <div className='project-card-subcontainer'>
       <h2 className='h-[50px] bg-[#f4f411] text-black flex items-center pl-[10px] m-0 font-serif font-semibold'>
     {name}
     
       </h2>
         <p className='text-black p-[10px] text-[17px] h-[50px]'>{descr}</p>
         <div className="flex justify-evenly pt-[35px] pb-[25px]">
         <a target="_blank"href={preview}><button className='button'><i className="fa-regular fa-eye mr-[5px]"></i>Preview</button></a>
         <a target="_blank"href={code}><button className='button'><i className="fa-solid fa-code mr-[5px]"></i>Code</button></a> 
         </div>
         
     </div>
    </div>
       
    // </div>
    )
  
}

export default PCard;
    


 




