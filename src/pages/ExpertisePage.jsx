import React from "react";
import { HashLink } from "react-router-hash-link";
// import ScrollToTopButton from "../partials/partial-components/ScrollToTopButton";
const ExpertisePage = () => {
  return (
    <>
      <section id="top" className="relative px-6 md:px-52">
        <HashLink to={"/#expertise-section"}>
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
        </HashLink>
        <div className="pt-32 max-w">
          <h2 className="text-3xl text-white uppercase font-saol">
            skillset & tools
          </h2>

          <ol className="my-6 text-lg">
            <HashLink to="/ExpertisePage/#digital-strategy" smooth>
              <li>1. Digital Strategy</li>
            </HashLink>
            <HashLink to="/ExpertisePage/#branding" smooth>
              <li>2. Branding</li>
            </HashLink>
            <HashLink to="/ExpertisePage/#web-development" smooth>
              <li>3. Web Development</li>
            </HashLink>
            <HashLink to="/ExpertisePage/#user-interface" smooth>
              <li>4. User Interface</li>
            </HashLink>
            <HashLink to="/ExpertisePage/#user-interface" smooth>
              <li>5. Digital Marketing</li>
            </HashLink>
            <HashLink to="/ExpertisePage/#sales" smooth>
              <li>6. Sales</li>
            </HashLink>
            <HashLink to="/ExpertisePage/#tools" smooth>
              <li>7. Tools</li>
            </HashLink>
          </ol>

          <div id="digital-strategy" className="my-14">
            <h2 className="mb-7">1. Digital Strategy</h2>
            <p>
              Digital strategy is the process of creating and implementing plans
              to achieve specific business objectives through the use of digital
              channels. This includes analyzing data and identifying trends to
              inform decisions, setting goals and developing tactics to reach
              them, and continuously measuring and adjusting efforts to optimize
              results. My expertise in this area includes conducting market
              research, creating and implementing SEO and SEM campaigns, and
              utilizing analytics to track and improve performance. I also have
              experience in creating and managing merchant campaigns, and
              developing and implementing content strategy. I am confident in my
              ability to develop and execute effective digital strategies that
              drive business growth and success.
            </p>
          </div>

          <div className="h-[1px] opacity-50 bg-[#adadad]"></div>

          <div id="branding" className="my-14">
            <h2 className="mb-7">2. Branding</h2>
            <p>
              I have a strong understanding of branding, the process of creating
              and maintaining a unique identity for a company, product, or
              service. My knowledge includes creating a consistent brand image,
              conducting research, developing guidelines and creating campaigns.
              I am confident in my ability to develop and execute effective
              branding strategies that help a business stand out and connect
              with its audience.
            </p>
          </div>

          <div className="h-[1px] opacity-50 bg-[#adadad]"></div>

          <div id="web-development" className="my-14">
            <h2 className="mb-7">3. Web Development</h2>
            <p>
              I am a proficient web developer with a strong understanding of the
              latest technologies and trends. I have experience in creating
              responsive and user-friendly websites using HTML, CSS, JavaScript
              and other web development frameworks. I am comfortable working
              with different CMS and have a good understanding of how to make a
              website SEO friendly. I am also familiar with Agile development
              methodologies and have experience working in a team environment. I
              am always eager to learn new technologies and implement them in my
              projects to deliver the best results for my clients.
            </p>
          </div>

          <div className="h-[1px] opacity-50 bg-[#adadad]"></div>

          <div id="user-interface" className="my-14">
            <h2 className="mb-7">4. User Interface</h2>
            <p>
              I have a solid understanding of user interface design principles
              and experience in building visually appealing and user-friendly
              interfaces. I am familiar with the latest design trends and tools
              and can work with different development frameworks to build
              responsive and interactive interfaces. I am also able to conduct
              user research, gather feedback, and iterate on designs to ensure
              that the final product meets user needs and expectations. I am
              always eager to learn and improve my skills to deliver the best
              experience for my clients.
            </p>
          </div>

          <div className="h-[1px] opacity-50 bg-[#adadad]"></div>
          <div id="digital-marketing" className="my-14">
            <h2 className="mb-7">5. Digital Marketing</h2>
            <p>
              With three years of experience in sales, I have developed a strong
              understanding of the principles of marketing and how to
              effectively communicate with customers. I am well-versed in
              various digital marketing channels, including social media, email
              marketing, and search engine optimization, and I am able to use
              data and analytics to measure the success of my campaigns. My
              ability to think creatively and strategically allows me to
              identify and target the right audience, and my strong
              communication skills help me to build lasting relationships with
              clients. Overall, I am confident in my ability to drive results
              and growth for any business through effective digital marketing
              efforts.
            </p>
          </div>

          <div className="h-[1px] opacity-50 bg-[#adadad]"></div>
          <div id="sales" className="my-14">
            <h2 className="mb-7">6. Sales</h2>
            <p>
              With over three years of experience in sales, I have a proven
              track record of successfully identifying and capitalizing on
              business opportunities. My ability to effectively communicate the
              value of products and services to potential clients has resulted
              in a high rate of closed deals. Additionally, I have experience in
              web development and have a strong understanding of the technical
              aspects of creating and maintaining a website. This knowledge
              allows me to not only sell to potential clients, but also consult
              on how to improve their online presence. Overall, my combination
              of sales and web development skills make me a valuable asset to
              any organization looking to drive revenue and improve their online
              presence.
            </p>
          </div>

          <div className="h-[1px] opacity-50 bg-[#adadad]"></div>
          <div id="tools" className="pb-14 my-14">
            <h2 className="mb-7">7. Tools that i used</h2>

            <h3>Development </h3>
            <ul>
              <li>1. React</li>
              <li>2. TailwindCSS</li>
              <li>3. VIM</li>
              <li>4. Figma</li>
              <li>5. GSAP</li>
              <li>6. ChatGPT</li>
              <li>7. Linux Work Environment</li>
              <li>8. Coffee:)</li>
            </ul>
          </div>
        </div>
        {/* <ScrollToTopButton /> */}
      </section>
    </>
  );
};

export default ExpertisePage;
