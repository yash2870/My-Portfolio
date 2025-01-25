import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="hidden md:flex space-x-6">
          {['Home', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col space-y-2 px-4 py-2">
          {['Home', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-lg hover:text-teal-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
