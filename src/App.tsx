import { useState } from "react";
import MenuButton from "./Components/Navbar/MenuButton";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 text-neutral-900">
      {/* Floating Menu Button */}
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main Hero Section */}
      <Hero isOpen={isOpen} />
    </div>
  );
};

export default App;
