import { MenuIcon } from "lucide-react";

// MenuButton Component
//@ts-ignore
const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-6 right-6 md:top-8 md:right-8 flex flex-col items-center justify-center space-y-1.5 z-50 transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <div className="text-white/80 font-semibold text-2xl">X</div>
      ) : (
        <MenuIcon className="text-white/80 font-medium" />
      )}
    </button>
  );
};

export default MenuButton