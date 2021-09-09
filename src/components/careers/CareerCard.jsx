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
          className="bg-intelzy text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-intelzy"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default CareerCard;
