import React from "react";
import FrontPage from "../common/FrontPage";
import Duties from "./Duties";
import Position from "./Position";

function CareerResult() {
  const dutiesLists = [
    " SEO, Social Media Marketing, Email Marketing, Google Adsense Marketing and Affiliate Marketing in one plan with marketing targets (reach, engagement, conversions) and revenue target (Ex. $100,000 in six months).",
    "Help select the right tools for sales and marketing.",
    "Designate/Outsource marketing tasks as per need.",
    "Monitor implementation and co-ordinate with the team.",
    "Learn new marketing ideas and incorporate that in the plan.",
    "Attending workshops and meetings as required.",
    "Providing training to new marketing staff.",
    "Preparing and submitting periodic reports.",
  ];
  const positionList = [
    " 1 years plus experience of working in sales and marketing for e-commerce, SAAS industry or similar. ",
    "Fluent in speaking and writing English and Nepali.",
    "Computer Skills (Word, Excel, Cloud based software, Emails)",
    "Educational Qualification - Should have passed high school at least.",
  ];
  return (
    <div className="flex flex-col">
      <FrontPage
        header="A gate way to your career"
        des="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
        scroll="position"
      />
      <div
        className="flex flex-col w-full width  width-padding mx-auto"
        id="position"
      >
        {/* about the position  */}
        <div className="flex flex-col">
          <div className="text-3xl dark:text-gray-200">About the position</div>
          <Position />
        </div>
        {/* job desc  */}
        <div className="flex flex-col mt-7">
          <div className="text-3xl mb-2 dark:text-gray-200  ">
            Job Description
          </div>
          <span className="text-gray-800 font-sans dark:text-gray-400 ">
            We are looking for a young and dynamic individual for the position
            of Marketing Lead. The Marketing Lead will be responsible for
            designing a target-based marketing strategy, leading its executing,
            monitoring and reporting it, for ReconwithMe, a SAAS product for
            website security.
          </span>
        </div>
        {/* Duties  */}
        <div className="flex flex-col mt-7">
          <div className="text-3xl mb-2 dark:text-gray-200">
            Duties and Responsibilities
          </div>
          <span className="text-gray-800 font-sans mb-3 dark:text-gray-400">
            Designing and implementing target-based marketing strategy for
            Reconwithme, a SAAS product for website security that includes -
          </span>
          <Duties lists={dutiesLists} />
        </div>
        {/* Requirements  */}
        <div className="flex flex-col mt-7">
          <div className="text-3xl mb-2 dark:text-gray-200">Requirements</div>
          <Duties lists={positionList} />
        </div>
        {/* About  */}
        <div className="flex flex-col mt-7">
          <div className="text-3xl mb-2 dark:text-gray-200">About Intelzy</div>
          <span className="text-gray-800 font-sans mb-2 dark:text-gray-400">
            Intelzy is a solution for website security and an early stage
            startup in the cybersecurity industry. One can use ReconwithMe to
            know your website's security status, find weaknesses, manage bugs
            and fix them. We’re looking for highly talented and ambitious
            individuals to grow our team and the product.
          </span>
          <span>
            <strong className="dark:text-gray-200">Work Location </strong>
            <span className="text-gray-800 font-sans dark:text-gray-400">
              - Saptagandaki Chock, Chitwan, Above Ujeli creation
            </span>
          </span>
          <span className="text-gray-800 font-sans mt-16 mb-28 dark:text-gray-200">
            Interested candidates can apply by sending their CVs at
            <span className="text-intelzy underline ml-2">
              info@reconwithme.com
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CareerResult;
