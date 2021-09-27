import React from "react";
import { Link } from "react-router-dom";
function CareerCard({ title, id, slug, job_location, job_type, created_at }) {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <div className="flex flex-col p-5 shadow-lg rounded-md  bg-gray-100 dark:bg-gray-800">
      <span className="text-lg font-semibold text-gray-600 tracking-wide dark:text-gray-200">
        {title}
      </span>
      {/* <span className="text-sm font-font-lato mt-3 dark:text-gray-300">
        {category}
      </span> */}
      {/* <p className="text-gray-600 flex-1 mt-3 dark:text-gray-300">{des}</p> */}
      <div className="mt-3 flex items-center space-x-1 text-gray-600">
        <span>
          <svg
            className="w-4 h-4 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span className="rounded-lg dark:text-gray-400">
          Posted {created_at.split("T")[0]}
        </span>
      </div>
      <div className="flex space-x-2 mt-3 items-center">
        <span className="text-xs bg-intelzy text-white px-3 py-0.5  rounded-full">
          {job_type === "PT" ? "Part Time" : "Full Time"}
        </span>
        <span className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-600 px-3 py-0.5  rounded-full">
          {job_location === "RM" ? "Remote" : "Office location"}
        </span>
      </div>
      <div className="mt-5">
        <Link
          to={`/careers/${id}/${slug}`}
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
