import Logo from '../assets/Logo.png'

export const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className='h-14' src={Logo} alt="" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Community
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            History
          </a>
          
          {/* Profile/User Icon */}
          <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">CC</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
