import Header from "./components/Header";
import "./App.css";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import { useState } from "react";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContent } from "./context/UpdateStorageContext";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <>
      <UpdateStorageContent.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <div>
          <Header DownloadIcon={setDownloadIcon} />
          <div className="w-64 fixed">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
          <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
            <div className="md:col-span-2 border shadow-sm h-screen p-5 overflow-auto">
              {selectedIndex == 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
            <div className="md:col-span-3">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
            <div className="md:col-span-1">Ads</div>
          </div>
        </div>
      </UpdateStorageContent.Provider>
    </>
  );
}
