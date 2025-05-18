import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Warna utama navbar
  const primaryBlue = "#27548A";

  return (
    <nav   style={{ backgroundColor: '#27548A', position: "sticky", top: 0, zIndex: 50 }} className="text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
<div className="flex items-center flex-shrink-0 -ml-20">
  <img
    src="./logo2.png"
    alt="WeClinic Logo"
    className="w-25 h-25"
  />
</div>


          {/* Hamburger button for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: "none",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#1F4068"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
              onFocus={e => e.currentTarget.style.boxShadow = `0 0 0 2px white`}
              onBlur={e => e.currentTarget.style.boxShadow = "none"}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                // Hamburger icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Close icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menu for desktop */}
          <div className="hidden md:flex space-x-2">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Pilih Dokter", to: "/dokter" },
              { name: "Reservasi Dokter", to: "/reservasi" },
            ].map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "white" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#FECB00"; // warna kuning sebagai hover
                  e.currentTarget.querySelector('span').style.width = '100%';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.querySelector('span').style.width = '0';
                }}
              >
                {name}
                <span
                  className="absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300"
                  style={{ width: 0 }}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ backgroundColor: primaryBlue }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Pilih Dokter", to: "/dokter" },
              { name: "Reservasi Dokter", to: "/reservasi" },
            ].map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-400 hover:text-primary transition-colors duration-200"
                style={{ transitionProperty: "background-color, color" }}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
