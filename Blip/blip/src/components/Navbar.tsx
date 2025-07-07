import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Moon,
  TrendingUp,
  Star
} from 'lucide-react';
import Logo from '../assets/Blip-Light.png';

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex justify-between h-20 items-center px-6">
        
        {/* Left Section */}
        <div className="flex items-center gap-x-4">
          <Link to="/" className="flex items-center">
            <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <img className="h-20" src={Logo} alt="Blip Logo" />
            </div>
          </Link>

          <div className="flex items-center gap-x-1">
            <Link
              to="/markets"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Markets</span>
            </Link>

            <Link
              to="/watchlist"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Star className="h-4 w-4" />
              <span>Watchlist</span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cryptocurrencies..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 ml-8">
          <Button variant="ghost" size="icon" className="h-9 w-9 cursor-pointer">
            <Moon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;