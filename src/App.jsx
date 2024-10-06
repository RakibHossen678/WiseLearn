import Banner from "./components/Home/Banner";
import Navbar from "./components/Home/Navbar";

function App() {
  return (
    <main className="">
      <div className="bg-[#FFF2E1] lg:min-h-screen md:pb-7  lg:pb-0">
        <Navbar />
        <Banner />
      </div>
    </main>
  );
}

export default App;
