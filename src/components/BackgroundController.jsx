import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";

export default function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState("#000");
  const storageValue = JSON.parse(localStorage.getItem("value"));
  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    localStorage.setItem("value", JSON.stringify(updateValue));
  });

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
