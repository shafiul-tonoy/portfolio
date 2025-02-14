import Container from "./Container";
import pp from "../assets/WhatsApp Image 2023-12-31 at 13.40.09_27010edb1.jpg";
import { ReactTyped } from "react-typed";
import { Download } from "lucide-react";
import 'animate.css';

export default function Banner() {
  return (
    <div className="py-10 bg-[#28242c]">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white my-5">
              Shafiul Anam
            </h1>
            <h2 className="text-xl md:text-3xl  text-[#FFC400] my-5">
              <ReactTyped
                strings={["Web Developer", "Designer", "Programmer"]}
                typeSpeed={200}
                backSpeed={50}
                loop
              />
            </h2>

            <button className="btn bg-[#FFC400] border-[0px]">
              <Download  size={16} className= 'animate__animated animate__heartBeat animate__infinite	animate__slower' />
              Download Resume
            </button>
          </div>
          <div className="avatar">
            <div className="w-48 rounded-full">
              <img src={pp} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
