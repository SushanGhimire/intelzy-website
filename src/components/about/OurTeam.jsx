import React from "react";

function OurTeam() {
  const teams = [
    {
      name: "Aaron Davis",
      post: "Sr. Flask Developer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Niranjana Binoy",
      post: "Sr.Django  Developer",
      img: "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=630&q=80",
    },
    {
      name: "David Walsh",
      post: "Jr. Flask Developer",
      img: "https://images.unsplash.com/photo-1577694379674-3da6daf767ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Dan Finlay",
      post: "Jr. Django Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Etienne Dusseault",
      post: "Nodejs Developer",
      img: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    },
    {
      name: "Jacob Cantele",
      post: "React Developer",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Dan Finlay",
      post: "Vue Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Jacob Cantele",
      post: "Rust Developer",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Etienne Dusseault",
      post: "Ruby Developer",
      img: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    },
    {
      name: "Niranjana Binoy",
      post: "Angular Developer",
      img: "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=630&q=80",
    },
    {
      name: "David Walsh",
      post: "Selvet Developer",
      img: "https://images.unsplash.com/photo-1577694379674-3da6daf767ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Aaron Davis",
      post: "Laravel Developer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Etienne Dusseault",
      post: "Nodejs Developer",
      img: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    },
    {
      name: "Jacob Cantele",
      post: "React Developer",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Dan Finlay",
      post: "Vue Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Jacob Cantele",
      post: "Rust Developer",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Etienne Dusseault",
      post: "Ruby Developer",
      img: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    },
    {
      name: "Dan Finlay",
      post: "Vue Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];
  return (
    <div className="flex flex-col my-20">
      <div className=" font-black text-gray-800 dark:text-gray-200 text-4xl text-center">
        Our Team
      </div>
      {/* grid  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 mt-10">
        {teams.map((team, index) => {
          const { name, post, img } = team;
          return (
            <div key={index} className="flex flex-col">
              {/* image  */}
              <div>
                <img
                  src={img}
                  alt=""
                  className="w-28 h-28 rounded-full object-cover mx-auto"
                />
              </div>
              <span className="font-black mt-3 text-center dark:text-gray-200">
                {name}
              </span>
              <span className="font-lato text-sm text-center dark:text-gray-400">
                {post}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
