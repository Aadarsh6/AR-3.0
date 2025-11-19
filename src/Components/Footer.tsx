    import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-white font-black text-xl md:text-2xl mb-3 md:mb-4">AR</h3>
            <p className="text-neutral-400 text-xs md:text-sm">
              Full-Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-white transition-colors text-xs md:text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Connect</h4>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-6 md:pt-8 text-center text-neutral-500 text-xs md:text-sm">
          <p>&copy; 2024 AR. All rights reserved. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer