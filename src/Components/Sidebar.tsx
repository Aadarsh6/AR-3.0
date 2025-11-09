//@ts-ignore

const Sidebar = ({isOpen}) => {
  return (
    <nav className={`${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul>
            {["Home", "About", "Project", "Contact"].map((item)=>(
                <li key={item}>
                    <a href="#" className="text-4xl font-bold hover:text-gray-400">
                    {item}
                    </a>
                    </li>
            ))}
            </ul>
    </nav>
  )
}

export default Sidebar