import React, { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";
import Logo from "../assets/Logo.png";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible , setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    
  })

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between lg:px-15 px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Sachin
          </div>
        </div>

        <div className=" flex items-center lg:space-x-5">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none cursor-pointer active:scale-95"
            aria-label="open Menu"
          >
            <TbMenuDeep />
          </button>
          <div className="lg:block hidden">
            <a href="#contact" className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                Reach Out
            </a>
          </div>
        </div>
      </nav>

      <Overlay isOpen = {menuOpen} onClose = {() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
