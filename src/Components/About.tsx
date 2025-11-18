// import { useState } from 'react';
// import { Github, Linkedin, Mail, MapPin, Send, ExternalLink, Code2, Server, Cloud, Database, Briefcase, Calendar, Award } from 'lucide-react';

// About Section
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-neutral-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">
          ABOUT <span className="text-neutral-400">ME</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-neutral-300 text-lg leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in building scalable web applications and cloud infrastructure. With a strong foundation in modern technologies and a keen eye for design, I create solutions that are both powerful and elegant.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              My journey in tech has been driven by curiosity and the desire to solve complex problems. I specialize in creating seamless user experiences while ensuring robust backend architecture and DevOps practices.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing technical blogs to share knowledge with the community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "15+", label: "Technologies" }
            ].map((stat, index) => (
              <div key={index} className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-black text-white mb-2">{stat.number}</h3>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About