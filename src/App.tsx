import { useState } from "react";
import MenuButton from "./Components/Navbar/MenuButton";
// import { Sidebar } from "lucide-react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Sidebar from "./Components/Navbar/Sidebar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import { Contact } from "lucide-react";
import Footer from "./Components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950">
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen} />
      <About />
      <TechStack />
      <Experience/>
      <Projects />
      <Blogs />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;