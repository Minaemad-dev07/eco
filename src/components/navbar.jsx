import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStore } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <nav
      className="bg-white shadow-sm border-b border-[#C8D9E6] sticky top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-[#2F4156] flex items-center gap-2 hover:text-[#567C8D] transition"
        >
          <FaStore className="text-[#567C8D]" /> متجري
        </Link>
        <Link
          to="/cart"
          className="relative bg-[#C8D9E6]/30 p-3 rounded-full text-[#2F4156] hover:bg-[#C8D9E6]/60 transition"
        >
          <FaShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#2F4156] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
