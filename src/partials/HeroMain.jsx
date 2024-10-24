import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
// components
import { Button } from "./partial-components/Button";
import { downloadResume } from "../utils/utils";
import {
  UilGithub,
  UilLinkedin,
  UilWhatsapp,
  UilMediumM,
  UilBookReader
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
    <section className="relative">
      <div
        id="hero-section"
        className="flex flex-col gap-10 justify-center items-center py-12 px-6 w-full h-full md:flex-row md:justify-between md:items-start md:px-12 lg:px-24 md:pt-12 lg:pt-24"
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
            <Button ngeKlik={downloadResume}>
              <div className="flex justify-center">
                <span>RESUME</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                  <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                </svg>
              </div>
            </Button>

            <Link to={"/story"}>
              <Button>
                <div className="flex justify-center">
                  <span>story</span>
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
            <li className="social-animation">
              <a
                href="https://www.goodreads.com/user/show/46352746-ihza-hasibuan"
                target="_blank"
              >
                <UilBookReader size="40" className="hover:text-[#fff8aa]" />
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
    </section>
  );
};

export default HeroMain;
