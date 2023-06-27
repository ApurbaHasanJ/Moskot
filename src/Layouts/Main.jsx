import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Components/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();

  // Check if the current location is the home page, login page, or signup page
  const isNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Main;
