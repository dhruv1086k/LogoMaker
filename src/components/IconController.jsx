import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function IconController() {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  return (
    <>
      <div>
        <div>
          <label>Icon</label>
          <div className="p-3 cursor-pointer bg-gray-200 rounded-md my-2 w-[50px] h-[50px] flex justify-center items-center">
            <Smile />
          </div>
          <div className="py-2">
            <label className="p-2 flex justify-between items-center">
              Size <span>{size} px</span>
            </label>
            <Slider
              defaultValue={[280]}
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
              defaultValue={[0]}
              max={360}
              step={1}
              onValueChange={(e) => setRotate(e[0])}
            />
          </div>
        </div>
      </div>
    </>
  );
}
