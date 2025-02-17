import {
  User,
  GraduationCap,
  Code2,
  Mail,
  Download,
  Lightbulb,
} from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { icon: User, text: "About Me", href: "#about" },
    { icon: Lightbulb, text: "Skills", href: "#skills" },
    { icon: GraduationCap, text: "Education", href: "#education" },
    { icon: Code2, text: "Projects", href: "#projects" },
    { icon: Mail, text: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50">
      <div className="mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shafiul Anam
            </h1>
          </div>

          {/* Middle Navigation Icons */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="flex items-center group hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="ml-2 overflow-hidden w-0 group-hover:w-24 whitespace-nowrap transition-all duration-300 text-gray-300">
                  {text}
                </span>
              </a>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center">
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-4 py-2 bg-[#FFC400]   rounded-lg font-semibold transition-colors duration-300"
            >
              <Download className="w-5 h-5 mr-2 animate__animated animate__heartBeat animate__infinite	animate__slower" />
              <span className="hidden sm:inline">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center space-x-6 py-4 bg-[#1f1b22]">
        {navLinks.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            className="flex items-center p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
          >
            <Icon className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
          </a>
        ))}
      </div>
    </nav>
  );
}

