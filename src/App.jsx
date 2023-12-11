import Contact from './Contact'
import Hero from './Hero'
import NavBar from './NavBar'
import Projects from './Projects'
import TechStack from './TechStack'

function App() {

  return (
    <div className='max-w-screen-xl mx-auto '>
    <NavBar></NavBar>
    <Hero></Hero>
    <Projects></Projects>
    <TechStack></TechStack>
    <Contact></Contact>
    </div>
  )
}

export default App
