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
        className="relative px-6 pt-12 h-full md:pt-24 lg:px-24"
      >
        <h2 className="mb-10 text-4xl text-center text-white font-saol">
          Skills
        </h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-3/4 max-w-2xl h-full text-white/80 skill-swiper"
        >
          <SwiperSlide className="skills flex flex-col py-6 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl">Basic Stack</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>Scripting</li>
              <li>Bash</li>
              <li>GIT</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="skills flex flex-col py-6 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl">Framework & Lib</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>Angular</li>
              <li>React</li>
              <li>Node</li>
              <li>jQuery</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>GSAP</li>
              <li>Material UI</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="skills flex flex-col py-6 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl">Database</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
            <h4 className="mt-6 text-xl">CMS</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>Sanity</li>
              <li>Kirby</li>
              <li>Wordpress</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="skills flex flex-col py-6 px-8 items-center bg-[#0c0c0c] rounded border border-white/50">
            <h4 className="text-xl">Expossed</h4>
            <ul className="flex flex-col items-center mt-5">
              <li>Vue</li>
              <li>ASP.NET</li>
              <li>GoLang</li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
