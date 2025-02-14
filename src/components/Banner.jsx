import { Download, Github, Linkedin, Facebook } from "lucide-react";
import { ReactTyped } from "react-typed";
import "animate.css";
import pp from "../assets/WhatsApp Image 2023-12-31 at 13.40.09_27010edb1.jpg";

const Banner = () => {
  const links = [
    {
      icon: Github,
      url: "https://github.com/yourusername",
      label: "GitHub Profile",
      color: "#c9d1d9",
      hoverColor: "#58a6ff"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn Profile",
      color: "#70b5f9",
      hoverColor: "#00a0dc"
    },
    {
      icon: Facebook,
      url: "https://facebook.com/yourusername",
      label: "Facebook Profile",
      color: "#4267B2",
      hoverColor: "#1877f2"
    }
  ];

  return (
    <div className="py-16 bg-[#28242c]">
      <div className="md:w-5/6 lg:w-2/3  m-auto pt-10 px-4">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
          <div className="w-full sm:w-2/3 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate__animated animate__fadeInUp">
              Shafiul Anam
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#FFC400] mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              <ReactTyped
                strings={["Web Developer", "Designer", "Programmer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h2>

            <div className="flex gap-6 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  aria-label={link.label}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: link.color }}
                  />
                  <link.icon
                    size={28}
                    className="relative z-10 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      color: link.color,
                      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))'
                    }}
                  />
                </a>
              ))}
            </div>

            <button className="flex items-center px-6 py-3 bg-[#FFC400] rounded-lg font-semibold text-[#28242c] transition-all duration-300 hover:bg-[#ffcd2e] hover:shadow-xl animate__animated animate__fadeInUp animate__delay-3s">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>

          <div className="w-48 sm:w-1/3 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FFC400] shadow-2xl ">
                <img 
                  src={pp} 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 "
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-[#28242c] opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;