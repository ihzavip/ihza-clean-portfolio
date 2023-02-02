import { useEffect, useState } from "react";
import { UilAngleUp } from "@iconscout/react-unicons";
import { HashLink } from "react-router-hash-link";

const ScrollToTop = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  // scroll navbar
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // ${isVisible ? "opacity-100" : "opacity-0"}
  return (
    <div className="block sticky bottom-2 left-40">
      <HashLink to="/expertisepage/#top" smooth>
        <button
          type="button"
          className={`
   ${visible ? "opacity-100" : "opacity-0"}
          bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          <UilAngleUp className="w-12 h-12" aria-hidden="true" />
        </button>
      </HashLink>
    </div>
  );
};
export default ScrollToTop;
