import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export default function ColorPickerController({
  hideController = false,
  selectedColor,
}) {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <>
      <div className="rounded-xl overflow-hidden">
        <ColorPicker
          value={color}
          onChange={(e) => {
            setColor(e);
            selectedColor(e);
          }}
          height={160}
          hidePresets
          hideControls={hideController}
          hideEyeDrop
          hideAdvancedSliders
          hideColorGuide
          hideInputType
        />
      </div>
    </>
  );
}
