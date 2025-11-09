import { useState } from "react"
import MenuButton from "./Components/Navbar/MenuButton"
import Hero from "./Components/Hero"
import Sidebar from "./Components/Sidebar"

const App = () => {

const[isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Hero isOpen={isOpen}/>
      <Sidebar isOpen={isOpen}/>
    </div>
  )
}

export default App