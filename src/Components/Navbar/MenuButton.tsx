import { MenuIcon } from "lucide-react"

//@ts-ignore
const MenuButton = ({isOpen, setIsOpen}) => {
return (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-6 right-6 md:top-8 md:right-8 w-14 h-14 rounded-full
                  flex flex-col items-center justify-center
                  space-y-1.5 z-50 bg-white shadow-lg hover:shadow-xl
                  transition-all duration-300 hover:scale-105 active:scale-95
                  border border-neutral-200"
      aria-label="Toggle menu"
    >
        {isOpen ? <div className="text-black/80 font-semibold text-2xl">X</div> :<MenuIcon className="text-black"/>}
    </button>
  )
}

export default MenuButton