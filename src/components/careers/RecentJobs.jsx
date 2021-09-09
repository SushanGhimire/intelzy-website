import React from "react";
import Jobs from "./Jobs";

function RecentJobs() {
  const jobs = [
    {
      title: "Sr. Frontend Engineer (ReactJs)",
      status: "Full Time",
      date: "2020-02-23",
    },
    {
      title: "Software Engineer (MERN)",
      status: "Part Time",
      date: "2020-02-23",
    },
    {
      title: "Software Engineer (Backend)",
      status: "Full Time",
      date: "2020-02-23",
    },
    {
      title: "Sr. WordPress Developer",
      status: "",
      date: "2020-02-23",
    },
    {
      title: "Flutter Developer",
      status: "Full Time",
      date: "2020-02-23",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* title  */}
      <div className="text-2xl font-semibold dark:text-gray-200">
        Recent Jobs
      </div>
      {jobs.map((j, index) => {
        return <Jobs {...j} key={index} />;
      })}
    </div>
  );
}

export default RecentJobs;
