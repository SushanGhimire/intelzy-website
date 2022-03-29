import React from "react";
import software from "../../assets/images/software.webp";
const BillingSoftware = () => {
  return (
    <div
      className={`flex flex-col py-32 px-5 md:px-10 lg:px-0 bg-lighGray dark:bg-gray-800`}
    >
      <div className="md:flex width mx-auto items-center justify-between  gap-10">
        <div className="flex-1">
          <div>
            <div className="text-2xl md:text-3xl text-center font-black text-gray-800 dark:text-gray-200">
              #1 Free GST Billing & Invoicing Software in Nepal
            </div>
            <div className="mt-2 text-gray-700 text-sm md:text-base dark:text-gray-400 text-justify">
              Manage your complete business with Vyapar. Best software for
              billing, inventory accounting.Most simple, secure easy Software.
              Download Now!
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={software} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BillingSoftware;
