import React, { useState } from "react";
import { faqs } from "./fqs";
function QNA() {
  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <div className=" mt-10">
      {faqs.map((data, index) => {
        const { qst, ans } = data;
        return (
          <div key={index} className="bg-gray-200 dark:bg-gray-800 mt-2">
            <div
              className={` px-6 py-2 cursor-pointer animation flex space-x-2 items-center ${
                selectedIndex === index
                  ? "bg-intelzy text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              }`}
              onClick={() => {
                selectedIndex === index
                  ? setSelectedIndex("")
                  : setSelectedIndex(index);
              }}
            >
              <span>
                <svg
                  className={`w-4 h-4 animation transform ${
                    selectedIndex === index ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="text-sm md:text-base">{qst}</span>
            </div>
            <div
              className={`overflow-hidden animation text-xs md:text-sm text-gray-700 dark:text-gray-400 px-4  ${
                selectedIndex === index ? "max-h-64" : "max-h-0"
              }`}
            >
              <div className="p-2 text-justify">{ans}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QNA;
