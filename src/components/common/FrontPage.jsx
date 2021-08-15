import React from "react";
import front from "../../assets/images/front.svg";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
function FrontPage() {
  return (
    <div className="width-padding pt-36 pb-12 flex flex-col ">
      {/* top part  */}
      <div className="md:flex justify-center items-center">
        <div className="flex-1">
          <div
            className="text-4xl lg:text-5xl 2xl:text-6xl font-black"
            style={{
              lineHeight: 1.2,
            }}
          >
            A crypto wallet & gateway to blockchain apps
          </div>
          <div className="mt-2 text-gray-700">
            Start exploring blockchain applications in seconds. Trusted by over
            1 million users worldwide.
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#F8373F",
              }}
              className="text-white rounded-full py-3 px-6 mt-3"
            >
              Start Now
            </button>
          </div>
        </div>
        <div className="flex-1 mt-5 md:mt-0">
          <img src={front} alt="" className="mx-auto" />
        </div>
      </div>
      {/* learn more  */}
      <div className="justify-center flex flex-col cursor-pointer">
        <div className="inline-block uppercase mx-auto text-xs tracking-wide">
          Learn more
        </div>
        <div className="mx-auto">
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
