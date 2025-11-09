
const Hero = ({isOpen}) => {
return (
    <main className={`min-h-screen w-full bg-white p-8 transform transition-transform duration-500 ease-in-out z-30 ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}>

        {/* Your Page Content Goes Here */}
    <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center w-fit mx-auto mb-12">
        <img
            src="https://via.placeholder.com/150" 
            alt="Ar"
            className="rounded-full w-40 h-40 mx-auto border-4 border-black"
        />
        </div>
        <h1 className="text-6xl font-black text-center mb-4">
        HEYY 👋, I'M AR
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
        Full-Stack Architect | Cloud, DevOps & AI Strategist
        </p>
        <div className="text-center">
        <button className="bg-black text-white font-bold py-3 px-8 rounded-lg">
            MY PROJECTS
        </button>
        </div>
    </div>

    </main>
  )
}

export default Hero