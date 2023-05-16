
import  Navbar  from './Components/Navbar'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Skill from './Components/Skill'
import Education from './Components/Education'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Project from './Components/Project'
import styled from 'styled-components'


function App() {
  return(
   <Container>
   <Navbar/>
   <Home/>
   <About/>
   <Skill/>
   <Education/>
   <Project/>
   <Blog/>
   <Contact/>
   </Container>
    


  )
}
  const Container=styled.div`
    width:100vw ;
    overflow: hidden;
  `;







  
   


export default App