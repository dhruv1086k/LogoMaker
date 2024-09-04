import { useContext, useEffect, useState } from "react";
import { UpdateStorageContent } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from "html2canvas";

export default function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContent);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Dhruv_new_logo.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <>
      <div className=" h-screen w-full flex justify-center items-center">
        <div
          className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
          style={{
            padding: storageValue?.bgPadding,
          }}
        >
          <div
            id="downloadLogoDiv"
            className="h-full w-full flex justify-center items-center"
            style={{
              borderRadius: storageValue?.bgRounded,
              background: storageValue?.bgColor,
            }}
          >
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          </div>
        </div>
      </div>
    </>
  );
}
