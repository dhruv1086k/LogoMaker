import { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContent } from "@/context/UpdateStorageContext";

export default function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContent);
  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [rounded, padding, color]);

  return (
    <>
      <div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rounded <span>{rounded} &deg;</span>
          </label>
          <Slider
            defaultValue={[0]}
            max={512}
            step={1}
            onValueChange={(e) => setRounded(e[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Padding <span>{padding} &deg;</span>
          </label>
          <Slider
            defaultValue={[40]}
            max={100}
            step={1}
            onValueChange={(e) => setPadding(e[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Background Color
          </label>
          <ColorPickerController
            hideController={false}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </>
  );
}
