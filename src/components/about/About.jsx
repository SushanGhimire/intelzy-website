import React from "react";
import FrontPage from "../common/FrontPage";

function About() {
  return (
    <div className="flex flex-col">
      <FrontPage
        header="A gate way to know about us"
        des="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
        scroll="about-us"
      />
      <div
        className="flex flex-col w-full width  width-padding mx-auto"
        id="about-us"
      ></div>
    </div>
  );
}

export default About;
