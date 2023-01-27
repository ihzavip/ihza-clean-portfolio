import React from "react";
import {
  UilGithub,
  UilLinkedin,
  UilWhatsapp,
  UilMediumM,
} from "@iconscout/react-unicons";

const Footer = () => {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <section
      id="footer-section"
      className="px-6 pt-12 sm:px-24 sm:pt-12 max-h-screen sm:mx-auto"
    >
      <div className="mx-auto flex flex-col  gap-4">
        <h3 className="text-6xl sm:text-8xl saol text-white">Let's Talk. </h3>
        <div>
          <p>current time in my country, </p>
          <span className="saol text-xl text-white">{time}</span>
        </div>
        <div className="w-full h-[1px] opacity-50 bg-[#adadad]"></div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col gap-6 md:justify-between">
          <div>
            <h3 className="text-xs md:text-xl uppercase">location</h3>
            <h3 className="mt-2 text-lg text-white">
              Based In Medan, Indonesia.
            </h3>
          </div>
          <div className="">
            <h3 className="uppercase text-xs md:text-xl ">contact</h3>
            <p className="text-white text-lg mt-2 uppercase">
              hasibuanihza@gmail.com
            </p>
            <p className="text-white text-lg mt-2">+62 82272881896</p>
          </div>
          <div>
            <h3 className="text-xs md:text-xl">SOCIALS</h3>
            <ul className="flex justify-center md:justify-start py-8  gap-10">
              <li>
                <a href="https://github.com/ihzavip" target="_blank">
                  <UilGithub
                    size="40"
                    className="text-white hover:text-[#fff8aa]"
                  />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/ihza-hasibuan/"
                  target="_blank"
                >
                  <UilLinkedin
                    size="40"
                    className="hover:text-[#fff8aa] text-white"
                  />
                </a>
              </li>
              <li className="">
                <a href="https://wa.me/6282272881896" target="_blank">
                  <UilWhatsapp
                    size="40"
                    className="hover:text-[#fff8aa] text-white"
                  />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.frontendmentor.io/profile/ihzavip"
                  target="_blank"
                >
                  <UilMediumM
                    size="40"
                    className="hover:text-[#fff8aa] text-white"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] opacity-50 bg-[#adadad]"></div>

        <div className="flex justify-between items-center">
          <div className="my-4 flex gap-5 flex-col justify-between-center">
            <h3 className="text-xs uppercase">version</h3>
            <p className="text-lg text-white">2023 Edition</p>
          </div>
          <div className="my-4 gap-5 flex flex-col justify-between-center">
            <h3 className="text-xs uppercase">local time</h3>
            <p className="text-lg text-white">{time}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
