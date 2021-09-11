import React from "react";

function Newslatters() {
  return (
    <div className="flex flex-col width-padding justify-center my-20">
      <div className="mx-auto title-text dark:text-gray-200">
        Receive our Newsletter
      </div>
      <div className="text-gray-700 mx-auto text-center mt-2 dark:text-gray-400">
        Sign up to receive updates and announcements
      </div>
      <div className="hidden lg:flex mx-auto  space-x-4 items-center mt-5 border border-gray-300 rounded-full relative">
        <div>
          <input
            type="text"
            className="lg:w-100 py-3 rounded-full focus:outline-none pl-5 pr-44 focus:ring-2 focus:ring-intelzy focus:ring-offset-2"
          />
        </div>
        <button className="text-white rounded-full py-3 px-6  bg-intelzy absolute right-0">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Newslatters;
