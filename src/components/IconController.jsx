import { Smile } from "lucide-react";

export default function IconController() {
  return (
    <>
      <div>
        <div>
          <label>Icon</label>
          <div className="p-3 cursor-pointer bg-gray-200 rounded-md my-2 w-[50px] h-[50px] flex justify-center items-center">
            <Smile />
          </div>
        </div>
      </div>
    </>
  );
}
