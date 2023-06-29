import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Logout
  const handleLogout = () => {
    localStorage.clear();
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out Successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          Home
        </NavLink>
      </li>
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
      {user && (
        <li>
          <button onClick={handleLogout}>
            <div className="my-btn">Log Out</div>
          </button>
        </li>
      )}
      <li className="">
        {user ? (
          <div className="w-8 rounded-full">
            {user?.photoURL ? (
              <div className="w-[38px] h-[38px] rounded-full overflow-hidden border-sky-400  p-[1px] border-2">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                  className="w-full  object-cover rounded-full h-full"
                />
              </div>
            ) : (
              <FaUserCircle className="text-[38px]" />
            )}
          </div>
        ) : (
          <Link to="/login" className="my-btn">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className=" bg-[#FFF9F9]  text-[#283163]">
      <div className=" relative md:h-[100px] ">
        <div className="my-container relative   flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <div style={{ fontFamily: 'Reenie Beanie' }} className="lg:h-[41px] bg-white grid justify-center items-center lg:w-[41px] md:h-10 md:w-10 h-8 w-8 border border-[#283163] rounded">
              <p className="text-3xl">M</p>
              
              {/* <img
                className="bg-white"
                src="https://i.postimg.cc/bJz7pg0k/m.jpg"
                alt="logo"
              /> */}
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
