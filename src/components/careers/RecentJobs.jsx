import React from "react";
import axiosInstance from "../../api/axiosInstance";
import Jobs from "./Jobs";

function RecentJobs() {
  const [recentJobs, setRecentJobs] = React.useState([]);
  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axiosInstance
      .get(`/jobvacancy/list/`, { signal })
      .then((res) => {
        setRecentJobs(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col h-100 overflow-auto">
      {/* title  */}
      <div className="text-2xl font-semibold dark:text-gray-200">
        Recent Jobs
      </div>
      {recentJobs.map((j, index) => {
        return <Jobs {...j} key={index} />;
      })}
    </div>
  );
}

export default RecentJobs;
