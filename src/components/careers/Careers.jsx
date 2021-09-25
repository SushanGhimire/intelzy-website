import React from "react";
// import FrontPage from "../common/FrontPage";
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
    <div className="flex flex-col ">
      {/* <FrontPage
        header="A gate way to your career"
        des="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
        scroll="careers"
      /> */}
      <div
        className="flex flex-col w-full width  width-padding mx-auto mb-10 mt-32"
        id="careers"
      >
        <div className="text-2xl  text-center font-bold dark:text-gray-200">
          Open positions
        </div>
        {/* grid card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          {careers.map((career, index) => {
            return <CareerCard key={index} {...career} />;
          })}
        </div>
        <div className="text-2xl text-center font-bold dark:text-gray-200">
          Internships
        </div>
        <div className="flex text-center  space-x-1 text-gray-600 mt-0.5">
        We love watching talented people learn and explore their skills.
        Our interns gain real work experience by pairing up with our developers on real projects. 
        </div>
        <div className="mt-10 text-center">
            <a href="mailto:jobs@intelzy.com.np">
              <button className="button-style">Apply For Internship</button>
            </a>
        </div>
        
      </div>
    </div>
  );
}

export default Careers;
