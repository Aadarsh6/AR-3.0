const Blogs = () => {
  const blogs = [
    {
      title: "Building Scalable Microservices with Docker and Kubernetes",
      excerpt: "Learn how to design and deploy microservices architecture using containerization technologies...",
      date: "Nov 15, 2024",
      readTime: "8 min read",
      tags: ["DevOps", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop"
    },
    {
      title: "Modern React Patterns and Best Practices",
      excerpt: "Explore advanced React patterns including custom hooks, context optimization, and performance tips...",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      tags: ["React", "JavaScript", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      title: "AWS Cloud Architecture: From Basics to Advanced",
      excerpt: "A comprehensive guide to designing cloud-native applications on AWS with real-world examples...",
      date: "Nov 5, 2024",
      readTime: "10 min read",
      tags: ["AWS", "Cloud", "Architecture"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
    }
  ];
  
  return (
    <section id="blogs" className="min-h-screen bg-neutral-950 py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 md:mb-16 text-center">
          LATEST <span className="text-neutral-400">BLOGS</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-40 md:h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 text-neutral-500 text-xs md:text-sm mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-base md:text-xl font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="px-2 md:px-3 py-1 bg-neutral-800 text-neutral-400 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs