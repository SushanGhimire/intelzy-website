import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function FlexCard({ content, flex, img, des, aos }) {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 768) {
      setWidth(innerWidth);
    }
  };
  useEffect(() => {
    AOS.init();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <div
      className={`md:flex ${flex} items-center mt-10 md:space-x-10  width mx-auto width-padding `}
      id="scroll"
    >
      {/* content  */}
      <div
        className={`flex-1 text-center md:text-left ${
          flex === "flex-row " ? "md:pr-10" : "md:pl-10"
        }`}
      >
        <div className="title-text dark:text-gray-200">{content}</div>
        <div className="mt-2 text-gray-700 text-sm md:text-base dark:text-gray-400 text-justify">
          {des}
        </div>
      </div>
      {/* image  */}
      <div
        className="flex-1 mt-10 md:mt-0 px-5 md:px-0"
        data-aos={width > 768 && aos}
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1700"
      >
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default FlexCard;
