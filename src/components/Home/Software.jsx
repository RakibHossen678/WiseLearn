import invoice from "../../assets/file-invoice.png";
import schedule from "../../assets/calendar.png";
import users from "../../assets/users.png";

const Software = () => {
  const data = [
    {
      image: invoice,
      name: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
      image: schedule,
      name: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      image: users,
      name: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. WiseLearn built-in system helps organize your organization ",
    },
  ];

  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="text-[#f48c06] text-4xl font-poppins pb-5 font-bold">
          <span className="text-[#2f327d]">All-In-One</span> Cloud Software.
        </h1>
        <p className="text-[#696984] pb-16">
          WiseLearn is one powerful online software suite that combines all the{" "}
          <br />
          tools needed to run a successful school or office.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-between custom-grid">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="h-[300px] relative  lg:w-[350px] shadow-2xl rounded-2xl px-7 pb-5"
          >
            <div className="bg-[#5b72ee] absolute -top-6 left-[50%] translate-x-[-50%] image rounded-full w-14 h-14 flex items-center justify-center">
              <img className="h-7" src={item.image} alt={item.name} />
            </div>
            <h1 className="mt-20 font-poppins text-[#2f327d] text-center text-2xl font-medium pb-4">
              {item.name}
            </h1>
            <p className="font-poppins text-center text-[#696984]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Software;
