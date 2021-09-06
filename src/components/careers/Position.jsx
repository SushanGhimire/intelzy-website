import React from "react";

function Position() {
  return (
    <div className="flex flex-col mt-3 space-y-2">
      {/* title  */}
      <div className="flex items-center space-x-3">
        <span className=" font-sans font-semibold dark:text-gray-200">
          Job Title :
        </span>
        <span className="font-sans text-gray-900 dark:text-gray-400">
          Marketing Lead
        </span>
      </div>
      {/* Job Function:  */}
      <div className="flex items-center space-x-3">
        <span className=" font-sans font-semibold dark:text-gray-200">
          Job Function :
        </span>
        <span className="font-sans text-gray-900 dark:text-gray-400">
          Marketing Lead
        </span>
      </div>
      {/* No. of Vacancy:  */}
      <div className="flex items-center space-x-3">
        <span className=" font-sans font-semibold dark:text-gray-200">
          No. of Vacancy :
        </span>
        <span className="font-sans text-gray-900 dark:text-gray-400">
          Marketing Lead
        </span>
      </div>
      {/* Level  */}
      <div className="flex items-center space-x-3">
        <span className="font-sans font-semibold dark:text-gray-200 ">
          Leve :
        </span>
        <span className="font-sans text-gray-900 dark:text-gray-400">
          Marketing Lead
        </span>
      </div>
      {/* Salary  */}
      <div className="flex items-center space-x-3">
        <span className=" font-sans font-semibold dark:text-gray-200">
          Salary :
        </span>
        <span className="font-sans text-gray-900 dark:text-gray-400">
          Marketing Lead
        </span>
      </div>
      {/* title  */}
      <div className="flex items-center space-x-3">
        <span className=" font-sans font-semibold dark:text-gray-200">
          Please email your CV at{" "}
          <span className="underline text-intelzy ml-2">info@intelzy.com</span>
        </span>
      </div>
    </div>
  );
}

export default Position;
