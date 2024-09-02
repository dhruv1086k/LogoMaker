import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="px-16 py-4 shadow-sm border flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-primary">DP</span> LOGO MAKER
        </h1>
        <Button className="flex gap-2 items-center">
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>
    </>
  );
}
