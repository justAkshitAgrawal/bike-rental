"use client";

import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <header className="flex items-center justify-between py-10 sm:px-40">
      <h1 className="flex items-center text-lg italic font-semibold uppercase">
        Electric
        <span>
          <BsDot className="-ml-1 -mr-2 text-blue-500" />
        </span>
        City
      </h1>

      <div className="flex items-center space-x-20 text-[#6a6a68] font-light">
        <Link href="/">
          <h1 className={router.pathname == "/" ? "active" : ""}>Home</h1>
        </Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/map">Map</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div>
        <button className="flex items-center px-5 py-2 space-x-2 bg-white rounded-full">
          <MdLogin className="w-5 h-5 text-blue-500" />
          <h1>Log In</h1>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
