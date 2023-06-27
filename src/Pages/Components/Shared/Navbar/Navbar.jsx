import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBell } from "react-icons/bs";
// import { HiMiniBars3BottomRight, } from 'react-icons/hi';
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/availability"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          Availability
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/integration"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          Integration
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          //   to="/notifications"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="rounded-full relative border border-[#283163] w-[38px] h-[38px]  flex justify-center items-center">
            <BsBell className="text" />
            <div className="bg-[#679AFA] absolute top-0 right-0 rounded-full text-white w-4 text-xs flex justify-center items-center h-4">
              3
            </div>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          
          <div className="my-btn">Login</div>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-[#FFF9F9]  text-[#283163]">
      <div className="px-4 relative md:h-[100px]  md:px-24 lg:px-8">
        <div className="my-container relative  sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <div className="lg:h-[41px] bg-white grid justify-center items-center lg:w-[41px] md:h-10 md:w-10 h-8 w-8 border border-[#283163] rounded">
              <img
                className="bg-white"
                src="https://i.postimg.cc/bJz7pg0k/m.jpg"
                alt="logo"
              />
            </div>
            <span className="ml-2 lg:text-4xl md:text-3xl text-base tracking-wide text-gray-800">
              <div className="flex relative">
                <span className="font-bold">Mos</span>
                <span className="font-normal">kot</span>

                <p className="text-[10px] absolute -top-2 -right-5">TM</p>
              </div>
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center ml-auto text-lg hidden space-x-8 lg:flex">
            {navItems}
          </ul>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}>
              <Bars3BottomRightIcon className="w-7 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <div className="lg:h-[41px] bg-white grid justify-center items-center lg:w-[41px] md:h-10 md:w-10 h-8 w-8 border border-[#283163] rounded">
                          <img
                            className="bg-white"
                            src="https://i.postimg.cc/bJz7pg0k/m.jpg"
                            alt="logo"
                          />
                        </div>
                        <span className="ml-2 lg:text-4xl md:text-3xl text-base tracking-wide text-gray-800">
                          <div className="flex relative">
                            <span className="font-bold">Mos</span>
                            <span className="font-normal">kot</span>

                            <p className="text-[10px] absolute -top-2 -right-5">
                              TM
                            </p>
                          </div>
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}>
                        <XMarkIcon className="w-7 hover:bg-slate-200 hover:rounded-xl text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">{navItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
