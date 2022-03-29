import React from "react";
import carbonpay from "../../assets/images/partners/carbonpay.png";
import garvi from "../../assets/images/partners/garvi.png";
import maharani from "../../assets/images/partners/maharani.png";
import shine from "../../assets/images/partners/shine.png";
import mf from "../../assets/images/partners/mf.png";
import eatwell from "../../assets/images/partners/eatwell.png";
import retail from "../../assets/images/partners/retail.svg";
import renaissance from "../../assets/images/partners/renaissance.svg";
import prime from "../../assets/images/partners/prime.png";
import graphicMargha from "../../assets/images/partners/graphic-margha.PNG";

const logos = [
  {
    img: carbonpay,
    link: "https://joincarbonpay.com/",
  },
  {
    img: maharani,
    link: "https://maharanithreads.com/",
  },
  {
    img: retail,
    link: "https://retailscout.io/",
  },
  {
    img: shine,
    link: "https://shineautomate.com/",
  },
  {
    img: mf,
    link: "https://mindfoundry.co/",
  },
  {
    img: renaissance,
    link: "https://newrenaissance.io/",
  },
  {
    img: eatwell,
    link: "https://eatwellrestro.com/",
  },
  {
    img: garvi,
    link: "https://garvimedical.com",
  },
  {
    img: prime,
    link: "https://intelzy.co/",
  },
  {
    img: graphicMargha,
    link: "https://intelzy.co",
  },
];
function Partners() {
  return (
    <div
      className={`flex flex-col py-32 px-5 md:px-10 lg:px-0 bg-lighGray dark:bg-gray-800`}
    >
      <div className="title-text dark:text-gray-200  width mx-auto justify-center ">
        Projects
      </div>
      <div className="text-center text-gray-700 mt-2 dark:text-gray-400 width mx-auto ">
        We provide on-time and high-quality delivery to our clients.
      </div>
      <div className="w-full  overflow-hidden width mx-auto mt-10">
        {/* <PartnerSlider /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => {
            return (
              <div
                className="flex items-center justify-center dark:bg-gray-900 bg-white rounded-md p-2"
                key={index}
              >
                <a href={logo.link} target="new tab " className="">
                  <img
                    src={logo.img}
                    className="mx-auto dark:bg-gray-900 h-16"
                    alt=""
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Partners;
