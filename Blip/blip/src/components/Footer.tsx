import { Link } from 'react-router-dom';
import Logo from '../assets/Blip-Light.png';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="h-20 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 text-muted-foreground text-sm">
        
        {/* Left Section: Logo + Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Blip Logo" className="h-16" /> 
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/markets" className="hover:text-foreground transition-colors">Markets</Link>
            <Link to="/watchlist" className="hover:text-foreground transition-colors">Watchlist</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          </div>
        </div>

        {/* Right Section: Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Blip. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;