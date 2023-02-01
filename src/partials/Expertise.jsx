import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode } from "swiper";

const datas = [
  {
    source:
      "https://images.pexels.com/photos/5797898/pexels-photo-5797898.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: {
      title: "Digital Strategy",
      desc: "Optimizing Digital Touchpoints for Growth",
      link: "#link-test",
      key: 1,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1634449278211-eca7f696940e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJyYW5kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content: {
      title: "Branding",
      desc: "Creating Unique and Recognizable Brands",
      key: 2,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    content: {
      title: "Web Development",
      desc: "Building Strong Online Presence for Business",
      key: 3,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1634403665481-74948d815f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHVzZXIlMjBpbnRlcmZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    content: {
      title: "User Interface",
      desc: "Enhancing User Experience for Business Growth",
      key: 4,
    },
  },
  {
    source:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYW5kaW5nJTIwc3RyYXRlZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    content: {
      title: "Digital Marketing",
      desc: "Elevating Brand Visibility",
      key: 5,
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1585159650922-4f7e634cefbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlbGVwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    content: {
      title: "Sales",
      desc: "Generating Revenue Through Exceptional Sales Strategy",
      key: 6,
    },
  },
  {
    source:
      "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: {
      title: "Tools that I used",
      desc: "Utilizing tools to enhance the growth of your business",
      key: 7,
    },
  },
];
export default function Expertise() {
  return (
    <>
      <section
        id="expertise-section"
        className="pt-24 sm:pl-24 flex flex-col md:flex-row md:justify-start min-h-ful max-w-screen-2xl items-center "
      >
        <div className="sm:mr-12">
          <div className="sm:w-96 px-6 md:px-0">
            <h2 className="text-white saol text-4xl md:text-5xl ">Expertise</h2>
            <p className="mt-2 mb-6 ">
              I am dedicated to finding the most advanced digital solutions for
              brands that want to be progressive and make a meaningful impact.
            </p>
            <HashLink to={"/expertisepage/#top"}>
              <button
                type="button"
                className="border-[#626262] border-[1px] h-10 w-36 px-4 py-2 rounded tracking-[3px] bg-transparent font-semibold hover:border-[#fff8aa] hover:bg-[#fff8aa14] text-white hover:text-[#fff8aa] uppercase"
              >
                <div className="flex justify-center">
                  <p>more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </HashLink>
          </div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          freeMode={true}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
          speed={1200}
          loop={true}
          // centeredSlides={true}
          modules={[FreeMode]}
          className="mySwiper w-full h-full py-8 pl-0 "
        >
          {datas.map((data, index) => {
            return (
              <SwiperSlide className="w-60 h-full " key={index}>
                <div className="w-60 h-80">
                  <img
                    className="object-cover w-full h-full object-center grayscale"
                    src={data.source}
                    alt={data.title}
                  />
                </div>

                <a href={data.content.link} className="block mt-4">
                  <h3 className="text-white text-base uppercase">
                    {data.content.title} <sup>{`0${data.content.key}`}</sup>
                  </h3>
                  <h2 className="py-2">{data.content.desc}</h2>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
