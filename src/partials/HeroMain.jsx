import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
// components
import { DownloadButton } from "./partial-components/DownloadButton";
import {
  UilGithub,
  UilLinkedin,
  UilWhatsapp,
  UilMediumM,
} from "@iconscout/react-unicons";

const HeroMain = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animation", {
        opacity: 0,
        // xPercent: -200,
        duration: 1.2,
        stagger: 0.8,
      });
      gsap.from(".image-animation", {
        // xPercent: 200,
        opacity: 0,
        duration: 1.2,
        stagger: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main
        id="hero-section"
        className="pt-12 px-6 md:px-24 md:pt-32 md:pb-24 gap-10 md:gap-28 
        h-full w-full
        flex flex-col justify-center items-center md:flex-row md:items-start md:justify-between"
      >
        <div className="flex flex-col gap-6 max-w-2xl xl:gap-12">
          <div>
            <p className="hero-animation text-lg xl:text-xl">Hello, I'm</p>
            <h1 className="hero-animation saol text-4xl text-white md:text-5xl xl:text-6xl ">
              IHZA HASIBUAN
            </h1>
          </div>

          <p className="hero-animation text-base md:text-base lg: xl:text-3xl ">
            I am a web developer with a background in sales, and I proficient in
            creating beautifully designed and highly functional websites that
            help businesses achieve their goals. Thank you for visiting!
          </p>
          <div className="flex justify-center md:justify-start gap-4 md:mt-3 hero-animation">
            <DownloadButton btnName={"RESUME"} />

            <Link to={"/story"}>
              <button
                type="button"
                className="h-10 w-36 px-4 py-2 text-white font-semibold tracking-[3px]
                border-[#626262] border-[1px]  rounded  bg-transparent  hover:border-[#fff8aa] hover:bg-[#fff8aa14]  hover:text-[#fff8aa] uppercase xl:h-16 xl:w-52 xl:text-2xl
"
              >
                <div className="flex justify-center">
                  <p>story</p>
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
              </button>
            </Link>
          </div>
        </div>

        <div className="image-animation w-full pt-8 md:w-1/2 h-56 md:h-full">
          <img
            className="h-full w-full object-cover grayscale-[100%] rounded"
            src="./images/pp.jpg"
            alt=""
          />
          <ul className="image-animation mt-6 hidden text-white md:flex md:justify-center md:gap-10">
            <li>
              <a href="https://github.com/ihzavip" target="_blank">
                <UilGithub size="30" className="hover:text-[#fff8aa]" />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.linkedin.com/in/ihza-hasibuan/"
                target="_blank"
              >
                <UilLinkedin size="30" className="hover:text-[#fff8aa]" />
              </a>
            </li>
            <li className="">
              <a href="https://wa.me/6282272881896" target="_blank">
                <UilWhatsapp size="30" className="hover:text-[#fff8aa]" />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.frontendmentor.io/profile/ihzavip"
                target="_blank"
              >
                <UilMediumM size="30" className="hover:text-[#fff8aa]" />
              </a>
            </li>
          </ul>
        </div>
      </main>

      {/* divider fix it later */}
      {/* <div className="w-[30%]  h-[2px] text-center bg-[#242323] text-[#161616]"></div> */}
    </>
  );
};

export default HeroMain;
