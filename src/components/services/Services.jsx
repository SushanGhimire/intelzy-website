import React from "react";
// import ServiceCard from "./ServiceCard";
import ServiceCard2 from "./ServiceCard2";

function Services() {
  let services = [
    {
      sn: "1",
      title: "Artificial Intelligence & Machine Learning",
      des: " We perform AI-based algorithms like a machine & deep learning to automate any operation, gain insights from big data, and ensure fail-safe decisions of our clients.",
      flex: "left",
    },
    {
      sn: "2",
      title: "Internet Of Things",
      des: "We use IOT devices to monitor your operations in a secure, well-built infrastructure continually. They will gather you Big data, helping you to streamline these operations , gain spot-on insights & improve decisions .",
      flex: "right",
    },
    {
      sn: "3",
      title: "Blockchain",
      des: "We use a private blockchain to make your business data more secure , automate key operations with Smart Contracts, creating a blockchain-based marketplace,and more.",
      flex: "left",
    },
    {
      sn: "4",
      title: "Business Intelligence",
      des: "We use business intelligence to greatly enhance to track key metrics and organize on goals its decision-making by using data to answer all queries.",
      flex: "right",
    },
    {
      sn: "5",
      title: "Software Development",
      des: "We emerge from the simplest website to the most complex web-based applications and recommend the configuration bringing forth quality,reliability & cost-effective customized softwares services to clients.",
      flex: "left",
    },
    {
      sn: "6",
      title: "DevOps",
      des: "We ensure fast , continuous delivery & consistently high level of software quality DevOps will help achieve this by automating & optimizing IT processes. We will help you attune the delivery, deployment, development, security & support of any high-load,fail-safe system with micro services architecture.",
      flex: "right",
    },
    {
      sn: "7",
      title: "Web Development",
      des: "We develop websites keeping in mind the latest updates in the cyber space and making sure that the website developed is up-to-date with current technologies and updates from Google, with innovative ideas and  decades of exposure to the software industry & committed to high quality services.",
      flex: "left",
    },
    {
      sn: "8",
      title: "App Development",
      des: "Our mobile app developers have over a great decade-long expertise in building solutions that meet market needs ,empower companies’ brand identity & encourage business growth & expansion.",
      flex: "right",
    },
    {
      sn: "9",
      title: "Digital Marketing",
      des: "Our digital marketers will help you garner new traffic, leads, and sales of your business by reaching people looking for your products and services as it is the process of marketing your client's platform online to prospective leads and high-value consumers.",
      flex: "left",
    },
    {
      sn: "10",
      title: "Quality Assurance",
      des: "Our QA services will help you establish concrete control over your product’s life cycle, monitor every development stage & give you accurate product quality information by using latest practises & technologies to ensure efficient performance & high quality project implementation.",
      flex: "right",
    },
    {
      sn: "11",
      title: "Crypto Consulting",
      des: "We help new blockchain firms development & growth strategies by advicing about developing and implementing key blockchain strategies that can optimize business efficiency  by analyzing the effective blockchain of a company and developing a plan for implementing it.",
      flex: "left",
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col w-full width  width-padding mx-auto mb-10 mt-32">
        <div className=" font-black text-gray-800 dark:text-gray-200 text-4xl text-center">
          Areas Of Expertise
        </div>
        {/* grid card  */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          {services.map((service, index) => {
            return <ServiceCard key={index} {...service} />;
          })}
        </div> */}
        <div className="flex flex-col mt-10">
          {services.map((service, index) => {
            return <ServiceCard2 key={index} {...service} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
