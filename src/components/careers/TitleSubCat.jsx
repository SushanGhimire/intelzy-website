import React from "react";

function TitleSubCat({ title, job_type, posted, location }) {
  return (
    <div>
      {/* title  */}
      <div className="text-2xl font-semibold dark:text-gray-200">{title}</div>
      {/* sub categories  */}
      <div className="flex space-x-4 items-center mt-2 flex-wrap space-y-2">
        {/* full time */}
        <div>
          <button className="text-white bg-intelzy text-sm px-2 py-1">
            {job_type === "FT" ? "Full Time" : "Part Time"}
          </button>
        </div>
        {/* location  */}
        <div className="flex items-center space-x-1 text-gray-600">
          <div>
            <svg
              className="w-5 h-5 text-gray-500"
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
          </div>
          <span className="text-sm font-font-lato">{location}</span>
        </div>
        {/* date  */}
        <div className="flex items-center space-x-1 text-gray-600">
          <div>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-sm font-font-lato">
            Posted {posted ? posted.split("T")[0] : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TitleSubCat;
