import { useState } from "react";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'DevOps', 'AI/ML'];
  
  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', category: 'Frontend', icon: '📘' },
    { name: 'Next.js', category: 'Frontend', icon: '▲' },
    { name: 'Tailwind', category: 'Frontend', icon: '🎨' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
    { name: 'MongoDB', category: 'Backend', icon: '🍃' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Azure', category: 'Cloud', icon: '🔷' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'PyTorch', category: 'AI/ML', icon: '🔥' }
  ];
  
  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);
  
  return (
    <section id="tech-stack" className="min-h-screen bg-neutral-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">
          TECH <span className="text-neutral-400">STACK</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-neutral-900'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredTech.map((tech, index) => (
            <div
              key={index}
              className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-110 hover:-translate-y-2 text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-neutral-300 font-semibold">{tech.name}</p>
              <p className="text-neutral-600 text-xs mt-1">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 export default TechStack