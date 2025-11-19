import { ExternalLink, Github } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI for intelligent responses and content moderation.",
      tech: ["Next.js", "OpenAI", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "DevOps tool for managing multi-cloud infrastructure with automated deployment pipelines.",
      tech: ["Python", "AWS", "Docker", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization and reporting capabilities.",
      tech: ["React", "D3.js", "Node.js", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    }
  ];
  
  return (
    <section id="projects" className="min-h-screen bg-neutral-900 py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 md:mb-16 text-center">
          FEATURED <span className="text-neutral-400">PROJECTS</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden h-40 md:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="bg-white text-neutral-900 p-2 md:p-3 rounded-full hover:scale-110 transition-transform">
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="bg-white text-neutral-900 p-2 md:p-3 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 md:px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects