import Contact from './Contact'
import Hero from './Hero'
import NavBar from './NavBar'
import Projects from './Projects'
import TechStack from './TechStack'
import "./App.css"
import Extra from './Extra'
function App() {

  return (
    <div className='dotbg bg-slate-950'>
      <div className='max-w-screen-xl mx-auto '>
        <NavBar></NavBar>
        <Hero></Hero>
        <Projects></Projects>
        <TechStack></TechStack>
        <Extra></Extra>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
