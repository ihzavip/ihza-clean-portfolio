import Navbar from "../partials/Navbar";
import HeroMain from "../partials/HeroMain";
import Experience from "../partials/Experience";
import ProjectTab from "../partials/ProjectTab";
import Expertise from "../partials/Expertise";
import FaqSection from "../partials/FaqSection";
import Footer from "../partials/Footer";
import Skills from "../partials/Skills";
const Home = () => {
  return (
    <>
      <main className="mx-auto">
        <Navbar />
        <HeroMain />
        <Experience />
        <ProjectTab />
        <Skills />
        <Expertise />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
