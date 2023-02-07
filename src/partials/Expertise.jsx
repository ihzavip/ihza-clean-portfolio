import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "../partials/partial-components/Button";
import { expertiseData } from "../utils/utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode } from "swiper";

export default function Expertise() {
  return (
    <>
      <section
        id="expertise-section"
        className="flex flex-col items-start pt-12 max-w-screen-2xl sm:pt-24 md:flex-row md:justify-start md:items-center"
      >
        <div className="sm:mr-12">
          <div className="px-6 sm:w-96 lg:pr-0 lg:pl-24">
            <h2 className="text-4xl text-white md:text-5xl font-saol">
              Expertise
            </h2>
            <p className="mt-2 mb-6">
              I am dedicated to finding the most advanced digital solutions for
              brands that want to be progressive and make a meaningful impact.
            </p>
            <HashLink to={"/expertisepage/#top"}>
              <Button>
                <div className="flex justify-center">
                  <p>more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Button>
            </HashLink>
          </div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          freeMode={true}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
          speed={1200}
          loop={true}
          // centeredSlides={true}
          modules={[FreeMode]}
          className="py-8 pl-0 w-full h-full lg:py-0 mySwiper"
        >
          {expertiseData.map((data, index) => {
            return (
              <SwiperSlide className="w-60 h-full" key={index}>
                <div className="w-60 h-72">
                  <img
                    className="object-cover object-center w-full h-full grayscale"
                    src={data.source}
                    alt={data.title}
                  />
                </div>

                <a href={data.content.link} className="block mt-4">
                  <h3 className="text-sm text-white uppercase">
                    {data.content.title} <sup>{`0${data.content.key}`}</sup>
                  </h3>
                  <h2 className="py-2 text-xs text-white/80">
                    {data.content.desc}
                  </h2>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
