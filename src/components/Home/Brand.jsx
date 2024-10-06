import Marquee from "react-fast-marquee";
import goggle from "../../assets/google.png";
import air from "../../assets/airbnb.png";
import amazon from "../../assets/amazon.png";
import grab from "../../assets/grab-logo.png";
import facebook from "../../assets/facebook.png";
import netflix from "../../assets/Vector.png";

const Brand = () => {
  return (
    <div className="my-20">
      <h1 className="text-[#696984] text-2xl font-medium text-center  pb-10 font-poppins">
        Trusted by 5,000+ Companies Worldwide
      </h1>
      <Marquee speed={30} pauseOnHover={true}>
        <div className="flex items-center flex-wrap gap-12">
          <div>
            <img src={goggle} alt="" />
          </div>
          <div>
            <img src={facebook} alt="" />
          </div>
          <div>
            <img src={netflix} alt="" />
          </div>
          <div>
            <img src={amazon} alt="" />
          </div>
          <div>
            <img src={air} alt="" />
          </div>
          <div>
            <img src={grab} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Brand;
