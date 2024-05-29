import "./tailwind.css";
import locationIcon from './icons/Location.svg';
import blueLocationIcon from "./icons/BlueLocation.svg";
import BreadCum from "./Components/BreadCum";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

function App() {
  return (
    <div className="min-h-screen bg-[#EBF0F5]">
      <div id="Header" className="w-full h-[68px] bg-white rounded-t-lg"></div>
      <div id="bodyContent" className="flex justify-center h-full gap-6">
        <div
          id="left content"
          className="w-[248px] max-xl:hidden block bg-white lg:max-h-screen my-4 rounded-lg"
        ></div>
        <div id="right content" className="my-4">
          <BreadCum/>
          <div className="bg-white lg:max-h-screen rounded-lg pb-7 max-lg:mx-4">
            <Section1/>
            <Section2 text1="Departure from Dhaka" text2Normal=" Hazrat Shahjalal International Airport" text2Bold="Terminal 1:" icon={locationIcon} backgroundColor="#F5F7FA"/>
            <Section3/>
            <Section4 barHeight="53px" show="block"/>
            <Section2 text1="Layover at Dubai: 12 hr 20 min " text2Normal="Dubai International Airport" text2Bold="" icon={locationIcon} backgroundColor="#E8F3FF"/>
            <Section3/>
            <Section4 barHeight="19px" show="none"/>
            <Section2 text1="Destination at New York" text2Normal=" John F Kennedy International Airport" text2Bold="Terminal 4:" icon={blueLocationIcon} backgroundColor="#F5F7FA"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
