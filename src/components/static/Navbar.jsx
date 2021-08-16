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
  const contents = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "About Us",
      path: "/about-us",
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
    <div className=" w-full bg-white sticky top-0 right-0 z-50 width-padding">
      <div className="width  mx-auto">
        <div
          className={`w-full flex justify-between py-6  items-center animation`}
        >
          {/* logo  */}
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
            }}
            className="w-32"
          >
            <img src={logo} className="w-full" alt="" />
          </Link>
          {/* for laptops */}
          {/* content  */}
          {width > 1023 && (
            <div className="flex space-x-5 items-center">
              {contents.map((content, index) => {
                const { name, path } = content;
                return (
                  <Link
                    to={path}
                    key={index}
                    className="animation hover:text-primaryYellow"
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    {name}
                  </Link>
                );
              })}
              {loggedIn && role === "ROLE_ADMIN" && (
                <Link
                  to="/dashboard"
                  className="  text-gray-700 px-8 py-2 rounded-full text-sm sm:text-base mb-1"
                >
                  Dashboard
                </Link>
              )}
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
                const { name, path } = content;
                return (
                  <Link
                    to={path}
                    key={index}
                    onClick={() => {
                      toggleMobileSidebar();
                      scrollToTop();
                    }}
                    className="py-2 "
                  >
                    {name}
                  </Link>
                );
              })}
              {loggedIn && role === "ROLE_ADMIN" && (
                <Link
                  to="/dashboard"
                  className=" text-gray-700 px-8 py-2 rounded-full text-sm sm:text-base mb-1"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
