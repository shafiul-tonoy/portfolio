import { Code2, Database, Server, Zap, Cpu, Layout, Cloud, Terminal, GitBranch, Paintbrush, Smartphone, Globe } from 'lucide-react';
import 'animate.css';

const Skills = () => {
  const categories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML", icon: <Layout className="w-10 h-10" style={{ color: "#E44D26" }} /> },
        { name: "CSS", icon: <Layout className="w-10 h-10" style={{ color: "#264DE4" }} /> },
        { name: "JavaScript", icon: <Zap className="w-10 h-10" style={{ color: "#F7DF1E" }} /> },
        { name: "React", icon: <Cpu className="w-10 h-10" style={{ color: "#61DAFB" }} /> },
        { name: "Tailwind CSS", icon: <Cloud className="w-10 h-10" style={{ color: "#38B2AC" }} /> },
      ],
      animation: "animate__fadeInLeft"
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", icon: <Server className="w-10 h-10" style={{ color: "#339933" }} /> },
        { name: "Express", icon: <Terminal className="w-10 h-10" style={{ color: "#000000" }} /> },
        { name: "MongoDB", icon: <Database className="w-10 h-10" style={{ color: "#47A248" }} /> },
      ],
      animation: "animate__fadeInUp"
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", icon: <GitBranch className="w-10 h-10" style={{ color: "#F05032" }} /> },
        { name: "UI/UX Design", icon: <Paintbrush className="w-10 h-10" style={{ color: "#FF6F61" }} /> },        
        { name: "Web Hosting", icon: <Globe className="w-10 h-10" style={{ color: "#00BFFF" }} /> },
      ],
      animation: "animate__fadeInRight"
    }
  ];

  return (
    <div className="bg-[#28242c] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-12 text-center animate__animated animate__fadeInDown text-white">
          Skills
        </h2>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className={`animate__animated ${category.animation}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-2 rounded-lg bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white text-center">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;