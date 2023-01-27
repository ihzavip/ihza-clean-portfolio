import React from "react";
// import "../css/additional-styles/project.css";

const datas = [
  {
    key: 1,
    title: "something",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    link: "to where",
  },
  {
    key: 2,
    title: "something",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    key: 3,
    title: "something",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    key: 4,
    title: "something",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
];

const Project = () => {
  return (
    <section id="project-section" className="pt-12 px-6 sm:px-24 sm:py-24 ">
      <span>under maintenance</span>
      <h3 className="text-white text-5xl saol pt-[10px] pb-[20px]">Projects</h3>

      <div className="parent [&>*]:h-36 sm:[&>*]:h-52 grid gap-0 grid-cols-1 md:grid-cols-2 place-items-center ">
        {datas.map((data) => (
          <div key={data.key} className="text-white border overflow-hidden">
            <div className="md:p-10">
              <a href={data.link} target="_blank" className="text-2xl">
                {data.title}
              </a>
              <p className="mt-6">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
