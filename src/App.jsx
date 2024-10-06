import Banner from "./components/Home/Banner";
import Brand from "./components/Home/Brand";
import Navbar from "./components/Home/Navbar";
import Software from "./components/Home/Software";

function App() {
  return (
    <main className="">
      <div className="bg-[#FFF2E1] lg:min-h-screen md:pb-7  lg:pb-0">
        <Navbar />
        <Banner />
      </div>
      <div className="lg:w-11/12 px-4 md:px-8 lg:px-0 mx-auto">
        <Brand />
        <Software />
      </div>
    </main>
  );
}

export default App;
