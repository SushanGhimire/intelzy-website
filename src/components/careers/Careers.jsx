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
        <div className="text-2xl text-center font-bold dark:text-gray-200 mt-10">
          Internships
        </div>
        <div className="flex text-center  space-x-1 text-gray-600 mt-0.5">
          We love watching talented people learn and explore their skills. Our
          interns gain real work experience by pairing up with our developers on
          real projects.
        </div>
        <div className="bg-gray-100 p-4  mx-auto mt-5 flex flex-col">
          <div className=" text-center text-sm text-gray-600 font-lato">
            <span>Applications are currently closed for Internships.</span>{" "}
            <span>
              Subscribe to newsletter to recieve updates about Internship
              opportunities via email.
            </span>
          </div>
          {/* newsletter  */}
          <div className="hidden lg:flex mx-auto  space-x-4 items-center mt-5 border border-gray-300 rounded-full relative ">
            <div>
              <input
                type="text"
                className="lg:w-80 py-2.5 rounded-full focus:outline-none pl-5 pr-32 focus:ring-2 focus:ring-intelzy focus:ring-offset-2 bg-gray-100"
              />
            </div>
            <button className="text-white rounded-full py-3 px-6  bg-intelzy absolute right-0 text-sm">
              Subscribe
            </button>
          </div>
        </div>
        {/* <div className="mt-10 text-center">
            <a href="mailto:jobs@intelzy.com.np">
              <button className="button-style">Apply For Internship</button>
            </a>
        </div> */}
      </div>
    </div>
  );
}

export default Careers;
