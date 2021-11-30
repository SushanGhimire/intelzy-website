import React from "react";
import faq from "../../assets/images/faq.png";
import QNA from "./integrate/QNA";
function Faqs() {
  return (
    <div className="flex flex-col pt-36 pb-20 ">
      <div className="w-full width mx-auto ">
        <div
          className=" text-center font-black text-gray-800 dark:text-gray-200 flex justify-center"
          style={{
            lineHeight: 1.2,
            fontSize: window.innerWidth < 1024 ? "40px" : "48px",
            fontWeight: 700,
          }}
        >
          Frequently Asked Questions
        </div>
        {/* qna and image  */}
        <div className="md:flex justify-between gap-6 items-center">
          <div className="flex-1">
            <img src={faq} className="mx-auto" alt="" />
          </div>
          <div className="flex-1 px-4">
            <QNA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
