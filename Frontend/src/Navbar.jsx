import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    background: "rgba(244, 244, 244, 0.29)",
    backdropFilter: "blur(7.4px)",
    zIndex: 50,
  };

  return (
    <nav
      className="absolute top-0 left-0 w-full p-3 flex justify-end items-center text-white px-10 fixed"
      style={navbarStyle}
    >

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-sm font-medium mr-10">
        {[
          { name: 'Home', link: '/' },
          { name: 'About Us', link: '/aboutus2' },
          { name: 'Contact Us', link: '/contactus' }
        ].map(({ name, link }) => (
          <Link 
            to={link}  
            key={name} 
            className="flex items-center gap-2 hover:underline"
          >
            {name} <ChevronDown size={14} />
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full flex flex-col items-center py-4 md:hidden" style={navbarStyle}>
          {[
            { name: 'Home', link: '/' },
            { name: 'About Us', link: '/aboutus2' },
            { name: 'Contact Us', link: '/contactus' }
          ].map(({ name, link }) => (
            <Link
              to={link}  // Use Link here too
              key={name}
              className="py-2 flex items-center gap-1 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {name} <ChevronDown size={14} />
            </Link>
          ))}
        </div>
      )}

      {/* RePayment Button */}
      <button className="ml-6 text-white font-semibold rounded-full border-2 border-yellow-400 bg-gradient-to-r from-red-700 to-red-500 px-6 py-2 shadow-md hover:shadow-red-500 transition-all">
        RePayment
      </button>
    </nav>
  );
};
