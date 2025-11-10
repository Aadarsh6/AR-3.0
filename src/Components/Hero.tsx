//@ts-ignore
const Hero = ({ isOpen }) => {
return (
    <main
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


    <div className="relative z-10 flex flex-col items-center justify-center text-center 
    px-6 py-20 max-w-4xl mx-auto">
        <div className="relative mb-10 group">
        <div
            className="absolute inset-0 bg-neutral-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"
        />
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white transform transition-transform duration-300 group-hover:scale-105">
            <img
            src="https://i.pravatar.cc/200?img=33"
            alt="Profile"
            className="object-cover w-full h-full"
            />
        </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-200 mb-6 leading-tight">
        {' '}
        HEY , I'M{' '}
        <span className="inline-block text-white">
            {' '}
            AR
        </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12 font-medium">
        {' '}
          {/* CHANGED: Text color to be light */}
        Full-Stack Architect 👨‍💻
        <span className="mx-2 text-neutral-600">|</span>{' '}
        Cloud, DevOps & AI Strategist ☁️🤖
        </p>
        
        {/* Social links or scroll indicator (Colors are fine) */}
        <div className="mt-16 flex items-center gap-6 text-neutral-400">
        <div className="w-12 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
        <p className="text-sm font-medium">SCROLL TO EXPLORE</p>
        <div className="w-12 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
    </div>
    </main>
);
};

export default Hero;