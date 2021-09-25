import React from "react";
import logo from "../../assets/images/intelzyLogo.png";
import logo2 from "../../assets/images/intelzyLogo2.png";
import { useSelector } from "react-redux";
function Footer() {
  const footerContent = [
    {
      title: "Services",
      lists: [
        "Artificial Intelligence",
        "Blockchain",
        "Web Development",
        "App Development",
        "Quality Assurance",
      ],
    },
    {
      title: "Company",
      lists: [
        "About",
        "Blogs",
        "Contact",
        "Careers",
      ],
    },
    {
      title: "Connect",
      lists: ["FAQs", "Support", "Blogs", "Contact"],
    },
    {
      title: "Legal",
      lists: [
        "Terms of Use",
        "Privacy Policy",
       
      ],
    },
  ];
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  var d = new Date();
  var n = d.getFullYear();
  return (
    <div className="bg-footer py-12 width-padding dark:bg-gray-800">
      <div className=" flex flex-col width mx-auto">
        <div>
          <img src={darkmode ? logo2 : logo} className="w-36" alt="" />
        </div>
        {/* grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 px-2.5">
          {footerContent.map((footer, index) => {
            const { title, lists } = footer;
            return (
              <div className="col-span-1 flex flex-col" key={index}>
                {/* title  */}
                <div className="text-lg uppercase text-intelzy tracking-wide">
                  {title}
                </div>
                <ul className="space-y-3 text-gray-700 md:text-xs 2xl:text-base mt-3 dark:text-gray-300">
                  {lists.map((list, index) => {
                    return <li key={index}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        {/* copyright  */}
        <div className=" px-2.5 text-gray-800 font-medium mt-5 pb-10">
          &copy;{n} Intelzy . All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
