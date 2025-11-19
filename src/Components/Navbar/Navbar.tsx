import type React from "react";
import MenuButton from "./MenuButton";

type Props = {
    isOpen: boolean,
    setIsOpen: (v: boolean) => void
};


const Navbar:React.FC<Props> = ({isOpen, setIsOpen}) => {
 return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo / Title */}
          <div className="flex items-center gap-4">
            <a href="#home" className="text-white font-black text-lg md:text-xl">
              AR
            </a>
            <nav className="hidden md:flex gap-6 text-neutral-400 text-sm">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#blogs" className="hover:text-white">Blogs</a>
            </nav>
          </div>

          {/* Right: MenuButton */}
          <div className="flex items-center">
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
