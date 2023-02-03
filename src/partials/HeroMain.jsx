import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
// components
import { Button } from "./partial-components/Button";
import {
  UilGithub,
  UilLinkedin,
  UilWhatsapp,
  UilMediumM,
} from "@iconscout/react-unicons";

const HeroMain = () => {
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .from(".hero-animation", {
          // opacity: 0,
          xPercent: -200,
          duration: 1.2,
          stagger: 0.2,
        })
        .from(
          ".image-animation",
          {
            xPercent: 200,
            // opacity: 0,
            duration: 1.2,
            stagger: 0.2,
          },
          "="
        )
        .from(
          ".social-animation",
          {
            xPercent: 200,
            opacity: 0,
            duration: 1.2,
            stagger: 0.5,
          },
          "="
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        id="hero-section"
        className="flex flex-col gap-10 justify-center items-center py-12 px-6 w-full h-full md:flex-row md:justify-between md:items-start md:px-24 md:pt-28"
      >
        {/* left section hero text */}
        <div className="space-y-4 w-full h-full lg:gap-3 lg:space-y-10">
          <div className="space-y-1">
            <p className="text-xs lg:text-sm hero-animation">Hello, I'm</p>
            <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl hero-animation font-saol">
              IHZA HASIBUAN
            </h1>
          </div>

          <p className="text-sm lg:text-lg hero-animation">
            I am a web developer with a background of sales, and I proficient in
            creating beautifully designed and highly functional websites that
            help businesses achieve their goals. Thank you for visiting!
          </p>
          <div className="flex gap-4 justify-start md:mt-3 hero-animation">
            <Button btnName={"RESUME"} />

            <Link to={"/story"}>
              <button
                type="button"
                className="h-10 w-36 px-4 py-2 text-white font-semibold tracking-[3px]
                border-[#626262] border-[1px]  rounded  bg-transparent  hover:border-[#fff8aa] hover:bg-[#fff8aa14]  hover:text-[#fff8aa] uppercase 
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

        {/* right section image */}
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <ul className="flex gap-5 text-white opacity-100 lg:gap-10">
            <li className="social-animation">
              <a href="https://github.com/ihzavip" target="_blank">
                <UilGithub size="40" className="hover:text-[#fff8aa]" />
              </a>
            </li>
            <li className="social-animation">
              <a
                href="https://www.linkedin.com/in/ihza-hasibuan/"
                target="_blank"
              >
                <UilLinkedin size="40" className="hover:text-[#fff8aa]" />
              </a>
            </li>
            <li className="social-animation">
              <a href="https://wa.me/6282272881896" target="_blank">
                <UilWhatsapp size="40" className="hover:text-[#fff8aa]" />
              </a>
            </li>
            <li className="social-animation">
              <a
                href="https://www.frontendmentor.io/profile/ihzavip"
                target="_blank"
              >
                <UilMediumM size="40" className="hover:text-[#fff8aa]" />
              </a>
            </li>
          </ul>
          <img
            src="./images/illustation/9232-6457-cropped.svg"
            className="object-cover h-64 rounded-full lg:h-72 image-animation bg-emerald-100/40"
            alt=""
          />
        </div>
      </div>

      {/* divider fix it later */}
      {/* <div className="w-[30%]  h-[2px] text-center bg-[#242323] text-[#161616]"></div> */}
    </>
  );
};

export default HeroMain;
