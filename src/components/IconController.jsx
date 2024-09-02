import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContent } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

export default function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContent);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, icon]);

  return (
    <>
      <div>
        <div>
          <IconList selectedIcon={(icon) => setIcon(icon)} />
          <div className="py-2">
            <label className="p-2 flex justify-between items-center">
              Size <span>{size} px</span>
            </label>
            <Slider
              defaultValue={[size]}
              max={512}
              step={1}
              onValueChange={(e) => setSize(e[0])}
            />
          </div>
          <div className="py-2">
            <label className="p-2 flex justify-between items-center">
              Rotate <span>{rotate} &deg;</span>
            </label>
            <Slider
              defaultValue={[rotate]}
              max={360}
              step={1}
              onValueChange={(e) => setRotate(e[0])}
            />
          </div>
          <div className="py-2">
            <label className="p-2 flex justify-between items-center">
              Icon Color
            </label>
            <ColorPickerController
              hideController={true}
              selectedColor={(color) => setColor(color)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
