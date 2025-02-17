import  { useState } from 'react';
import { ArrowRight, X, Globe, Github } from 'lucide-react';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Earnify - Micro Tasking and Earning Platform",
      image: "https://i.ibb.co.com/N6MfhtyP/earnyfy.png",
      description: "Earnify is a Micro Tasking and Earning Platform designed to provide users with opportunities to complete small tasks and earn money.",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "Stripe", "Express.js"],
      role: "Developer",
      status: "Completed",
      liveLink: "https://shafiul-a12.web.app/",
      githubLink: "https://github.com/shafiul-tonoy/earnify"
    },
    {
      id: 2,
      name: "Legal Ease - Connect users with trusted legal professionals",
      image: "https://i.ibb.co.com/spPW62hx/legal-ease.png",
      description: "This platform allows users to easily book legal services and provides a space for lawyers to offer their expertise.",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "Node.js", "Express.js"],
      role: "Developer",
      status: "Completed",
      liveLink: "https://shafiul-a11.web.app/",
      githubLink: "https://github.com/shafiul-tonoy/LegalEase"
    },
    {
      id: 3,
      name: "Cine Craft - Movie Portal for movie enthusiasts",
      image: "https://i.ibb.co.com/GvhskVHK/cine-craft.png",
      description: "Designed for movie enthusiasts to browse, create, update, and manage their favorite movies.",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "Express.js"],
      role: "Developer",
      status: "Completed",
      liveLink: "https://shafiul-a10.web.app/",
      githubLink: "https://github.com/shafiul-tonoy/Cine-Craft"
    }
  ];

  return (
    <div className=" bg-[#28242c] text-gray-100 py-16 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              style={{
                animation: `fadeIn 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View Project</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2 text-gray-200">Role:</span>
                    <span className="text-gray-300">{project.role}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2 text-gray-200">Status:</span>
                    <span className="text-gray-300">{project.status}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-blue-900/50 text-blue-200 rounded border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300 group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover object-top rounded-lg mb-6"
            />

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-blue-900/50 text-blue-200 rounded border border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;