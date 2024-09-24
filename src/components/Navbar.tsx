import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white flex w-full">
      <div className="hidden md:flex  items-center justify-end h-16 w-full gap-9 mr-20 ">
        <ul className="hidden md:flex items-center gap-12 text-base">
          <li>
            <NavLink to="/home" className="p-3  transition-all cursor-pointer">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="p-3  transition-all cursor-pointer">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="p-3  transition-all cursor-pointer"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="p-3  transition-all cursor-pointer"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden max-md:flex items-center justify-center h-16 w-full gap-9">
        <ul className="hidden max-md:flex items-center gap-12 text-base">
          <li className="">
            <NavLink
              to="/home"
              className="p-3  transition-all cursor-pointer text-4xl"
            >
              <MdHomeFilled className=" text-center" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="p-3  transition-all cursor-pointer text-4xl"
            >
              <CgProfile />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="p-3  transition-all cursor-pointer text-3xl"
            >
              <GrProjects />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="p-3  transition-all cursor-pointer text-4xl"
            >
              <MdOutlineAlternateEmail />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
