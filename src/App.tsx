import { useState } from "react"
import Hero from "./Components/Hero"
import MenuButton from "./Components/Navbar/MenuButton"
import Sidebar from "./Components/Sidebar"
import About from "./Components/About"
import TechStack from "./Components/TechStack"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Blogs from "./Components/Blogs"
import { Contact } from "lucide-react"
import Footer from "./Components/Footer"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-neutral-50 via-white to-neutral-100">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen}/>
      <Hero isOpen={isOpen}/>
      <div className="bg-neutral-950">
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
    </div>
  )
}

export default App