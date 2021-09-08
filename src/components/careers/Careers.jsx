import React from "react";
import FrontPage from "../common/FrontPage";
import CareerCard from "./CareerCard";

function Careers() {
  let careers = [
    {
      id: 1,
      title: "Customer Support Lead",
      category: "Customer Service, Information Technology",
      des: "We are looking for a young and dynamic individual for the position of Customer Service Representative.",
    },
    {
      id: 2,
      title: "Marketing Lead",
      category: "Marketing, Information Technology",
      des: "We are looking for a young and dynamic individual for the position of Marketing Lead.",
    },
    {
      id: 1,
      title: "Customer Support Lead",
      category: "Customer Service, Information Technology",
      des: "We are looking for a young and dynamic individual for the position of Customer Service Representative.",
    },
    {
      id: 2,
      title: "Marketing Lead",
      category: "Marketing, Information Technology",
      des: "We are looking for a young and dynamic individual for the position of Marketing Lead.",
    },
    {
      id: 1,
      title: "Customer Support Lead",
      category: "Customer Service, Information Technology",
      des: "We are looking for a young and dynamic individual for the position of Customer Service Representative.",
    },
    {
      id: 2,
      title: "Marketing Lead",
      category: "Marketing, Information Technology",
      des: "We are looking for a young and dynamic individual for the position of Marketing Lead.",
    },
  ];
  return (
    <div className="flex flex-col">
      <FrontPage
        header="A gate way to your career"
        des="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
        scroll="careers"
      />
      <div
        className="flex flex-col w-full width  width-padding mx-auto my-10"
        id="careers"
      >
        <div className="text-2xl font-semibold dark:text-gray-200">
          Available Positions
        </div>
        {/* grid card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          {careers.map((career, index) => {
            return <CareerCard key={index} {...career} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Careers;
