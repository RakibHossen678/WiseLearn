import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
const About = () => {
  const aboutData = [
    {
      image: about1,
      text: "FOR INSTRUCTORS",
      btnText: "Start a class today",
    },
    {
      image: about2,
      text: "FOR STUDENTS",
      btnText: "Enter access code",
    },
  ];
  return (
    <div className="my-24 text-center font-poppins">
      <h1 className=" text-4xl font-semibold mb-6 text-[#f48c06]">
        <span className="text-[#2f327d]">What is</span> WiseLearn?
      </h1>
      <p className="max-w-3xl mb-12 mx-auto text-[#696984] font-poppins">
        Skilline is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>
      <div className="flex flex-wrap gap-10 justify-center lg:justify-between">
        {aboutData.map((data, idx) => (
          <div key={idx} className="lg:w-[calc(50%-97px)] w-full relative">
            <img className="w-full" src={data.image} alt="" />
            <div className="absolute flex  flex-col justify-center bg-black/50 inset-0 rounded-[13px] lg:rounded-[20px] text-white">
              <h1 className="lg:text-4xl  text-3xl font-semibold pb-5">
                {data.text}
              </h1>
              <button className="border-2 lg:w-[45%] w-[70%] mx-auto py-4 rounded-full transition-all duration-500 hover:bg-[#23bdeeE6] hover:border-[#23bdeeE6]">
                {data.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
