//@ts-ignore
const Sidebar = ({isOpen}) => {
  return (
    <nav 
      className={`fixed inset-0 flex items-center justify-center z-40 pointer-events-none`}
    >
      {/* Circular expanding overlay from top-right corner */}
      <div 
        className={`absolute top-0 right-0 bg-black rounded-full transition-all duration-2000 ease-in-out ${
          isOpen 
            ? 'w-[300vmax] h-[300vmax]' 
            : 'w-0 h-0'
        }`}
        style={{
          top: '0rem',
          right: '0rem',
          transform: 'translate(50%, -50%)',
        }}
      />
      
      {/* Menu items */}
      <ul 
        className={`relative z-10 space-y-6 md:space-y-8 text-center transition-all duration-500 ${
          isOpen 
            ? 'opacity-100 delay-300 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {["HOME", "ABOUT", "PROJECTS", "EXPERIENCE", "TECH STACK", "BLOGS", "CONTACT"].map((item, index) => (
          <li 
            key={item}
            className={`transform transition-all duration-500 ${
              isOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${300 + index * 50}ms` : '0ms'
            }}
          >
            <a 
              href="#" 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white hover:text-gray-400 transition-colors duration-300 inline-block tracking-wide"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar