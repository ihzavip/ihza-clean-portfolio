// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <section
        id="skill"
        className="relative h-full pt-12 px-6 sm:px-24 sm:py-24 "
      >
        <h2 className="saol text-white text-center text-4xl mb-10">Skills</h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="skill-swiper  text-white w-[60vw] h-[50vh]"
        >
          <SwiperSlide className="skills flex flex-col py-6 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl ">Basic Stack</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>API</li>
              <li>Bash Terminal</li>
              <li>GIT</li>
              <li>Linux</li>
              <li>VIM</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="skills flex flex-col py-6 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl ">Framework & Lib</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>React</li>
              <li>Next</li>
              <li>Node JS</li>
              <li>Express</li>
              <li>jQuery</li>
              <li>GSAP</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="skills flex flex-col py-6 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl ">Database</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
            <h4 className="text-xl mt-6">CMS</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>Sanity</li>
              <li>Kirby</li>
              <li>Wordpress</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="skills flex flex-col py-6 px-8 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl ">Expossed</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>Angular</li>
              <li>Vue</li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
