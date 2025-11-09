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
      <span
        className={`block w-6 h-0.5 bg-neutral-900 transform transition-all 
                duration-300 ease-in-out
                ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span
        className={`block w-6 h-0.5 bg-neutral-900 transition-opacity 
                duration-300 ease-in-out
                ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span
        className={`block w-6 h-0.5 bg-neutral-900 transform transition-all 
                duration-300 ease-in-out
                ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  )
}

export default MenuButton