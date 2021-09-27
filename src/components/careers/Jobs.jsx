import React from "react";
function Jobs({
  title,
  created_at,
  job_type,
  slug,
  id,
  location,
  job_location,
}) {
  const scrollToTop = () => window.scrollTo(0, 0);
  const openJob = () => {
    window.location = `/careers/${id}/${slug}`;
    scrollToTop();
  };
  return (
    <div className="flex flex-col font-lato mt-3 border-b border-t border-gray-200 dark:border-gray-600 py-2">
      {/* title  */}
      <span
        className="font-semibold dark:text-gray-200 cursor-pointer"
        onClick={openJob}
      >
        {title}
      </span>
      <div className="flex items-center space-x-2 mt-0.5">
        <div className="flex items-center space-x-1">
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
          <span className="text-gray-600 dark:text-gray-500">{location}</span>
        </div>
        <span onClick={openJob}>
          <svg
            className="w-4 h-4 text-gray-500 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
      {/* date  */}
      <div className="flex items-center space-x-1 text-gray-600 mt-0.5">
        <div>
          <svg
            className="w-4 h-4 text-gray-500"
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
          Posted on {created_at.split("T")[0]}
        </span>
      </div>
      <div className="flex space-x-2 mt-3 items-center">
        <span className="text-xs bg-intelzy text-white px-3 py-0.5  rounded-full">
          {job_type === "PT" ? "Part Time" : "Full Time"}
        </span>
        <span className="text-xs bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-600 px-3 py-0.5  rounded-full">
          {job_location === "RM" ? "Remote" : "Office location"}
        </span>
      </div>
    </div>
  );
}

export default Jobs;
