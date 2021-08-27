import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/images/intelzyLogo.png";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
function Navbar({ loggedIn, role }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);
  const mobileSidebar = useRef();
  const coverAll = useRef();
  const [showIndex, setShowIndex] = useState("");
  const contents = [
    {
      name: "Features",
      path: "/features",
      subLists: ["Feature-1", "Feature-2"],
    },
    {
      name: "Support",
      path: "/support",
      subLists: ["Support-1", "Support-2"],
    },
    {
      name: "About",
      path: "/about",
      subLists: ["About-1", "About-2"],
    },
    {
      name: "Build",
      path: "/build",
      subLists: ["Build-1", "Build-2"],
    },
  ];
  // toggle in mobile
  const toggleMobileSidebar = () => {
    const sidebar = mobileSidebar.current;
    const coverall = coverAll.current;
    if (sidebar.clientWidth > 0) {
      sidebar.style.width = "0";
      coverall.style.display = "none";
    } else {
      sidebar.style.width = "288px";
      coverall.style.display = "block";
    }
  };

  // if user is using screen width of laptop and changes to lower than 1023px width, call the function
  // if user is using screen width of ipad or mobile and changes to higher than 1024px width, call the function
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1023 && width < 1024) {
      setWidth(innerWidth);
    } else if (innerWidth < 1024 && width > 1023) {
      setWidth(innerWidth);
    }
  };
  const scrollToTop = () => window.scrollTo(0, 0);
  const handleScroll = () => {
    if (window.pageYOffset > 0 && position === 0) {
      setPosition(1);
    } else if (window.pageYOffset === 0 && position > 0) {
      setPosition(0);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleWidth);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`w-full fixed top-0 right-0 z-50 width-padding animation ${
        position ? "bg-white" : ""
      }`}
      onMouseLeave={() => setShowIndex("0")}
    >
      <div className="width  mx-auto  py-9 lg:py-0 ">
        <div className={`w-full flex justify-between items-center animation`}>
          {/* logo  */}
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
            }}
            className="w-40"
          >
            <img src={logo} className="w-full" alt="" />
          </Link>
          {/* for laptops */}
          {/* content  */}
          {width > 1023 && (
            <div className="flex space-x-7 items-center text-gray-800">
              {contents.map((content, index) => {
                const { name, path, subLists } = content;
                return (
                  <div key={index} className="relative">
                    <Link
                      to={path}
                      className={`animation flex  py-9  space-x-1  
                      ${position ? "hover:text-intelzy" : " hover:text-white"}`}
                      onClick={() => {
                        scrollToTop();
                      }}
                      onMouseEnter={() => setShowIndex(index)}
                    >
                      <div> {name}</div>
                      <div>
                        <KeyboardArrowDownOutlinedIcon />
                      </div>
                    </Link>
                    {showIndex === index && (
                      <div className="bg-white space-y-1 box-shadow p-1 absolute -right-4 top-16 w-32 flex flex-col rounded-lg">
                        {subLists.map((sub, index) => {
                          return (
                            <div
                              className={`p-2 cursor-pointer rounded-md hover:bg-red-50 hover:text-intelzy `}
                              key={index}
                            >
                              {sub}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div>
                <button className="text-white rounded-full py-2 px-6  bg-intelzy">
                  Career
                </button>
              </div>
            </div>
          )}

          {width < 1024 && (
            <MenuIcon
              className="cursor-pointer"
              onClick={toggleMobileSidebar}
            />
          )}
        </div>
      </div>
      {/* for ipads and mobiles */}
      {width < 1024 && (
        <>
          <div
            className="h-screen w-screen fixed left-0 top-0 bg-black bg-opacity-20 hidden"
            ref={coverAll}
            onClick={toggleMobileSidebar}
          ></div>
          <div
            className="fixed top-0 left-0 h-screen w-0 z-20 bg-white text-black transition-all duration-300 overflow-hidden"
            ref={mobileSidebar}
          >
            <div className="w-72 flex flex-col px-8 text-center">
              <Link
                to="/"
                className="text-2xl md:text-3xl  py-5  text-center"
                onClick={() => {
                  toggleMobileSidebar();
                  scrollToTop();
                }}
              >
                <img src={logo} alt="" />
              </Link>
              {contents.map((content, index) => {
                const { name, path, subLists } = content;
                return (
                  <div key={index} className={`flex flex-col `}>
                    <Link
                      to={path}
                      className="py-2 flex space-x-1  justify-center"
                      onClick={() => setShowIndex(index)}
                    >
                      <div>{name}</div>
                      <div>
                        <KeyboardArrowDownOutlinedIcon />
                      </div>
                    </Link>
                    <div
                      className={` animation space-y-1 overflow-hidden ${
                        showIndex === index
                          ? "max-height-drop bg-red-50 rounded-md "
                          : "max-h-0"
                      }`}
                    >
                      {subLists.map((sub, index) => {
                        return (
                          <div
                            className="py-2"
                            key={index}
                            onClick={() => {
                              toggleMobileSidebar();
                              scrollToTop();
                            }}
                          >
                            {sub}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
