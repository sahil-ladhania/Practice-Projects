import Logo from "../assets/Hirea-Light.png"

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
        
        {/* Left: Logo */}
        <div className="mb-4 md:mb-0">
          <img src={Logo} alt="Hirea Logo" className="h-10" />
        </div>

        {/* Center: Branding Text */}
        <div className="mb-4 md:mb-0 flex items-center gap-1 text-center md:text-left">
          <span className="font-semibold text-foreground">Hirea</span>
          &copy; {new Date().getFullYear()}
        </div>

        {/* Right: Tagline */}
        <div className="text-xs text-muted-foreground text-center md:text-right">
          “Where ambition meets opportunity.”
        </div>
      </div>
    </footer>
  )
}