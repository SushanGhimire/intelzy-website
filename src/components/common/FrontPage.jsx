import React, { useState, useEffect } from "react";
import front from "../../assets/images/frontpageimg.png";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
// import bg from "../../assets/images/frontBg.svg";
function FrontPage({ header, des, start, scroll }) {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const [width, setWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <div
      className={`min-h-screen relative  bg-center bg-no-repeat ${
        darkmode ? "dark" : ""
      } animation`}
    >
      <div
        className={`absolute top-0 right-0 w-full h-full  opacity-80 from-blue-400 to-intelzy via-indigo-500 ${
          darkmode ? "" : "bg-gradient-to-r"
        }
      animate-gradient-x z-0 mix-blend-multiply`}
        style={{
          clipPath:
            width < 768
              ? `polygon(100% 0, 100% 25%, 0 36%, 0 0)`
              : `polygon(100% 0, 100% 49%, 0 78%, 0 0)`,
        }}
      ></div>
      <div className="flex flex-col width mx-auto width-padding ">
        {/* top part  */}
        <div className=" flex flex-1 flex-col justify-center  text-center md:text-left  items-center mt-32">
          <div className="md:flex items-center">
            <div className="flex-1 relative py-7">
              <div
                className=" font-black text-gray-800 dark:text-gray-200"
                style={{
                  lineHeight: 1.2,
                  fontSize: window.innerWidth < 1024 ? "40px" : "48px",
                  fontWeight: 700,
                }}
              >
                {header}
              </div>
              <div className="mt-2 text-gray-700 dark:text-gray-400">{des}</div>
              {start && (
                <div>
                  <button className="text-white rounded-full py-3 px-6 mt-3 bg-intelzy">
                    Start Now
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1 mt-10 md:mt-0 z-40">
              <img src={front} alt="" className="mx-auto" />
            </div>
          </div>
          {/* learn more  */}
          <Link
            activeClass="active"
            to={scroll}
            spy={true}
            className="justify-center flex flex-col cursor-pointer mt-10 group z-40"
          >
            <div className="inline-block uppercase mx-auto text-xs tracking-wide dark:text-gray-300">
              Learn more
            </div>
            <div className="mx-auto dark:text-gray-300">
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
