import { useContext, useEffect, useState } from "react";
import { UpdateStorageContent } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";

export default function LogoPreview() {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContent);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

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
