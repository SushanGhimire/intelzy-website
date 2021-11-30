import React from "react";
import logo from "../../assets/images/intelzyLogo.png";
import logo2 from "../../assets/images/intelzyLogo2.png";
import { useSelector } from "react-redux";
function Footer() {
  const footerContent = [
    {
      title: "Services",
      lists: [
        { name: "Artificial Intelligence" },
        { name: "Blockchain" },
        { name: "Web Development" },
        { name: "App Development" },
        { name: "Quality Assurance" },
      ],
    },
    {
      title: "Company",
      lists: [
        { name: "About", link: "/about-us" },
        { name: "Services", link: "/services" },
        { name: "Blog", link: "https://medium.com/@intelzy" },
        { name: "Contact", link: "/contact-us" },
        { name: "Careers", link: "/careers" },
      ],
    },
    {
      title: "Connect",
      lists: [
        { name: "FAQs", link: "/faqs" },
        { name: "Contact", link: "/" },
      ],
    },
    {
      title: "Legal",
      lists: [
        // { name: "Terms of Use", link: "/" },
        { name: "Privacy Policy", link: "/" },
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
                <div className="space-y-3 text-gray-700 md:text-xs 2xl:text-base mt-3 dark:text-gray-300 flex flex-col">
                  {lists.map((list, index) => {
                    return (
                      <div key={index}>
                        {list.link ? (
                          <a
                            href={list.link}
                            // target="_blank"
                            // key={index}
                            // rel="noreferrer"
                            className="cursor-pointer"
                          >
                            {list.name}
                          </a>
                        ) : (
                          <div
                            // key={index}
                            className="cursor-pointer"
                          >
                            {list.name}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* copyright  */}
        <div className=" px-2.5 text-gray-800 dark:text-gray-300 font-medium mt-5 pb-10">
          &copy;{n} Intelzy . All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
