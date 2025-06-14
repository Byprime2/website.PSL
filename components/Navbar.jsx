"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import DataImage from "@/public/data";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    // console.log("testing");
    setActive(!active);
  };

  return (
    <div className="navbar py-6">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo flex gap-2 items-center">
            <Image src={DataImage.logo1} alt="Logo Image" priority className="w-20 h-20" />
            <h1 className="text-3xl font-bold text-blue-900">Permata Shipping Line</h1>
          </div>
          <ul
            className={`menu flex items-center gap-6 md:static absolute ${
              active ? "top-24 opacity-100" : "top-20 opacity-0"
            } left-1/2 -translate-x-1/2 md:-translate-x-0 md:flex-row flex-col md:bg-transparent bg-blue-900 w-full md:w-auto md:py-0 py-10 text-white md:text-blue-900 transition-all md:opacity-100 md:transition-none md:text-base text-xl`}
          >
            <li>
              <Link href="#beranda" className="hover:text-red-400">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#layanan" className="hover:text-red-400">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="#proyek" className="hover:text-red-400">
                Proyek
              </Link>
            </li>
            <li>
              <Link href="#kontak" className="hover:text-red-400">
                Kontak
              </Link>
            </li>
          </ul>
          <div className="md:hidden block" onClick={() => handleClick()}>
            <i className="ri-menu-3-fill ri-2x font-bold text-blue-900"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
