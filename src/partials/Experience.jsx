import React from "react";
import "../css/additional-styles/experience.css";

// .timeline-header__subtitle {
//   color: rgba(255, 255, 255, 0.5);
//   font-size: 1.5rem;
//   letter-spacing: 5px;
//   padding: 10px 0 20px 0;
//   font-weight: normal;
// }
// // .timeline-header {
//   width: 100%;
//   text-align: center;
//   margin-bottom: 80px;
//   position: relative;
// }

const Experience = () => {
  return (
    <section
      id="experience-section"
      className="flex flex-col items-center pt-12 lg:px-24"
    >
      <div className="timeline-container" id="timeline-1">
        <div className="relative mb-28 w-full text-center">
          <h3 className="px-6 text-4xl text-white lg:text-5xl font-saol">
            Experiences
          </h3>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-text="Merchandiser">
            <div className="timeline__content">
              {/* <h2 className="py-3 text-white opacity-80 sm:text-xl"> */}
              {/*   PT. Bentoel Group */}
              {/* </h2> */}
              <a href="https://www.bentoelgroup.com/id/index.html" target="_blank">
                <img
                  className="timeline__img"
                  src="https://www.bentoelgroup.com/id/imgs/logo_BAT_A5EEYP.png"
                  alt="PT. Bentoel Group"
                />
              </a>
              <h2 className="timeline__content-title">
                January 2016 - June 2016
              </h2>
              <p className="timeline__content-desc">
                Plan and develop merchandising strategies that balance customers
                expectations and company’s objectives.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="Acquisition Executive">
            <div className="timeline__content">
              {/* <h2 className="py-3 text-white opacity-80 sm:text-xl"> */}
              {/*   PT. Gojek Indonesia */}
              {/* </h2> */}
              <a href="https://www.gojek.com/en-id/?" target="_blank">
                <img
                  className="timeline__img"
                  src="https://noir.web.id/wp-content/uploads/2022/08/gofood-white-logo.png.webp"
                  // src="./images/gofood-seeklogo.com.svg"
                  alt="Gofood powered by Gojek"
                />
              </a>
              <h2 className="timeline__content-title">
                June 2019 - February 2021
              </h2>
              <p className="timeline__content-desc">
                Ensure all merchants complete the on-boarding cycle and start
                selling via the Application. In charge of the accounts and sales
                targets of merchants. Plan and create marketing events and
                campaigns to drive sales during major campaign periods.
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="Sales Hunter">
            <div className="timeline__content">
              {/* <h2 className="py-3 text-white opacity-80 sm:text-xl"> */}
              {/*   PT. Tokopedia */}
              {/* </h2> */}
              <a href="https://www.tokopedia.com/about/" target="_blank">
                <img
                  className="timeline__img"
                  alt="PT. Tokopedia"
                  src="./images/tokped.png"
                />
              </a>
              <h2 className="timeline__content-title">
                September 2021 - March 2022
              </h2>
              <p className="timeline__content-desc">
                Responsible for initiating contact with potential and current
                customers to generate and qualify leads, Promote the company’s
                services, and identify sales opportunities. Developing lists of
                potential prospects
              </p>
            </div>
          </div>

          <div className="timeline-item" data-text="Web Developer">
            <div className="timeline__content">
              <img
                className="timeline__img max-w-48"
                src="./images/PT-SSSS.png"
                alt="PT. Sinar Laut Biru"
              />
              <h2 className="timeline__content-title">March 2023 - Present</h2>
              <p className="timeline__content-desc">
                Worked with Angular and REST API to build internal web applications for logistics, payroll, HRIS, and legal, streamlining operations and improving efficiency across business processes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
