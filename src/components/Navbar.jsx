"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex items-center fixed top-0 left-0 z-[9999] bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 navbar">
      <div className="container">
        <div className="relative flex justify-between items-center">
          <Link href={"/"} className="text-lg font-bold text-white py-6 px-4">
            Posts App
          </Link>

          <div className="flex items-center px-4">
            <nav ref={navRef} className="w-full rounded py-5">
              <ul className="block lg:flex">
                <li className="group flex">
                  <Link
                    className={`py-2 mx-auto flex text-base text-white font-medium group-hover:text-blue-600 transition-all navigasi lg:mx-5 ${
                      pathname === "/good-posts" ? "active" : ""
                    }`}
                    href={"/good-posts"}
                  >
                    Good Posts
                  </Link>
                </li>
                <li className="group flex">
                  <Link
                    className={`py-2 mx-auto flex text-base text-white font-medium group-hover:text-blue-600 transition-all navigasi lg:mx-5 ${
                      pathname === "/bad-posts" ? "active" : ""
                    }`}
                    href={"/bad-posts"}
                  >
                    Bad Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
