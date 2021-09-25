import React from "react";
import AboutCard from "./AboutCard";
import OurTeam from "./OurTeam";
function About() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full  mt-32" id="about-us">
        {/* about card  */}
        <AboutCard />
        <OurTeam />
      </div>
    </div>
  );
}

export default About;
