import "animate.css";
import aboutAnimation from "../assets/about.json";
import Lottie from "lottie-react";

export default function Aboutme() {
  return (
    <div className="bg-[#28242c] py-20" id="about">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white mb-12 text-center animate__animated animate__fadeInDown">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="animate__animated animate__fadeInLeft">
            <div className="relative group">
              <Lottie animationData={aboutAnimation} height={800} />
              <div className="absolute inset-0 opacity-20 transition-opacity duration-500 rounded-lg group-hover:opacity-0"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 animate__animated animate__fadeInRight border-l-2 pl-5 border-[#FFC400]">
            <p className="text-gray-300 leading-relaxed">
              As an Electrical and Electronic Engineering graduate turned web
              developer, I discovered my true calling in the world of coding.
              From my base in vibrant Dhaka, I craft interactive web
              applications that bridge technology with human experience. 
            </p>

            <p className="text-gray-300 leading-relaxed">
              My engineering background gives me a unique perspective on
              problem-solving, while my passion for web development drives me to
              create seamless digital experiences. When I'm not immersed in
              code, you'll find me lost in the pages of nonfiction books,
              engaged in strategic board game battles, or exploring the
              captivating world of cinema.
            </p>

            <p className="text-gray-300 leading-relaxed">
              What truly energizes me is escaping to Bangladesh's rural
              landscapes and serene rivers. These adventures not only refresh my
              creativity but also keep me connected to the natural beauty that
              surrounds our bustling city. This balance between technology and
              nature shapes both my work and worldview.
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
}
