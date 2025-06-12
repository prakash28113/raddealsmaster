
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Digital", "Print", "Branding", "Video"];
  
  const projects = [
    {
      id: 1,
      title: "Tech Startup Rebrand",
      category: "Branding",
      description: "Complete visual identity transformation that increased brand recognition by 300%",
      image: "/tech_Rebrand.png",
      tags: ["Branding", "Digital"]
    },
    {
      id: 2,
      title: "E-commerce Campaign",
      category: "Digital",
      description: "Multi-platform campaign that drove 150% increase in conversions",
      image: "/campaign.png",
      tags: ["Digital", "Print"]
    },
    {
      id: 3,
      title: "Motion Graphics Series",
      category: "Video",
      description: "Cinematic brand videos that gained 2M+ views across platforms",
      image: "/motion_graphics.png",
      tags: ["Video", "Digital"]
    },
    {
      id: 4,
      title: "Product Launch Kit",
      category: "Print",
      description: "Comprehensive print materials that supported successful product launch",
      image: "/product.png",
      tags: ["Print", "Branding"]
    },
    {
      id: 5,
      title: "Healthcare App Design",
      category: "Digital",
      description: "User-centered design that improved patient engagement by 200%",
      image: "/healthcare.png",
      tags: ["Digital", "Branding"]
    },
    {
      id: 6,
      title: "Annual Report Design",
      category: "Print",
      description: "Award-winning annual report design for Fortune 500 company",
      image: "/report.png",
      tags: ["Print", "Digital"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-raddeals-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-bold text-4xl md:text-5xl text-raddeals-black mb-6">
            From Brief to <span className="text-raddeals-yellow">Brilliance</span>
          </h2>
          <p className="font-inter text-xl text-raddeals-text max-w-3xl mx-auto mb-12">
            Discover how our creative solutions have transformed businesses and driven real-world results.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-raddeals-yellow text-raddeals-black"
                    : "bg-white text-raddeals-text hover:bg-raddeals-yellow hover:text-raddeals-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={`${project.image}?w=600&h=400&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-raddeals-black/0 group-hover:bg-raddeals-black/20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-raddeals-yellow/10 text-raddeals-black rounded-full text-sm font-inter font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-dm-sans font-bold text-xl text-raddeals-black mb-3">
                  {project.title}
                </h3>
                
                <p className="font-inter text-raddeals-text mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-raddeals-yellow font-inter font-semibold hover:text-raddeals-black transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
