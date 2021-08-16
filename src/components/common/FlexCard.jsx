import React from "react";

function FlexCard({ content, flex, img, des }) {
  return (
    <div
      className={`md:flex ${flex} items-center mt-10 space-x-10  width mx-auto width-padding`}
      id="scroll"
    >
      {/* content  */}
      <div
        className={`flex-1 text-center md:text-left ${
          flex === "flex-row " ? "md:pr-10" : "md:pl-10"
        }`}
      >
        <div className="title-text">{content}</div>
        <div className="mt-2 text-gray-700 text-sm md:text-base">{des}</div>
      </div>
      {/* image  */}
      <div className="flex-1 mt-10 md:mt-0">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default FlexCard;
