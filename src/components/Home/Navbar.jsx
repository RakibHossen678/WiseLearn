const Navbar = () => {
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
        <div className=" flex items-center lg:space-x-10 md:space-x-10 space-x-4">
          <button className="bg-white shadow-md w-[90px] lg:w-[110px] py-2 rounded-full text-[#6c6c6c] hover:bg-[#f48c06] hover:text-white transition-colors duration-200 ">
            Login
          </button>
          <button className="shadow-md w-[90px] lg:w-[110px] py-2 rounded-full text-white bg-[#f48c06] hover:bg-[#e07c05] transition-colors duration-200">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
