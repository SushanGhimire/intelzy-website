import React from "react";
import axiosInstance from "../../api/axiosInstance";

function OurTeam() {
  const [ourTeam, setOurTeam] = React.useState([]);
  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axiosInstance
      .get(`/team/list/`, { signal })
      .then((res) => {
        setOurTeam(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col mt-20 py-20 bg-gray-100 dark:bg-gray-700">
      <div className=" font-black text-gray-800 dark:text-gray-200 text-4xl text-center">
        Meet the Team
      </div>
      <div className="text-center text-gray-700 mt-2 dark:text-gray-400 width mx-auto ">
        With over 100 of years of combined experience, we've got a well-seasoned
        team at the helm.
      </div>
      {/* grid  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 mt-10 width  width-padding mx-auto ">
        {ourTeam.map((team, index) => {
          const { name, image, designation } = team;
          return (
            <div key={index} className="flex flex-col">
              {/* image  */}
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-28 h-28 rounded-full object-cover mx-auto"
                />
              </div>
              <span className="font-black mt-3 text-center dark:text-gray-200">
                {name}
              </span>
              <span className="font-lato text-sm text-center dark:text-gray-400">
                {designation}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
