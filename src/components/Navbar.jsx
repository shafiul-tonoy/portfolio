import { 
    User, 
    GraduationCap, 
    Code2, 
    Mail, 
    Download,
    Lightbulb
  } from 'lucide-react';

export default function Navbar(){
    return (
        <nav className="fixed top-70 left-0 right-0 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Company Name */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">DevPortfolio</h1>
            </div>
  
            {/* Middle Navigation Icons */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="group relative">
                <User className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">About Me</span>
              </div>
  
              <div className="group relative">
                <Lightbulb className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">Skills</span>
              </div>
  
              <div className="group relative">
                <GraduationCap className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">Education</span>
              </div>
  
              <div className="group relative">
                <Code2 className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">Projects</span>
              </div>
  
              <div className="group relative">
                <Mail className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">Contact</span>
              </div>
            </div>
  
            {/* Download Resume Button */}
            <div className="flex items-center">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Download Resume</span>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div className="md:hidden flex justify-center space-x-6 py-4 bg-gray-50">
          <User className="w-6 h-6 text-gray-600" />
          <Lightbulb className="w-6 h-6 text-gray-600" />
          <GraduationCap className="w-6 h-6 text-gray-600" />
          <Code2 className="w-6 h-6 text-gray-600" />
          <Mail className="w-6 h-6 text-gray-600" />
        </div>
      </nav>
    );
}