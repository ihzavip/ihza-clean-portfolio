import Navbar from "../partials/Navbar";
import HeroMain from "../partials/HeroMain";
import Experience from "../partials/Experience";
// import Project from "../partials/Project";
import ProjectTab from "../partials/ProjectTab";
import Expertise from "../partials/Expertise";
import FaqSection from "../partials/FaqSection";
import Footer from "../partials/Footer";
import Skills from "../partials/Skills";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroMain />
      <Experience />
      {/* <Project/> */}
      <ProjectTab />
      <Skills />
      <Expertise />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;
