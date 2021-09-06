import React from "react";

function Duties({ lists }) {
  return (
    <ul className="space-y-2 list-disc ml-10 mt-4">
      {lists.map((l, index) => {
        return (
          <li
            key={index}
            className="text-gray-800 font-sans dark:text-gray-400"
          >
            {l}
          </li>
        );
      })}
    </ul>
  );
}

export default Duties;
