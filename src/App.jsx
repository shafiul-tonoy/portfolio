import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
import ContactSection from "./components/ContactSection";
import Education from "./components/Education";
import Footer from "./components/Footer";
// import Container from "./components/Container";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Aboutme />
      <Skills />
      <Education />
      <ProjectShowcase />
      <ContactSection />
      <Footer /> 
    </>
  );
}

export default App;
