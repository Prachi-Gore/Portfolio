import React from 'react'

import ECard from './ECard';
import nmu from '../assets/nmu.png';
import sathaey from '../assets/sathaey.png';
import viva from '../assets/viva.png';
import avsv from '../assets/avsv.jpg';

function Education() {
  return (
    <section id='education'>

    <div className='education-container' >
        <div className="header">
        <i className="fa-solid fa-graduation-cap inline-block text-[45px] mr-[5px]"></i>
        <h1 className='inline-block section-title'>My <span className="text-[#ba41ba] section-title">Education</span></h1>
        
        </div>
        <q className='education-quote'>Learning how to think is the essence of education.</q>
        <div className='education-subcontainer'>
        
        <ECard image={nmu} degree="Master of Science in Statistics" name="Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon" descr="2021-2023 | Completed | 73.33% "/>  
        <ECard image={sathaey} degree="Bachelor of Science in Statistics" name="Parle Tilak Vidyalaya institution, Mumbai" descr="2017-2020 | Completed | 79% "/>
        <ECard image={viva} degree="HSC Science | PCMCS" name="Shri Vishnu Waman Thakur Charitable Trust VIVA College, Virar" descr="2015-2017 | Completed | 75.57% "/>
        <ECard image={avsv} degree="SSC" name="Annasaheb Vartak Smarak Vidyamandir, Virar" descr="2015 | Completed | 90.60% "/>

        </div>
        
    </div>
     </section >

  )
}

export default Education;
