import banner from "../../assets/header-pic.png";
import video from "../../assets/video.png";
const Banner = () => {
  return (
    <div className="lg:w-11/12 px-4 md:px-8 lg:px-0 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row  items-center justify-between font-poppins">
        <div>
          <h1 className="text-5xl font-bold tracking-wide leading-normal text-[#2f327d]">
            <span className=" text-[#f48c06]">Studying</span> Online is now{" "}
            <br /> much easier
          </h1>
          <p className="text-[#464646] my-5 font-nunito">
            WiseLearn is an interesting platform that will teach <br /> you in
            more an interactive way
          </p>
          <div className="flex items-center space-x-4">
            <button className="shadow-md w-[90px] lg:w-[130px] py-3 rounded-full text-white bg-[#f48c06] hover:bg-[#e07c05] transition-colors duration-200 font-semibold">
              Join for free
            </button>
            <img className="w-12  bg-cover bg-c" src={video} alt="" />
          </div>
        </div>
        <div className="w-1/2 h-[600px]">
          <img
            className="w-full h-full bg-cover bg-center object-cover"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
