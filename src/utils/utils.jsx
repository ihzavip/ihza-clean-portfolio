import { UilMediumM, UilUser, UilBag } from "@iconscout/react-unicons";

export const downloadResume = () => {
  // using Java Script method to get PDF file
  fetch("ihza-webdeveloper.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "ihza-webdeveloper.pdf";
      alink.click();
    });
  });
};

export const tabsData = [
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

export const expertiseData = [
  {
    source:
      "https://images.pexels.com/photos/5797898/pexels-photo-5797898.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: {
      title: "Digital Strategy",
      desc: "Optimizing Digital Touchpoints for brand Growth",
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
