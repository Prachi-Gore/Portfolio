
import  Navbar  from './Components/Navbar'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Skill from './Components/Skill'
import Education from './Components/Education'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Experience from './Components/experience'


function App() {
  return(
   <div className='w-screen overflow-hidden'>
   <Navbar/>
   <Home/>
   <About/>
   <Experience />
   <Skill/>
   <Education/>
   <Project/>
   <Blog/>
   <Contact/>
   </div>
    


  )
}
 







  
   


export default App