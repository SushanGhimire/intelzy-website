import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/images/intelzyLogo.png";
import logo2 from "../../assets/images/intelzyLogo2.png";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/action";
function Navbar({ loggedIn, role }) {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);
  const mobileSidebar = useRef();
  const coverAll = useRef();
  const darkmode = useSelector((state) => state.darkmode.darkmode);
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
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Careers",
      path: "/careers",
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
  const toggleDarkMode = () => {
    dispatch(actions.darkToggle());
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
    <div className={`${darkmode === true ? "dark" : ""}`}>
      <div
        className={`w-full fixed top-0 right-0 z-50 width-padding ${
          position ? "bg-white dark:bg-gray-900" : ""
        } ${darkmode ? "border-b border-gray-800 dark" : ""}`}
        onMouseLeave={() => setShowIndex("0")}
      >
        <div className="absolute top-9 sm:top-12 lg:top-9 right-32 lg:right-6">
          <div
            className="p-1 bg-intelzy dark:bg-gray-200 w-14 rounded-full cursor-pointer"
            onClick={toggleDarkMode}
          >
            <div
              className={` rounded-full  animation cursor-pointer 
              transform ${darkmode ? "translate-x-6" : ""}`}
            >
              <div className="bg-white dark:bg-gray-900 dark:text-gray-200 rounded-full w-6 h-6 flex justify-center items-center relative group">
                <div className="hidden lg:flex absolute bg-white w-28 rounded-md opacity-0 group-hover:opacity-100 top-10 right-0 px-2 dark:text-gray-800">
                  {!darkmode ? "dark mode" : "light mode"}
                </div>
                {darkmode ? (
                  <svg
                    className="w-5 h-5 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
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
              <img
                src={darkmode ? logo2 : logo}
                className="w-28 sm:w-full animation"
                alt=""
              />
            </Link>
            {/* for laptops */}
            {/* content  */}
            {width > 1023 && (
              <div className="flex space-x-7 items-center text-gray-800 dark:text-gray-200">
                {Array.isArray(contents) &&
                  contents.map((content, index) => {
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
                            {subLists && <KeyboardArrowDownOutlinedIcon />}
                          </div>
                        </Link>
                        {subLists && showIndex === index && (
                          <div className="bg-white space-y-1 box-shadow p-1 absolute -right-4 top-16 w-32 flex flex-col rounded-lg">
                            {Array.isArray(subLists) &&
                              subLists.map((sub, index) => {
                                return (
                                  <div
                                    className={`p-2 cursor-pointer rounded-md hover:bg-red-50 hover:text-intelzy dark:text-gray-700 dark:hover:text-intelzy`}
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
                  <button className="button-style">Career</button>
                </div>
              </div>
            )}

            {width < 1024 && (
              <div className="filter rounded-full bg-gray-100 px-3 bg-opacity-50 text-gray-800 dark:text-gray-200 dark:bg-gray-800">
                <MenuIcon
                  className="cursor-pointer "
                  onClick={toggleMobileSidebar}
                  style={{
                    fontSize: 30,
                  }}
                />
              </div>
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
              className="fixed top-0 left-0 h-screen w-0 z-20 bg-white dark:bg-gray-900 text-black transition-all duration-300 overflow-hidden"
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
                  <img src={darkmode ? logo2 : logo} alt="" />
                </Link>
                {Array.isArray(contents) &&
                  contents.map((content, index) => {
                    const { name, path, subLists } = content;
                    return (
                      <div key={index} className={`flex flex-col `}>
                        <Link
                          to={path}
                          className="py-2 flex space-x-1  justify-center dark:text-gray-200"
                          onClick={() => setShowIndex(index)}
                        >
                          <div>{name}</div>
                          {subLists && (
                            <div>
                              <KeyboardArrowDownOutlinedIcon />
                            </div>
                          )}
                        </Link>
                        <div
                          className={` animation space-y-1 overflow-hidden ${
                            showIndex === index
                              ? "max-height-drop bg-red-50 dark:bg-gray-700 dark:text-gray-300 rounded-md "
                              : "max-h-0"
                          }`}
                        >
                          {Array.isArray(subLists) &&
                            subLists.map((sub, index) => {
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
    </div>
  );
}

export default Navbar;
