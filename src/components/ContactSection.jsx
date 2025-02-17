import { Mail, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    email: "tonoy.tech@gmail.com",
    phone: "+8801715815577",
    whatsapp: "+8801521204372",
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-[#28242c] text-gray-100 pb-8 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div 
            className="relative group"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              opacity: 0,
            }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
                <button
                  onClick={() => handleCopy(contactInfo.email)}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-300 text-sm"
                >
                  Copy Email
                </button>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div 
            className="relative group"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0,
            }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-300 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
                <button
                  onClick={() => handleCopy(contactInfo.phone)}
                  className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors duration-300 text-sm"
                >
                  Copy Number
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div 
            className="relative group"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.4s',
              opacity: 0,
            }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">WhatsApp</h3>
                <p className="text-gray-300">{contactInfo.whatsapp}</p>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors duration-300 text-sm"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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

export default ContactSection;