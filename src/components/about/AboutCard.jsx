import React from "react";
import bg from "../../assets/images/bg.png";

function AboutCard() {
  return (
    <div className="relative md:flex items-center md:space-x-10 width  width-padding mx-auto ">
      <div className="absolute right-0">
        <img src={bg} alt="" className="opacity-20" />
      </div>
      <div className="flex-1 relative py-7">
        <div
          className=" font-black text-gray-800 dark:text-gray-200"
          style={{
            lineHeight: 1.2,
            fontSize: window.innerWidth < 1024 ? "40px" : "48px",
            fontWeight: 700,
          }}
        >
          Who are we ?
        </div>

        <div className="mt-2 text-gray-700 dark:text-gray-400">
          Intelzy is a Nepal based tech startup company established with a
          motive of effortlessly providing digital strategy, growth strategy,
          design and development services to both the private and public sector.
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-400">
          We are a team of developers with experience & singular focus. We
          specialize in helping clients build innovative and customer-facing
          products at scale. We have a proven track record for turning ideas
          into commercially successful products.
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-400">
          You can trust in our experience & knowledge of business applications,
          enterprise-grade software & application development. We believe in
          turning ideas into commercially successful products that millions of
          people love to use.
        </div>
      </div>
      <div className="flex-1 mt-10 md:mt-0 z-40">
        {/* <img src={bg} alt="" className="mx-auto" /> */}
      </div>
    </div>
  );
}

export default AboutCard;
