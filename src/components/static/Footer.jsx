import React from "react";
import logo from "../../assets/images/intelzyLogo.png";
function Footer() {
  const footerContent = [
    {
      title: "learn more",
      lists: [
        "About",
        "Developers",
        "Download",
        "Documentation",
        "Intelzy Institutional",
      ],
    },
    {
      title: "Get involved",
      lists: [
        "GitHub",
        "Gitcoin",
        "Open Position",
        "Swag Shop",
        "Press & Partnership",
      ],
    },
    {
      title: "Connect",
      lists: ["FAQs", "Support", "Blog", "Twitter", "INtelzy Institutional"],
    },
    {
      title: "Legal",
      lists: [
        "Privacy Policy",
        "Terms of Use",
        "Contributor License Agreement",
      ],
    },
  ];
  var d = new Date();
  var n = d.getFullYear();
  return (
    <div className="bg-footer py-12 width-padding">
      <div className=" flex flex-col width mx-auto">
        <div>
          <img src={logo} className="w-36" alt="" />
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
                <ul className="space-y-3 text-gray-700 md:text-xs 2xl:text-base mt-3">
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
          &copy;{n} Intelzy
        </div>
      </div>
    </div>
  );
}

export default Footer;
