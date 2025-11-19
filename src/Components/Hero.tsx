//@ts-ignore
const Hero = ({ isOpen }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex items-center justify-center transition-all duration-500 ease-in-out ${
        isOpen ? 'blur-sm scale-95' : 'blur-0 scale-100'
      } bg-neutral-950`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, #262626 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 max-w-4xl mx-auto">
        <div className="relative mb-8 md:mb-10 group">
          <div className="absolute inset-0 bg-neutral-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white transform transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://i.pravatar.cc/200?img=33"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-neutral-200 mb-4 md:mb-6 leading-tight">
          HEY, I'M <span className="inline-block text-white">AR</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8 md:mb-12 font-medium">
          Full-Stack Architect 👨‍💻
          <span className="mx-2 text-neutral-600">|</span>
          Cloud, DevOps & AI Strategist ☁️🤖
        </p>
        
        <div className="mt-8 md:mt-16 flex items-center gap-4 md:gap-6 text-neutral-400">
          <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <p className="text-xs md:text-sm font-medium">SCROLL TO EXPLORE</p>
          <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
      </div>
    </section>
  );
};


export default Hero;