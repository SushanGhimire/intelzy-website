import React from "react";
import logo from "../../assets/images/intelzyLogo2.png";
// import ThreeJs from "../common/ThreeJs";
function ThreeJsPart() {
  return (
    <div
      className="width-padding text-white flex flex-col justify-center items-center h-96"
      style={{
        backgroundColor: "#24292E",
      }}
    >
      <div className="mx-auto">
        <img src={logo} className="w-40" alt="" />
      </div>
      <div className="mx-auto">{/* <ThreeJs /> */}</div>
      <div className="mt-10 mx-auto text-4xl font-bold tracking-wide">
        Get Started
      </div>
      <div>
        <button className="text-white rounded-full py-3 px-6 mt-3 bg-intelzy">
          Start Now
        </button>
      </div>
    </div>
  );
}

export default ThreeJsPart;
