import "./tailwind.css";
import BreadCum from "./Components/BreadCum";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

function App() {
  return (
    <div className="min-h-screen bg-[#d7dbec]">
      <div id="Header" className="w-full h-[68px] bg-white rounded-t-lg"></div>
      <div id="bodyContent" className="flex justify-center h-full gap-6">
        <div
          id="left content"
          className="w-[248px] bg-white h-screen my-4 rounded-lg"
        ></div>
        <div id="right content" className="my-4">
          <BreadCum/>
          <div className="w-[840px] bg-white h-screen rounded-lg">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
