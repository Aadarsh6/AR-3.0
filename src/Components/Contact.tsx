import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section id="contact" className="min-h-screen bg-neutral-900 py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 md:mb-16 text-center">
          GET IN <span className="text-neutral-400">TOUCH</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Let's work together</h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 md:gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="bg-neutral-800 p-2 md:p-3 rounded-lg group-hover:bg-neutral-700 transition-colors">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-neutral-500">Email</p>
                  <p className="font-semibold text-sm md:text-base">your.email@example.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 md:gap-4 text-neutral-300">
                <div className="bg-neutral-800 p-2 md:p-3 rounded-lg">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-neutral-500">Location</p>
                  <p className="font-semibold text-sm md:text-base">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="bg-neutral-800 p-2 md:p-3 rounded-lg hover:bg-neutral-700 transition-all hover:scale-110">
                <Github className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" />
              </a>
              <a href="#" className="bg-neutral-800 p-2 md:p-3 rounded-lg hover:bg-neutral-700 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" />
              </a>
              <a href="#" className="bg-neutral-800 p-2 md:p-3 rounded-lg hover:bg-neutral-700 transition-all hover:scale-110">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-neutral-400 mb-2 font-semibold text-sm md:text-base">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 md:py-3 text-sm md:text-base text-white focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-neutral-400 mb-2 font-semibold text-sm md:text-base">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 md:py-3 text-sm md:text-base text-white focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-neutral-400 mb-2 font-semibold text-sm md:text-base">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 md:py-3 text-sm md:text-base text-white focus:outline-none focus:border-neutral-600 transition-colors resize-none"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-neutral-900 font-bold py-3 md:py-4 rounded-lg hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              Send Message
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact