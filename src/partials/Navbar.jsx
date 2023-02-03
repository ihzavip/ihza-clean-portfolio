import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { HashLink } from "react-router-hash-link";

import {
  UilLinkedin,
  UilGithub,
  UilWhatsapp,
  UilMediumM,
} from "@iconscout/react-unicons";
const Navbar = () => {
  // store the timeline in a ref.
  const tl = useRef();
  const [reversed, setReversed] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && reversed) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleKeydown = (e) => {
    if (!reversed && e.key === "Escape") setReversed(!reversed);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .set("body", {
          overflow: "hidden",
        })
        .to(".fullpage-menu", {
          duration: 1.2,
          x: 0,
          ease: "easeInOut",
        })
        .from(
          ".main-menu li ",
          {
            opacity: 0,
            stagger: 0.3,
            ease: "Expo.easeOut",
          },
          ">"
        )
        .from(
          ".social-media-animation",
          {
            duration: 1.2,
            opacity: 0,
            yPercent: 200,
            stagger: 0.5,
            ease: "Expo.easeOut",
          },
          "<="
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // tl.current.reversed(reversed);
    if (reversed) {
      tl.current.timeScale(10).reversed(reversed);
    } else {
      tl.current.timeScale(1).reversed(reversed);
    }
  }, [reversed]);

  return (
    <header
      className={`sticky left-0 w-full z-30 bg-opacity-80 backdrop-blur-3xl transition-all duration-1000 
   ${visible ? " top-0" : "-top-32"} 
        `}
    >
      {/* for desktop */}
      <nav className="hidden justify-between items-center py-4 px-16 text-xs lg:flex lg:text-sm border-b-[1px]">
        <ul className="flex gap-10 font-semibold text-white uppercase tracking-[6px]">
          <li className="cursor-pointer">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#experience-section"
            >
              Experience
            </HashLink>
          </li>
          <li className="cursor-pointer">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#project-section"
            >
              project
            </HashLink>
          </li>

          <li className="cursor-pointer">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#skill"
            >
              skills
            </HashLink>
          </li>

          <li className="cursor-pointer">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#expertise-section"
            >
              expertise
            </HashLink>
          </li>

          <li className="cursor-pointer">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#faq-section"
            >
              faq
            </HashLink>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="animateButton px-4 py-2 tracking-[3px] bg-transparent font-semibold border-[#626262] border-[1px] rounded-[8rem] hover:border-[#fff8aa] hover:bg-[#fff8aa14] hover:text-[#fff8aa] "
          >
            HIRE ME
          </button>
        </div>
      </nav>

      {/* for mobile */}
      <nav className="flex justify-between items-center py-4 px-8 lg:hidden border-b-white border-b-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          onClick={() => {
            setReversed(!reversed);
          }}
          className="z-20 w-8 h-8 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d={
              reversed
                ? "M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                : "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
            }
            clipRule="evenodd"
          />
        </svg>

        <button
          type="button"
          className="border-[#626262] border-[1px] rounded-[8rem] px-4 py-2 tracking-[3px] bg-transparent font-semibold text-xs hover:border-[#fff8aa] hover:bg-[#fff8aa14] hover:text-[#fff8aa]"
        >
          <a href="mailto:hasibuanihza@gmail.com">HIRE ME</a>
        </button>
      </nav>

      {/* the parent ofc */}
      <section
        onKeyDown={(e) => {
          console.log("user press", e.key);
        }}
        className="fullpage-menu overflow-y-scroll bg-gradient absolute block -translate-x-[800%] inset-0 w-screen h-screen z-10 "
      >
        <div className="flex relative items-start pt-24 h-full text-center">
          <nav className="z-10">
            <ul className="px-10 space-y-2 w-screen text-4xl text-left uppercase sm:text-7xl main-menu font-saol text-white/90">
              <li>
                <HashLink
                  className="link link-underline link-underline-black"
                  smooth
                  to="/#experience-section"
                  onClick={() => {
                    setReversed(!reversed);
                  }}
                >
                  Experience
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="uppercase link link-underline link-underline-black"
                  smooth
                  to="/#project-section"
                  onClick={() => {
                    setReversed(!reversed);
                  }}
                >
                  Project
                </HashLink>
              </li>

              <li className="cursor-pointer">
                <HashLink
                  className="uppercase link link-underline link-underline-black"
                  smooth
                  to="/#skill"
                  onClick={() => {
                    setReversed(!reversed);
                  }}
                >
                  skills
                </HashLink>
              </li>

              <li>
                <HashLink
                  className="uppercase link link-underline link-underline-black"
                  smooth
                  to="/#expertise-section"
                  onClick={() => {
                    setReversed(!reversed);
                  }}
                >
                  expertise
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="uppercase link link-underline link-underline-black"
                  smooth
                  to="/#faq-section"
                  onClick={() => {
                    setReversed(!reversed);
                  }}
                >
                  faq
                </HashLink>
              </li>
            </ul>

            <div className="flex absolute bottom-24 left-1/2 gap-8 justify-center py-6 opacity-100 -translate-x-1/2 sm:static sm:left-0 sm:text-center sm:translate-x-0 md:bottom-7">
              <a href="https://github.com/ihzavip" target="_blank">
                <UilGithub size="40" className="social-media-animation" />
              </a>
              <a
                href="https://www.linkedin.com/in/ihza-hasibuan/"
                target="_blank"
              >
                <UilLinkedin size="40" className="social-media-animation" />
              </a>
              <a href="https://wa.me/6282272881896" target="_blank">
                <UilWhatsapp size="40" className="social-media-animation" />
              </a>
              <a
                href="https://www.frontendmentor.io/profile/ihzavip"
                target="_blank"
              >
                <UilMediumM size="40" className="social-media-animation" />
              </a>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
