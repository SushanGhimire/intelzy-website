import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
function ServiceCard2({ flex, title, des, aos }) {
  const [width, setWidth] = useState(window.innerWidth);
  const { darkmode } = useSelector((state) => state.darkmode);
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
      className={`flex justify-between items-center mt-3`}
      data-aos={width > 768 && aos}
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1700"
    >
      {/* left card  */}
      <div
        className={`flex-1 hidden md:block rounded-xl  ${
          darkmode
            ? "border-6 border-gray-500"
            : "p-1.5 bg-gradient-to-r from-gray-600 to-intelzy via-intelzy"
        } ${flex === "right" ? "md:opacity-0" : ""}
        `}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <div className="text-xl font-black dark:text-gray-200">{title}</div>
          <p className="text-sm dark:text-gray-400">{des}</p>
        </div>
      </div>
      {/* left line  */}
      <div
        className={`w-10 h-1.5 ${
          darkmode
            ? "bg-gray-500"
            : "bg-gradient-to-r from-intelzy to-black via-intelzy"
        } hidden md:block ${flex === "right" ? "md:opacity-0" : ""}`}
      ></div>
      {/* circle  */}
      <div
        className={`rounded-full  p-1.5 ${
          darkmode
            ? "bg-gray-500"
            : "bg-gradient-to-r from-gray-600 to-intelzy via-intelzy"
        }`}
      >
        <div className="h-5 w-5 rounded-full bg-white dark:bg-gray-900"></div>
      </div>
      {/* right line  */}
      <div
        className={`w-10 h-1.5 ${
          darkmode
            ? "bg-gray-500"
            : "bg-gradient-to-r from-intelzy to-black via-intelzy"
        }   ${flex === "left" ? "md:opacity-0" : ""}`}
      ></div>
      {/* right card  */}
      <div
        className={`flex-1  rounded-xl ${
          darkmode
            ? "border-6 border-gray-500"
            : "p-1.5 bg-gradient-to-r from-gray-600 to-intelzy via-intelzy"
        }
        ${flex === "left" ? "md:opacity-0" : ""}
        `}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <div className="text-xl font-black dark:text-gray-200">{title}</div>
          <p className="text-sm dark:text-gray-400">{des}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard2;
