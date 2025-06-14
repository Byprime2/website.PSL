"use client";

import Link from "next/link";
import React from "react";

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScrolls);
    };
  }, []);
  return (
    <Link href={"#beranda"} className={`fixed bottom-10 right-10 bg-blue-900 text-white w-12 h-12 rounded-full text-center hover:bg-blue-600 cursor-pointer transition-all ${active ? "opacity-100" : "opacity-0"}`}>
      <i className="ri-arrow-up-line ri-2x"></i>
    </Link>
  );
};

export default ScrollToTop;
