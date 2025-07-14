import { Loader } from "lucide-react";

export default function LoaderComponent() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loader className="animate-spin h-8 w-8 text-gray-500" />
    </div>
  );
}