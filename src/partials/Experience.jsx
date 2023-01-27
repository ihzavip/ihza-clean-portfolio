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
      className="pt-12 sm:pt-24 sm:px-24 flex flex-col items-center"
    >
      <div className="timeline-container" id="timeline-1">
        <div className="text-center w-full relative mb-28">
          <h3 className="text-white saol px-6 text-4xl md:text-5xl">
            Experience
          </h3>
        </div>
        <div className="timeline">
          <div className="timeline-item " data-text="Merchandiser">
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
              {/*   PT. Bentoel Group */}
              {/* </h2> */}
              <a href="https://www.bentoelgroup.com/" target="_blank">
                <img
                  className="timeline__img"
                  src="https://www.tobakonis.com/wp-content/uploads/2019/07/000009-00_produk-rokok-bentoel_bentoel-group_800x450_ccpdm-min.jpg"
                  alt="PT. Bentoel Group"
                />
              </a>
              <h2 className="timeline__content-title">
                1 Jan 2016 - 30 Jun 2016
              </h2>
              <p className="timeline__content-desc">
                Plan and develop merchandising strategies that balance customers
                expectations and company’s objectives.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="Acquisition Executive">
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
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
                1 Jun 2019 - 30 Feb 2021
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
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
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
                1 Sept 2021 - 1 Mar 2022
              </h2>
              <p className="timeline__content-desc">
                Responsible for initiating contact with potential and current
                customers to generate and qualify leads, Promote the company’s
                services, and identify sales opportunities. Developing lists of
                potential prospects
              </p>
            </div>
          </div>
          <div className="timeline-item " data-text="Web Developer">
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
              {/*   PT. Sinar Laut Biru */}
              {/* </h2> */}
              <img
                className="timeline__img "
                src="https://images.unsplash.com/photo-1422246654994-34520d5a0340?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvb2QlMjBleHBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="PT. Sinar Laut Biru"
              />
              <h2 className="timeline__content-title">
                1 Apr 2022 - 30 Des 2022
              </h2>
              <p className="timeline__content-desc">
                Designs, creates, and maintains websites to improve user
                experience and meet business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
