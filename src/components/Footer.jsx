import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },

  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" }
  ];

  return (
    <footer className="bg-[#1f1b22] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shafiul Anam
            </h3>
            <p className="text-gray-400 max-w-md">
              Frontend Developer passionate about creating innovative web solutions and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shafiul Anam. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>

      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </footer>
  );
};

export default Footer;