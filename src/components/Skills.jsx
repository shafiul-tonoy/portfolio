import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { title: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { title: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { title: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-6xl" /> },
  { title: "React", icon: <FaReact className="text-blue-400 text-6xl animate-spin-slow" /> },
];

const SkillCard = ({ icon, title }) => {
  return (
    <div className="group relative p-6 bg-gray-800 rounded-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className=" bg-gray-900 py-16 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise spans across modern web technologies, focusing on
            creating responsive and interactive user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.title} icon={skill.icon} title={skill.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
