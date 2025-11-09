//@ts-ignore
const Hero = ({ isOpen }) => {
   return (
    <main
      className={`relative min-h-screen w-full flex items-center justify-center transition-all duration-500 ease-in-out ${
        isOpen ? 'blur-sm scale-95' : 'blur-0 scale-100'
      }`}
    >
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #d4d4d8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-linear-to-br from-blue-200/30 via-purple-200/20 to-transparent blur-3xl rounded-full animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-linear-to-bl from-pink-200/25 via-orange-200/15 to-transparent blur-3xl rounded-full animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-linear-to-tr from-cyan-200/20 via-teal-200/15 to-transparent blur-3xl rounded-full animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        {/* Avatar with subtle animation */}
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" 
               style={{ animationDuration: '3s' }} />
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white transform transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://i.pravatar.cc/200?img=33"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Heading with gradient text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 mb-6 leading-tight">
          HEY 👋, I'M{' '}
          <span className="inline-block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
            AR
          </span>
        </h1>
        
        {/* Subtitle with icons */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-12 font-medium">
          Full-Stack Architect 👨‍💻 
          <span className="mx-2 text-neutral-400">|</span>
          Cloud, DevOps & AI Strategist ☁️🤖
        </p>

        {/* CTA Button with enhanced hover effects */}
        <button
          className="group relative inline-flex items-center gap-3 bg-neutral-900 text-white font-bold text-sm md:text-base py-4 px-8 md:px-10 rounded-2xl shadow-xl transition-all duration-300 
          hover:-translate-y-1 hover:shadow-2xl active:scale-95 overflow-hidden"
        >
          <span className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-3">
            🚀 MY PROJECTS
          </span>
          <svg 
            className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Social links or scroll indicator could go here */}
        <div className="mt-16 flex items-center gap-6 text-neutral-400">
          <div className="w-12 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
          <p className="text-sm font-medium">SCROLL TO EXPLORE</p>
          <div className="w-12 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
      </div>
    </main>
  )
};

export default Hero;
