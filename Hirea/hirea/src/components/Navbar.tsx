import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Search } from "lucide-react"
import Logo from '../assets/Hirea-Light.png'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
        
        {/* Logo */}
        <Link to='/'>
          <img className="h-20 cursor-pointer" src={Logo} alt="" />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link to="/saved" className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-muted hover:text-foreground">
            Saved Jobs
          </Link>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for jobs"
              className="pl-9 w-[200px] sm:w-[250px] md:w-[300px] bg-muted/20"
            />
          </div>

          {/* Theme Toggle Button */}
          <Button variant="ghost" size="icon">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}