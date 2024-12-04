import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { COR_Logo_D_PNG, dark, darkfill, light, lightfill } from "../../assets/Images/images";

const Header = () => {

  const [mouseEnter, setMouseEnter] = useState(false);


  const [theme, setTheme] = useState(() => {
    const userTheme = localStorage.getItem("theme");
    if (userTheme) {
      try {
        return userTheme ? JSON.parse(userTheme) : "light";
      } catch (error) {
        console.error("Error parsing theme JSON:", error);
        return "light";
      }
    }
  });

  const setUserTheme = (userTheme) => {
    setTheme(userTheme);
    localStorage.setItem("theme", JSON.stringify(userTheme));
  };

  

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setUserTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <header className="sticky top-0 z-[1000]">
      <div className="h-20 px-10 md:px-16 lg:px-24 flex justify-between items-center text-txtclr border-b-[3px] dark:border-b-gray-700 bg-white dark:bg-Bluecor dark:text-white ">
        <Link to="/"><img src={COR_Logo_D_PNG} className="h-8 md:h-14 dark:invert" alt="Logo" /></Link>
        <div className="flex justify-center items-center">
          <ul className="pr-5 hidden lg:flex justify-between text-xl gap-6 font-semibol border-r-[3px] border-r-gray-500 ">
            <li><Link className="" to="/projects">Projects</Link></li>
            <li><Link className="" to="/locations">Locations</Link></li>
            <li><Link className="" to="/about">About Us</Link></li>
            <li><Link className="" to="/contact">Contact Us</Link></li>
          </ul>
          <button className=" py-2 px-3 mx-5 text-white font-semibold md:text-lg bg-blue-500 dark:bg-blue-700 rounded-3xl ">
            Enquiry </button>

          {/* Theme Toggle */}
          <div className="ml-3" onClick={handleThemeSwitch}>
            {theme === "dark" ? (
              <div
                className="flex"
                onMouseEnter={() => {
                  setMouseEnter(true);
                }}
                onMouseLeave={() => {
                  setMouseEnter(false);
                }}>
                {mouseEnter ? (
                  <img
                    src={lightfill}
                    className="h-8 w-8 hover:rotate-45 duration-300 cursor-pointer"
                    alt="" />
                ) : (
                  <img
                    src={light}
                    className="h-8 w-8 hover:rotate-45 duration-300 cursor-pointer invert"
                    alt="" />
                )}
              </div>
            ) : (
              <div
                className="flex"
                onMouseEnter={() => {
                  setMouseEnter(true);
                }}
                onMouseLeave={() => {
                  setMouseEnter(false);
                }}>
                {mouseEnter ? (
                  <img
                    src={darkfill}
                    className="h-8 w-8 hover:-rotate-[30deg] duration-300 cursor-pointer"
                    alt="" />
                ) : (
                  <img
                    src={dark}
                    className="h-8 w-8 hover:-rotate-[30deg] duration-300 cursor-pointer "
                    alt="" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;