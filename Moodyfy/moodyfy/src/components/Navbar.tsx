import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from '../assets/M.png'

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b">
      <Link to="/" className="text-xl font-bold">
        <img className="h-20" src={Logo} alt="" />
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/liked-tracks">
            <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <Heart className="w-5 h-5 text-black" />
            </div>
        </Link>
      </div>
    </nav>
  );
}