import React from "react";

function Listing({ lists }) {
  return (
    <ul className="space-y-2 list-disc ml-5 mt-2 font-lato">
      {lists.map((l, index) => {
        return (
          <li
            key={index}
            className="text-gray-800 font-font-lato dark:text-gray-400"
          >
            {l}
          </li>
        );
      })}
    </ul>
  );
}

export default Listing;
