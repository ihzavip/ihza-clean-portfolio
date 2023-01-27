import React from "react";

const faq = [
  {
    key: 1,
    question: "What specific skills are you proficient in?",
    answer:
      "I'm proficient in Front-End Development : HTML, CSS, Javascript and Front-End library especially React.",
  },
  {
    key: 2,
    question:
      "What technology and tools you use for Front-End web development?",
    answer: "Mostly I use React, TailwindCSS and GSAP for large projects",
  },
  {
    key: 3,
    question: "What Content Management System (CMS) that you use?",
    answer: "I use React Wordpress CMS and Sanity.",
  },
  {
    key: 3,
    question: "Will you be available for Full Time Work?",
    answer:
      "Yes, I will accept job offer scaling from Web Developer to Front-end.",
  },
  {
    key: 4,
    question: "Will you be able to work on site?",
    answer: "Yes, I'm willing to travel for new opportunity.",
  },
  {
    key: 5,
    question: "How much is your rate?",
    answer:
      "Every project is unique and my rates are tailored to reflect the scope and complexity of the work.",
  },
];

/*



*/

const FaqSection = () => {
  return (
    <section id="faq-section" className="py-12 px-6 sm:py-24 sm:px-24 ">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start min-h-sceen">
        {/* its the header */}

        {/* its the faq */}
        <div className="grid divide-y divide-neutral-200 mt-8 md:mt-0 ">
          {faq.map((detail, index) => (
            <div className="py-5" key={index}>
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{detail.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className=" mt-3 max-w-2xl text-md group-open:animate-fadeIn text-white ">
                  {detail.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
        <div className="flex flex-col py-5 md:py-0 max-w-xs md:ml-24">
          <h2 className="saol text-5xl text-white">FAQ</h2>
          <p className=" mt-4">
            Here are the most common questions I hear from my clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
