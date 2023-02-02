import { useEffect, useRef, useState } from "react";
import { UilMediumM, UilUser, UilBag } from "@iconscout/react-unicons";
const tabsData = [
  {
    label: <UilMediumM />,
    content: [
      {
        title: "Blogr Landing Page",
        url: "https://ihzahsb-blogr.netlify.app/",
        imageURL: "./images/blogr-ss.png",
        desc: "Blogr landing page from FrontEnd Mentor challenge",
      },

      {
        title: "Sunnyside Agency Landing Page",
        url: "https://ihzahsb-sunnyside.netlify.app",
        imageURL: "./images/sunnyside-ss.png",
        desc: "Sunnyside Agency landing page ",
      },
      {
        title: "Ecommerce Product Page",
        url: "https://ihzahsb-ecommerce-product.netlify.app",
        imageURL: "./images/ecommerce-ss.png",
        desc: "Ecommerce product & checkout feature",
      },
    ],
  },
  {
    label: <UilUser />,
    content: [
      {
        title: "Personal Blog",
        url: "https://hasibuan-ihza.netlify.app",
        imageURL: "./images/coming-soon-2.png",
        desc: "My personal blog for my daily code and learning journey",
      },
    ],
  },
  {
    label: <UilBag />,
    content: [
      {
        title: "PT. Sinar Laut Biru Landing Page",
        url: "#",
        imageURL: "./images/sinarlautbiruind.png",
        desc: "PT. Sinar Laut Biru",
      },
    ],
  },
];
export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <section id="project-section" className="px-6 pt-12 lg:px-24 lg:pt-24">
      <h2 className="text-4xl text-center text-white md:text-5xl font-saol">
        Projects
      </h2>
      <div>
        <div className="relative">
          <div className="flex gap-12 justify-center items-center mt-10 border-b">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="py-3 px-2 text-xl font-saol"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span
            className="block absolute bottom-0 transition-all duration-300 bg-yellow-400/95 h-[3px]"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </div>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:gap-6">
          {tabsData[activeTabIndex].content.map((item, index) => {
            return (
              <a className="mb-3" href={item.url} key={index} target="_blank">
                <div className="overflow-hidden h-44 border md:h-full">
                  <img
                    className="object-cover w-full h-full brightness-75"
                    src={item.imageURL}
                    alt={item.title}
                  />

                  {/* <div className="absolute bottom-0 px-5 w-full leading-4 text-center text-white bg-black/90"> */}
                  {/*   <p className="mb-2 text-base">{item.title}</p> */}
                  {/*   <p className="text-sm">{item.desc}</p> */}
                  {/* </div> */}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
