import Header from "./components/Header";
import "./App.css";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import { useState } from "react";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-2 border shadow-sm h-screen p-5">
          {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3">Icon preview</div>
        <div className="md:col-span-1">Ads</div>
      </div>
    </>
  );
}
