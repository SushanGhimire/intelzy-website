import React from "react";
import RecentJobs from "./RecentJobs";
import TitleSubCat from "./TitleSubCat";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
function CareerResult() {
  const [jobDetail, setJobDetail] = React.useState([]);
  const { slug } = useParams();
  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axiosInstance
      .get(`/jobvacancy/detail/${slug}/`, { signal })
      .then((res) => {
        setJobDetail(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [slug]);
  return (
    <div className="flex flex-col ">
      {/* <FrontPage
        header="A gate way to your career"
        des="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
        scroll="position"
      /> */}
      <div
        className="md:flex w-full width  width-padding mx-auto md:space-x-4 mb-10 mt-32"
        id="position"
      >
        {/* right side  */}
        <div className="flex-1 flex-flex-col  md:border-r border-gray-200 dark:border-gray-600">
          {jobDetail && (
            <TitleSubCat
              title={jobDetail.title}
              job_type={jobDetail.job_type}
              posted={jobDetail.created_at}
              location={jobDetail.location}
            />
          )}
          {/* main description  */}
          <div
            className="font-lato mt-10 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: jobDetail.description }}
          ></div>
          {/* Apply */}
          <div className="flex flex-col mt-10">
            <div className="text-lg font-medium dark:text-gray-200">Apply:</div>
            <span className="mt-5 font-lato dark:text-gray-400">
              Interested candidates fulfilling the criteria mentioned above are
              highly encouraged to send a cover letter with their updated resume
              at <strong> jobs@intelzy.co</strong>
            </span>
          </div>
          <div className="mt-10">
            <a href="mailto:jobs@intelzy.com.np">
              <button className="button-style">Apply For Job</button>
            </a>
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
