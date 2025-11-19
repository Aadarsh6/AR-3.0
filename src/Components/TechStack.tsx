import { useState } from "react";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showWarning, setShowWarning] = useState(true);

  const categories = ["All", "Frontend", "Backend", "Cloud", "DevOps", "AI/ML"];

  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", category: "Frontend", icon: "📘" },
    { name: "Next.js", category: "Frontend", icon: "▲" },
    { name: "Tailwind", category: "Frontend", icon: "🎨" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Python", category: "Backend", icon: "🐍" },
    { name: "PostgreSQL", category: "Backend", icon: "🐘" },
    { name: "MongoDB", category: "Backend", icon: "🍃" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Azure", category: "Cloud", icon: "🔷" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "Kubernetes", category: "DevOps", icon: "☸️" },
    { name: "TensorFlow", category: "AI/ML", icon: "🧠" },
    { name: "PyTorch", category: "AI/ML", icon: "🔥" },
  ];

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section
      id="tech-stack"
      className="bg-neutral-900 pt-20 md:pt-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Optional top warning / note */}
        {showWarning && (
          <div className="mx-auto max-w-3xl mb-6 rounded-md border border-neutral-800 bg-neutral-920 px-4 py-2 text-center text-sm text-neutral-300 flex items-center justify-between gap-4">
            <span>
              Tip: filter the tech list using the categories — mobile-friendly and
              centered layout.
            </span>
            <button
              onClick={() => setShowWarning(false)}
              className="ml-4 text-xs px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700"
            >
              dismiss
            </button>
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 md:mb-8 text-center">
          TECH <span className="text-neutral-400">STACK</span>
        </h2>

        {/* Category Filters - centered and with top padding */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 mt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-200 focus:outline-none ${
                  activeCategory === cat
                    ? "bg-white text-neutral-900"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid - centered width so there is space on both sides */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredTech.map((tech, index) => (
              <div
                key={index}
                className="bg-neutral-950 p-4 md:p-5 rounded-lg border border-neutral-800 transition-transform duration-200 transform hover:scale-[1.03] hover:-translate-y-1 text-center group overflow-hidden"
                // reduced scale to avoid overflow/jump
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 transform-gpu group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-neutral-300 font-semibold text-sm md:text-base">
                  {tech.name}
                </p>
                <p className="text-neutral-600 text-xs mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* bottom padding so section doesn't butt up to next section */}
        <div className="pt-12" />
      </div>
    </section>
  );
};

export default TechStack;
