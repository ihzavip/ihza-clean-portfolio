import React from "react";
import { Link } from "react-router-dom";
const Story = () => {
  return (
    <section className="relative px-12 lg:px-52">
      <Link to={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="absolute top-6 left-6 w-10 h-10 md:left-16"
        >
          <path
            fillRule="evenodd"
            d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div className="pt-32">
        <h2 className="text-3xl text-white saol">ABOUT ME</h2>
        <div className="py-6 text-lg break-word">
          <p className="mt-6">
            Hey there, my name is Muhammad Ihza Mahendra and I'm a web developer
            with a background of sales. I love creating websites that are not
            only functional and easy to use, but also visually pleasing and a
            pleasure to interact with.
          </p>
          <p className="mt-6">
            I've been working with web technologies such as HTML, CSS,
            JavaScript and React for quite some time now and I'm always excited
            to dive into a new project and make it come to life.
          </p>
          <p className="mt-6">
            I am excited to bring my unique combination of technical and sales
            expertise to a new opportunity in web development and to be part of
            a dynamic and innovative team.
          </p>

          <p className="mt-6"></p>
        </div>
      </div>
    </section>
  );
};

export default Story;
