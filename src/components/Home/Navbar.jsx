const Navbar = () => {
  return (
    <div className="py-5 flex font-poppins  items-center justify-between ">
      <div className="relative">
        <h1 className="w-10 h-10 inline-block bg-[#65daff] transform rotate-45"></h1>
        <h1 className="ml-4 text-3xl font-semibold absolute -left-2 top-[1px] text-[#113c49]">
          WiseLearn
        </h1>
      </div>
      <ul className="flex  space-x-12">
        <li className=" text-[#252641]">
          <a href="">Home</a>
        </li>
        <li className=" text-[#252641]">
          <a href="">Careers</a>
        </li>
        <li className=" text-[#252641]">
          <a href="">Blog</a>
        </li>
        <li className=" text-[#252641]">
          <a href="">About Us</a>
        </li>
      </ul>
      <div className=" space-x-10 ">
        <button className="bg-white shadow-md w-[110px] py-3 rounded-full text-[#6c6c6c] text-base">
          Login
        </button>
        <button className="shadow-md px-5 py-2 rounded-full text-white text-base bg-[#f48c06]">
          Sing Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
