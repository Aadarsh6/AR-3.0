//@ts-ignore
const MenuButton = ({isOpen, setIsOpen}) => {
return (
    <button 
    onClick={()=> setIsOpen(!isOpen)}
    className="fixed top-8 right-8 w-12 h-12 rounded-full
                flex flex-col items-center justify-center
                space-y-2 z-50 bg-white shadow-md"
    >
        <span
            className={`block w-7 h-0.5 bg-black transform transition-all 
                    duration-300 ease-in-out
                    ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span
            className={`block w-7 h-0.5 bg-black transition-opacity 
                    duration-300 ease-in-out
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span
            className={`block w-7 h-0.5 bg-black transform transition-all 
                    duration-300 ease-in-out
                    ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
    </button>
)
}

export default MenuButton