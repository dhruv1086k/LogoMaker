import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icons";
import { icons, Smile } from "lucide-react";
import { useState } from "react";

export default function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  return (
    <>
      <div>
        <div>
          <label>Icon</label>
          <div
            onClick={() => {
              setOpenDialog(true);
              setIcon(icon);
            }}
            className="p-3 cursor-pointer bg-gray-200 rounded-md my-2 w-[50px] h-[50px] flex justify-center items-center"
          >
            <Icon name={icon} color={"#000"} size={20} />
          </div>
        </div>
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pick your favourite icon</DialogTitle>
              <DialogDescription>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 overflow-auto h-[400px] p-6">
                  {iconList.map((icon, index) => (
                    <div
                      key={index}
                      className="border p-3 flex rounded-sm justify-center items-center cursor-pointer"
                      onClick={() => {
                        selectedIcon(icon);
                        setOpenDialog(false);
                        setIcon(icon);
                      }}
                    >
                      <Icon name={icon} color={"#000"} size={20} />
                    </div>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
