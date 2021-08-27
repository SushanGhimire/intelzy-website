import React from "react";
import front from "../../assets/images/frontpageimg.png";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { Link } from "react-scroll";
// import bg from "../../assets/images/frontBg.svg";
function FrontPage() {
  return (
    <div className="min-h-screen relative  bg-center bg-no-repeat">
      <div className="absolute top-0 right-0 w-full h-full clip md:bg-gradient-to-r opacity-80 from-blue-400 to-intelzy via-indigo-500 animate-gradient-x z-0 mix-blend-multiply"></div>
      {/* <div className="absolute top-0 right-0 w-full h-full">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div> */}
      <div className="flex flex-col width mx-auto width-padding ">
        {/* top part  */}
        <div className=" flex flex-1 flex-col justify-center  text-center md:text-left  items-center mt-32">
          <div className="md:flex items-center">
            <div className="flex-1 relative py-7">
              <div
                className=" font-black text-gray-800"
                style={{
                  lineHeight: 1.2,
                  fontSize: window.innerWidth < 1024 ? "40px" : "48px",
                  fontWeight: 700,
                }}
              >
                A crypto wallet & gateway to blockchain apps
              </div>
              <div className="mt-2 text-gray-700">
                Start exploring blockchain applications in seconds. Trusted by
                over 1 million users worldwide.
              </div>
              <div>
                <button className="text-white rounded-full py-3 px-6 mt-3 bg-intelzy">
                  Start Now
                </button>
              </div>
            </div>
            <div className="flex-1 mt-10 md:mt-0 z-40">
              <img src={front} alt="" className="mx-auto" />
            </div>
          </div>
          {/* learn more  */}
          <Link
            activeClass="active"
            to="scroll"
            spy={true}
            className="justify-center flex flex-col cursor-pointer mt-10 group z-40"
          >
            <div className="inline-block uppercase mx-auto text-xs tracking-wide">
              Learn more
            </div>
            <div className="mx-auto ">
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
