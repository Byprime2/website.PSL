import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-10 container px-4 mx-auto">
      <div className="flex md:flex-row flex-col gap-5 justify-between items-center bg-zinc-400 p-4 text-white">
        <div>
          <p>
            Byprime <i className="ri-copyright-line "></i> Copyright 2025
          </p>
        </div>
        <div className="flex gap-4">
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Privacy</Link>
          <Link href={"#"}>Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
