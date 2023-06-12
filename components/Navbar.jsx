"use client";

import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { MdDashboard, MdLogin } from "react-icons/md";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(user);

  return (
    <header className="flex items-center justify-between py-10 sm:px-40">
      <Link href="/">
        <h1 className="flex items-center text-lg italic font-semibold uppercase">
          Electric
          <span>
            <BsDot className="-ml-1 -mr-2 text-blue-500" />
          </span>
          City
        </h1>
      </Link>

      <div className="flex items-center space-x-20 text-[#6a6a68] font-light">
        <Link className="relative" href="/">
          {pathname == "/" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[1px] w-full bg-black"
            />
          )}
          <h1 className={pathname == "/" ? "active" : ""}>Home</h1>
        </Link>

        <Link className="relative" href="/pricing">
          {pathname == "/pricing" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[1px] w-full bg-black"
            />
          )}
          <h1 className={pathname == "/pricing" ? "active" : ""}>Pricing</h1>
        </Link>

        <Link className="relative" href="/map">
          {pathname == "/map" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[1px] w-full bg-black"
            />
          )}
          <h1 className={pathname == "/map" ? "active" : ""}>Map</h1>
        </Link>

        <Link className="relative" href="/faq">
          {pathname == "/faq" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[1px] w-full bg-black"
            />
          )}
          <h1 className={pathname == "/faq" ? "active" : ""}>FAQ</h1>
        </Link>

        <Link className="relative" href="/contact">
          {pathname == "/contact" && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[1px] w-full bg-black"
            />
          )}
          <h1 className={pathname == "/contact" ? "active" : ""}>Contact</h1>
        </Link>
      </div>

      <div>
        {user === null ? (
          <Link
            href="/account"
            className="flex items-center px-5 py-2 space-x-2 bg-white rounded-full"
          >
            <MdLogin className="w-5 h-5 text-blue-500" />
            <h1>Log In</h1>
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="flex items-center px-5 py-2 space-x-2 bg-white rounded-full"
          >
            <MdDashboard className="w-5 h-5 text-blue-500" />
            <h1>Dashboard</h1>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
