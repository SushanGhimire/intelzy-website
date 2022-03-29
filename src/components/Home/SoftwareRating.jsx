import React from "react";
import rating from "../../assets/images/background_ratings.svg";

const ratingLists = [
  {
    title: "Affordable",
    icon: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    iconCss: "text-blue-600",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Highly Rated",
    icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    iconCss: "text-yellow-600",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Users",
    icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z",
    iconCss: "text-intelzy",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];
const SoftwareRating = () => {
  return (
    <div
      className={`flex flex-col  px-5 md:px-10 lg:px-0 bg-lighGray dark:bg-gray-800`}
    >
      <div className="mx-auto relative">
        <img src={rating} alt="" className="hidden md:block" />
        <div className="md:absolute w-full top-0 xl:top-1/3">
          <div className="width mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {ratingLists.map((data, index) => {
              const { title, des, icon, iconCss } = data;
              return (
                <div
                  className="flex flex-col justify-center dark:bg-gray-800 p-4 rounded-md"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 mx-auto ${iconCss}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d={icon} />
                  </svg>
                  <h3 className="mx-auto">{title}</h3>
                  <p className="mt-2 text-gray-700 text-sm md:text-base dark:text-gray-400 text-center">
                    {des}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareRating;
