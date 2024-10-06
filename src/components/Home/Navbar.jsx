import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="lg:w-11/12 px-4 md:px-8 lg:px-0 mx-auto">
      <div className="py-5 flex font-poppins  items-center justify-between ">
        <div className="relative flex items-center ">
          <h1 className="lg:w-10 lg:h-10 w-8 h-8 md:h-9 md:w-9 inline-block bg-[#65daff] transform rotate-45"></h1>
          <h1 className=" lg:text-3xl md:text-2xl  text-xl font-semibold absolute left-2 top-[1px] text-[#113c49]">
            WiseLearn
          </h1>
        </div>
        <ul className=" hidden lg:flex  space-x-4  lg:space-x-12">
          <li className=" text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="">Home</a>
          </li>
          <li className=" text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="">Careers</a>
          </li>
          <li className=" text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="">Blog</a>
          </li>
          <li className=" text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="">About Us</a>
          </li>
        </ul>
        <div className=" flex items-center lg:space-x-10 md:space-x-10 space-x-1">
          <button className="bg-white shadow-md w-[80px] lg:w-[110px] py-2 rounded-full text-[#6c6c6c] hover:bg-[#f48c06] hover:text-white transition-colors duration-200 ">
            Login
          </button>
          <button className="shadow-md w-[90px] lg:w-[110px] py-2 rounded-full text-white bg-[#f48c06] hover:bg-[#e07c05] transition-colors duration-200">
            Sing Up
          </button>
          <div
            onClick={() => setShowMenu(true)}
            className="lg:hidden cursor-pointer"
          >
            <RiMenu3Line size={26} />
          </div>
        </div>
      </div>
      <div
        className={`fixed  pl-20 pt-24 transition-all duration-500 bg-white h-full w-full top-0 left-0 ${
          showMenu ? "h-full w-full visible " : "h-0 w-0 hidden"
        }`}
      >
        <div className="relative flex items-center mb-9 ">
          <h1 className="h-12 w-12 inline-block bg-[#65daff] transform rotate-45"></h1>
          <h1 className=" text-4xl font-semibold absolute left-2 top-[1px] text-[#113c49]">
            WiseLearn
          </h1>
        </div>
        <ul className="space-y-6 ">
          <li className="text-xl font-medium text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="#">Home</a>
          </li>
          <li className="text-xl font-medium text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="#">Careers</a>
          </li>
          <li className="text-xl font-medium text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="#">Blog</a>
          </li>
          <li className="text-xl font-medium text-[#252641] hover:text-[#f48c06] transition-colors duration-200">
            <a href="#">About Us</a>
          </li>
        </ul>
        <div
          onClick={() => setShowMenu(false)}
          className="absolute top-5 right-6"
        >
          <RxCross1 className="" size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
