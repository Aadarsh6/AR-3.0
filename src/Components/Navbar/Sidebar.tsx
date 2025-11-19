//@ts-ignore
const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = ["HOME", "ABOUT", "TECH STACK", "EXPERIENCE", "PROJECTS", "BLOGS", "CONTACT"];
  
  return (
    <nav className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
      <div 
        className={`absolute bg-neutral-900 rounded-full transition-all duration-700 ease-in-out ${
          isOpen ? 'w-[300vmax] h-[300vmax]' : 'w-0 h-0'
        }`}
        style={{
          top: '2rem',
          right: '2rem',
          transform: 'translate(50%, -50%)',
        }}
      />
      
      <ul 
        className={`relative z-10 flex flex-col gap-3 md:gap-4 text-center transition-all duration-500 px-6 ${
          isOpen ? 'opacity-100 delay-300 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {menuItems.map((item, index) => (
          <li 
            key={item}
            className={`transform transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${300 + index * 50}ms` : '0ms'
            }}
          >
            <a 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsOpen(false)}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white hover:text-neutral-300 transition-all duration-300 inline-block tracking-wide hover:scale-105 active:scale-95"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar