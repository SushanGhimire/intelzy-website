import React from "react";
import ContactFOrm from "./ContactFOrm";
import Facebook from "../../assets/images/icons/Facebook.svg";
import github from "../../assets/images/icons/github.svg";
import Linkedin from "../../assets/images/icons/Linkedin.svg";
import Twitter from "../../assets/images/icons/Twitter.svg";

import FacebookLight from "../../assets/images/icons/FacebookLight.svg";
import githubLight from "../../assets/images/icons/githubLight.svg";
import LinkedinLight from "../../assets/images/icons/LinkedinLight.svg";
import TwitterLight from "../../assets/images/icons/TwitterLight.svg";
import { useSelector } from "react-redux";
import Three from "../common/Three";
function ContactUs({ setNav }) {
  const { darkmode } = useSelector((state) => state.darkmode);
  React.useEffect(() => {
    setNav(window.location.pathname.split("/")[1]);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col mt-28  ">
      {/* <div className="mt-20 h-100  z-0">
        <Three />
      </div> */}
      <div
        className="flex flex-col w-full width  width-padding mx-auto mb-10 "
        id="careers"
      >
        <div className="text-2xl font-semibold dark:text-gray-200">
          Get In Touch
        </div>
        <div className="sm:flex justify-center sm:space-x-10 lg:space-x-20 mt-10">
          {/* form part  */}
          <div className="flex-1">
            <ContactFOrm />
          </div>
          {/* right side  */}
          <div className="w-72 flex flex-col mt-16 sm:mt-0">
            {/* social sites  */}
            <div className="flex space-x-4 items-center border rounded-md border-gray-300 p-4 dark:border-gray-500">
              <div className="font-popping font-medium dark:text-gray-200 ">
                Follow us on
              </div>
              <div className="flex space-x-1 dark:bg-gray-900 ">
                <a href="https://www.twitter.com" target="new tab">
                  <img
                    src={darkmode ? TwitterLight : Twitter}
                    alt=""
                    className="w-7"
                  />
                </a>

                <a href="https://www.linkedin.com" target="new tab">
                  <img
                    src={darkmode ? LinkedinLight : Linkedin}
                    alt=""
                    className="w-7"
                  />
                </a>
                <a href="https://www.facebook.com" target="new tab">
                  <img
                    src={darkmode ? FacebookLight : Facebook}
                    alt=""
                    className="w-7"
                  />
                </a>
                <a href="https://www.google.com" target="new tab">
                  <img
                    src={darkmode ? githubLight : github}
                    alt=""
                    className="w-6"
                  />
                </a>
              </div>
            </div>
            <ul className="mt-7 dark:text-gray-400 font-lato text-lg">
              {/* location  */}
              <li className="mb-4 flex items-center space-x-1">
                <span>
                  <svg
                    className="w-6 h-6 text-intelzy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>Saptagandaki Chowk, Bharatpur-10, Chitwan Nepal</span>
              </li>
              {/* Phone  */}
              <li className="mb-4 flex items-center space-x-1">
                <span>
                  <svg
                    className="w-6 h-6 text-intelzy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span>+977-9807123239</span>
              </li>
              {/* Phone  */}
              <li className="mb-4 flex items-center space-x-1">
                <span>
                  <svg
                    className="w-6 h-6 text-intelzy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
                <span>contact@intelzy.co</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
