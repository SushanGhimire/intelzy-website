import React from "react";
import ContactFOrm from "./ContactFOrm";
import Facebook from "../../assets/images/icons/Facebook.svg";
import Google from "../../assets/images/icons/Google.svg";
import Linkedin from "../../assets/images/icons/Linkedin.svg";
import Twitter from "../../assets/images/icons/Twitter.svg";

import FacebookLight from "../../assets/images/icons/FacebookLight.svg";
import GoogleLight from "../../assets/images/icons/GoogleLight.svg";
import LinkedinLight from "../../assets/images/icons/LinkedinLight.svg";
import TwitterLight from "../../assets/images/icons/TwitterLight.svg";
import { useSelector } from "react-redux";
function ContactUs() {
  const { darkmode } = useSelector((state) => state.darkmode);
  return (
    <div className="flex flex-col ">
      <div
        className="flex flex-col w-full width  width-padding mx-auto mb-10 mt-40"
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
          <div className="w-64 flex flex-col mt-16 sm:mt-0">
            <div className="font-popping text-xl font-medium dark:text-gray-200">
              Connect with Us
            </div>
            <div className="flex space-x-1 dark:bg-gray-900 mt-3">
              <a href="https://www.facebook.com" target="new tab">
                <img
                  src={darkmode ? FacebookLight : Facebook}
                  alt=""
                  className="w-8"
                />
              </a>
              <a href="https://www.google.com" target="new tab">
                <img
                  src={darkmode ? GoogleLight : Google}
                  alt=""
                  className="w-8"
                />
              </a>
              <a href="https://www.linkedin.com" target="new tab">
                <img
                  src={darkmode ? LinkedinLight : Linkedin}
                  alt=""
                  className="w-8"
                />
              </a>
              <a href="https://www.twitter.com" target="new tab">
                <img
                  src={darkmode ? TwitterLight : Twitter}
                  alt=""
                  className="w-8"
                />
              </a>
            </div>
            <ul className="mt-7 dark:text-gray-400">
              <li className="mb-4">Technical Support</li>
              <li className="mb-2">Please contact us at</li>
              <li>support@intelzy.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
