import {
  User,
  GraduationCap,
  Code2,
  Mail,
  Download,
  Lightbulb,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md">
      <div className=" mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">Shafiul Anam</h1>
          </div>

          {/* Middle Navigation Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center group">
              <User className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="ml-2 overflow-hidden w-0 group-hover:w-24 whitespace-nowrap transition-all duration-300 text-gray-800">
                About Me
              </span>
            </div>

            <div className="flex items-center group">
              <Lightbulb className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="ml-2 overflow-hidden w-0 group-hover:w-12 transition-all duration-300 text-gray-800">
                Skills
              </span>
            </div>

            <div className="flex items-center group">
              <GraduationCap className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="ml-2 overflow-hidden w-0 group-hover:w-20 transition-all duration-300 text-gray-800">
                Education
              </span>
            </div>

            <div className="flex items-center group">
              <Code2 className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="ml-2 overflow-hidden w-0 group-hover:w-16 transition-all duration-300 text-gray-800">
                Projects
              </span>
            </div>

            <div className="flex items-center group">
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="ml-2 overflow-hidden w-0 group-hover:w-16 transition-all duration-300 text-gray-800">
                Contact
              </span>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center">
            <button className="btn flex items-center px-4 py-2 bg-[#FFC400] rounded-lg font-semibold ">
              <Download className="w-5 h-5 mr-2 animate__animated animate__heartBeat animate__infinite	animate__slower" />
              <span className="hidden sm:inline">Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center space-x-6 py-4 bg-gray-50">
        <div className="flex items-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center">
          <Lightbulb className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center">
          <GraduationCap className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center">
          <Code2 className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center">
          <Mail className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}
