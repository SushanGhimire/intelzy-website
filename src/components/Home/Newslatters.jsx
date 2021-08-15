import React from "react";

function Newslatters() {
  return (
    <div className="flex flex-col width-padding justify-center my-20">
      <div className="mx-auto title-text">Receive our Newsletter</div>
      <div className="text-gray-700 mx-auto text-center mt-2">
        Sign up to receive updates and announcements
      </div>
      <div className="mx-auto ">
        <button className="text-white rounded-full py-3 px-6 mt-3 bg-intelzy">
          Start Now
        </button>
      </div>
    </div>
  );
}

export default Newslatters;
