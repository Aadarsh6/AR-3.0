import { Award, Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading development of cloud-native applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.",
      achievements: ["Reduced deployment time by 60%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
    },
    {
      role: "Full-Stack Developer",
      company: "StartUp Inc",
      period: "2020 - 2022",
      description: "Built multiple SaaS products from scratch. Implemented modern DevOps practices and optimized application performance.",
      achievements: ["Increased app performance by 40%", "Migrated legacy systems to cloud", "Reduced infrastructure costs by 30%"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed responsive web applications for various clients. Collaborated with designers to create pixel-perfect interfaces.",
      achievements: ["Delivered 15+ projects", "Improved page load times by 50%", "Implemented design system"]
    }
  ];
  
  return (
    <section id="experience" className="min-h-screen bg-neutral-950 py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 md:mb-16 text-center">
          EXPERIENCE
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 md:mb-12">
              <div className={`md:flex md:items-center md:gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-white rounded-full border-4 border-neutral-950 -translate-x-1/2 z-10" />
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-neutral-900 p-4 md:p-6 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs md:text-sm mb-2">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-neutral-400 mb-3">
                      <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-sm md:text-base">{exp.company}</span>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Award className="w-3 h-3 md:w-4 md:h-4 text-neutral-500 shrink-0 mt-1" />
                          <span className="text-neutral-500 text-xs md:text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience