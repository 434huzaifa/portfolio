import Contact from './Contact'
import Hero from './Hero'
import NavBar from './NavBar'
import Projects from './Projects'
import TechStack from './TechStack'
import "./App.css"
import Extra from './Extra'
function App() {

  return (
    <div className='dotbg bg-slate-950 min-h-screen '>
      <div className='max-w-screen-xl xl:mx-auto mx-5'>
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
