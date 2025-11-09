//@ts-ignore
const Hero = ({ isOpen }) => {
  return (
    <main
      className={`relative min-h-screen w-full transform transition-transform duration-500 ease-in-out z-30 
      ${isOpen ? "-translate-x-full" : "translate-x-0"}
      bg-linear-to-b from-neutral-50 via-white to-neutral-100`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-linear-to-r from-purple-300/40 to-pink-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-lg h-128 bg-linear-to-tr from-blue-200/40 to-cyan-100/40 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Avatar */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 mb-8 rounded-full border-4 border-neutral-800 shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Ar"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 mb-4">
          HEYY 👋, I'M <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500">AR</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed mb-10">
          Full-Stack Architect &nbsp;|&nbsp; Cloud, DevOps & AI Strategist
        </p>

        {/* Button */}
        <button
          className="group relative inline-flex items-center gap-2 bg-black text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300 
          hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-900 active:scale-95"
        >
          MY PROJECTS
          <span className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>
    </main>
  );
};

export default Hero;
