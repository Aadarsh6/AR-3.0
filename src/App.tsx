import { useState } from "react"
import Hero from "./Components/Hero"
import MenuButton from "./Components/Navbar/MenuButton"
import Sidebar from "./Components/Sidebar"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-neutral-50 via-white to-neutral-100">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen}/>
      <Hero isOpen={isOpen}/>
    </div>
  )
}

export default App