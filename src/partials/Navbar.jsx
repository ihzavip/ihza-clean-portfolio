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

  // scroll navbar
  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;

  //   if (currentScrollPos > prevScrollPos) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }

  //   setPrevScrollPos(currentScrollPos);
  // };

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
      <nav className="hidden md:flex justify-between items-center border-b-[1px] px-16 py-4 ">
        <ul className="flex gap-10 font-semibold uppercase tracking-[6px] text-white">
          <li className="cursor-pointer ">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#experience-section"
            >
              Experience
            </HashLink>
          </li>
          <li className="cursor-pointer ">
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

          <li className="cursor-pointer ">
            <HashLink
              className="link link-underline link-underline-black"
              smooth
              to="/#expertise-section"
            >
              expertise
            </HashLink>
          </li>

          <li className="cursor-pointer ">
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
            className="animateButton border-[#626262] border-[1px] rounded-[8rem] px-4 py-2 text-xs tracking-[3px] bg-transparent font-semibold hover:border-[#fff8aa] hover:bg-[#fff8aa14] hover:text-[#fff8aa] "
          >
            HIRE ME
          </button>{" "}
        </div>
      </nav>

      {/* for mobile */}
      <nav className="border-b-white border-b-[1px] flex justify-between items-center px-8 py-4 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          onClick={() => {
            setReversed(!reversed);
          }}
          className="w-8 h-8 cursor-pointer z-20"
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
          className="border-[#626262] border-[1px] rounded-[8rem] px-4 py-2 text-xs tracking-[3px] bg-transparent font-semibold hover:border-[#fff8aa] hover:bg-[#fff8aa14] hover:text-[#fff8aa]"
        >
          <a href="mailto:hasibuanihza@gmail.com">HIRE ME</a>
        </button>
      </nav>

      {/* the parent ofc */}
      <section className="fullpage-menu bg-gradient absolute block -translate-x-[800%] inset-0 w-screen h-screen z-10 ">
        <div className="flex items-start text-center h-full pt-24">
          <nav className="relative z-10">
            <ul className="main-menu saol uppercase text-white/90 text-3xl w-screen flex flex-col gap-8">
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
                  className="link link-underline link-underline-black uppercase"
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
                  className="link link-underline link-underline-black uppercase"
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
                  className="link link-underline link-underline-black uppercase"
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
                  className="link link-underline link-underline-black uppercase"
                  smooth
                  to="/#faq-section"
                  onClick={() => {
                    setReversed(!reversed);
                  }}
                >
                  faq
                </HashLink>
              </li>
              <li></li>
            </ul>

            <div className=" mt-28 opacity-100 flex gap-8 justify-center">
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
