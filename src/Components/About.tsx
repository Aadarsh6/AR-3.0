// About.tsx
import React from "react";

const About: React.FC = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-neutral-950 py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          id="about-heading" 
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 md:mb-16 text-center"
        >
          ABOUT <span className="text-neutral-400">ME</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left: Intro text */}
          <div className="flex-1 space-y-4 md:space-y-6">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in building scalable web applications and cloud infrastructure. With a strong foundation in modern technologies and a keen eye for design, I create solutions that are both powerful and elegant.
            </p>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              My journey in tech has been driven by curiosity and the desire to solve complex problems. I specialize in creating seamless user experiences while ensuring robust backend architecture and DevOps practices.
            </p>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing technical blogs to share knowledge with the community.
            </p>
          </div>

          {/* Right: Stats - using flex wrap */}
          <div className="flex-1 flex flex-wrap gap-4 md:gap-6 justify-center items-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 min-w-[calc(50%-0.5rem)] md:min-w-[calc(50%-0.75rem)] bg-neutral-900 p-4 md:p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:scale-105 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-neutral-400 text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;