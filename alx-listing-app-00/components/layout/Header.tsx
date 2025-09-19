const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">🏡 ALX Listing</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="border rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Nav Links */}
        <nav className="flex gap-4">
          <a href="#" className="hover:text-blue-600">Rooms</a>
          <a href="#" className="hover:text-blue-600">Mansion</a>
          <a href="#" className="hover:text-blue-600">Countryside</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
