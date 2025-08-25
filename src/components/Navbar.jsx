import React from "react";
import "../index.css";
import closeIcon from "../assets/red-cross.png";
import menuIcon from "../assets/list.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ menuOpen, setMenuOpen }) {
  
  const Ig = "https://www.instagram.com/anuragp.30?utm_source=qr&igsh=MTdwamtheXJpajg4Mw==";
  const Linkedin = "https://www.linkedin.com/in/anurag-parashar-275183224";
  const Github = "https://github.com/STARRSOUL";
  const Twitter = "https://x.com/Anurag1Parashar";

  return (
    <>
      <nav className=" px-[8%] py-4 text-white border-[--thin-border] bg-[#111] z-[99999]">
        <div className="flex item-center justify-between transition">
          <ul className="hidden md:flex gap-6 text-sm font-light">
            <li className="font-semibold text-lg text-red-500 cursor-pointer">
              Home
            </li>
            <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
              About
            </li>
            <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
              Projects
            </li>
            <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
              Skills
            </li>
            <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="text-4xl font-bricolage font-bold cursor-pointer tracking-wide h-10 w-10">
            <img src="/Logo Portfolio.png" alt="Logo"  />
          </div>

          <div className="hidden md:flex gap-4 text-sm font-light">
            <a href={Linkedin}><i href={Linkedin} className="bi bi-linkedin text-xl hover:text-red-400 cursor-pointer transition"></i></a>
            <a href={Github}><i className="bi bi-github text-xl hover:text-red-400 cursor-pointer transition"></i></a>
            <a href={Twitter}><i className="bi bi-twitter-x text-xl hover:text-red-400 cursor-pointer transition"></i></a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <i
                className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-light z-[9999]">
            <ul className="flex flex-col gap-4">
              <li className="font-semibold text-lg text-red-500 cursor-pointer">
                Home
              </li>
              <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
                About
              </li>
              <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
                Projects
              </li>
              <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
                Skills
              </li>
              <li className="font-semibold transition text-lg hover:text-red-400 cursor-pointer">
                Contact
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a href={Linkedin}><i className="bi bi-linkedin text-xl hover:text-red-400 cursor-pointer transition"></i></a>
              <a href={Github}><i className="bi bi-github text-xl hover:text-red-400 cursor-pointer transition"></i></a>
              <a href={Twitter}><i className="bi bi-twitter-x text-xl hover:text-red-400 cursor-pointer transition"></i></a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
