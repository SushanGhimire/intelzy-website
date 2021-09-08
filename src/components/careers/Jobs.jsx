import React from "react";

function Jobs({ title, status }) {
  return (
    <div className="flex flex-col font-lato mt-3 border-b border-t border-gray-200 dark:border-gray-600 py-2">
      <span className="font-semibold dark:text-gray-200">{title}</span>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 dark:text-gray-500">
          Intelzy Technology
        </span>
        <span>
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
        {status && <span className="text-green-500">{status}</span>}
      </div>
    </div>
  );
}

export default Jobs;
