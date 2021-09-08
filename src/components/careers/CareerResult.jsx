import React from "react";
import FrontPage from "../common/FrontPage";
import Listing from "./Listing";
import RecentJobs from "./RecentJobs";
import TitleSubCat from "./TitleSubCat";

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
        className="md:flex w-full width  width-padding mx-auto md:space-x-4 my-10"
        id="position"
      >
        {/* right side  */}
        <div className="flex-1 flex-flex-col  md:border-r border-gray-200 dark:border-gray-600">
          <TitleSubCat />
          {/* main description  */}
          <div className="flex flex-col font-lato mt-5 dark:text-gray-400">
            <span>
              Intelzy is looking for a Software Engineer who is motivated and
              confident to work in the following stacks:
            </span>
            <ul className="mt-3 mb-5">
              <li>- Reactjs & NodeJs,</li>
              <li>- SQL and NoSQL databases</li>
              <li>- GraphQL</li>
            </ul>
            <span>
              An ideal candidate is someone who has at least two years of
              professional full-stack development experience.
            </span>
          </div>
          {/* qualification */}
          <div className="flex flex-col mt-10">
            <div className="text-lg font-medium dark:text-gray-200">
              Technical Qualifications:
            </div>
            <Listing lists={dutiesLists} />
          </div>
          {/* company benifits  */}
          <div className="flex flex-col mt-10">
            <div className="text-lg font-medium dark:text-gray-200">
              Company Benefits:
            </div>
            <Listing lists={positionList} />
          </div>
          {/* Apply */}
          <div className="flex flex-col mt-10">
            <div className="text-lg font-medium dark:text-gray-200">Apply:</div>
            <span className="mt-5 font-lato dark:text-gray-400">
              Interested candidates fulfilling the criteria mentioned above are
              highly encouraged to send a cover letter with their updated resume
              at <strong> jobs@intelzy.com.np</strong>
            </span>
          </div>
          <div className="mt-10">
            <button className="button-style">Apply For Job</button>
          </div>
        </div>
        {/* left side  */}
        <div className="w-72 flex flex-col mt-20 md:mt-0">
          <RecentJobs />
        </div>
      </div>
    </div>
  );
}

export default CareerResult;
