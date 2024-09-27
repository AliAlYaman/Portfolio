import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to control mobile menu visibility

  return (
    <>
      <div className="flex justify-between items-center h-[80px] font-bebas">
        <p className="text-[30px]">Ali Al Yaman</p>
        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-8">
          <Link to=''>Work</Link>
          <Link to=''>About</Link>
          <Link to=''>Contact</Link>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6  mt-4">
          <Link to='' className="p-4 bg-[#D3E97A] text-black font-semibold rounded-full" onClick={() => setIsOpen(false)}>Work</Link>
          <Link to='' className="p-4 bg-[#D3E97A] text-black font-semibold rounded-full" onClick={() => setIsOpen(false)}>About</Link>
          <Link to='' className="p-4 bg-[#D3E97A] text-black font-semibold rounded-full" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}
