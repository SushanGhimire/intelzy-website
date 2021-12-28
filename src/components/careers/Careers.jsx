import React from "react";
import axiosInstance from "../../api/axiosInstance";
// import FrontPage from "../common/FrontPage";
import CareerCard from "./CareerCard";

function Careers() {
  const [careers, setCarrers] = React.useState([]);
  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axiosInstance
      .get(`/jobvacancy/list/`, { signal })
      .then((res) => {
        setCarrers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col ">
      <div
        className="flex flex-col w-full width  width-padding mx-auto mb-10 mt-32"
        id="careers"
      >
        <div className="text-2xl  text-center font-bold dark:text-gray-200">
          Open positions
        </div>
        {/* grid card  */}
        {careers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            {careers.map((career, index) => {
              return <CareerCard key={index} {...career} />;
            })}
          </div>
        )}
        {careers.length === 0 && (
          <div className="text-gray-600 dark:text-gray-200 mx-auto">
            No open positions are available!
          </div>
        )}
        <div className="text-2xl text-center font-bold dark:text-gray-200 mt-10">
          Internships
        </div>
        <div className="flex text-center  space-x-1 text-gray- dark:text-gray-400 mt-0.5">
          We love watching talented people learn and explore their skills. Our
          interns gain real work experience by pairing up with our developers on
          real projects.
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4  mx-auto mt-5 flex flex-col">
          <div className=" text-center text-sm text-gray-600 dark:text-gray-400 font-lato">
            <span>Applications are currently closed for Internships.</span>{" "}
            <span>
              Subscribe to newsletter to recieve updates about Internship
              opportunities via email.
            </span>
          </div>
          {/* newsletter  */}
          <div className="hidden lg:flex mx-auto  space-x-4 items-center mt-5 border border-gray-300 rounded-full relative dark:border-gray-600">
            <div>
              <input
                type="text"
                className="lg:w-80 py-2.5 rounded-full focus:outline-none pl-5 pr-32 focus:ring-2 focus:ring-intelzy focus:ring-offset-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <button className="text-white rounded-full py-3 px-6  bg-intelzy absolute right-0 text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
