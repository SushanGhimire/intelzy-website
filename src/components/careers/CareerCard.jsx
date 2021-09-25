import React from "react";
import { Link } from "react-router-dom";
function CareerCard({ title, category, des, id }) {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <div className="flex flex-col p-5 shadow-lg rounded-md  bg-gray-100 dark:bg-gray-800">
      <span className="text-xl font-semibold text-gray-600 tracking-wide dark:text-gray-200">
        {title}
      </span>
      <span className="text-sm font-font-lato mt-3 dark:text-gray-300">
        {category}
      </span>
      <p className="text-gray-600 flex-1 mt-3 dark:text-gray-300">{des}</p>
      <div className="mt-5">
        <Link
          to={`/careers/${id}/${title.replace(/\s/g, "")}`}
          onClick={scrollToTop}
          className="text-intelzy  rounded  focus:outline-none flex items-center space-x-2"
        >
          <span>Learn More</span>
          <span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default CareerCard;
