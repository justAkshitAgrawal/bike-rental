import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { MdLogin } from "react-icons/md";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-40 py-10">
      <h1 className="flex items-center text-lg italic font-semibold uppercase">
        Electric
        <span>
          <BsDot className="-ml-1 -mr-2 text-blue-500" />
        </span>
        City
      </h1>

      <div className="flex items-center space-x-20 text-[#6a6a68] font-light">
        <Link href="/">Hello</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Map</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Contact</Link>
      </div>

      <div>
        <button className="flex items-center px-5 py-2 space-x-2 bg-white rounded-full">
          <MdLogin className="w-5 h-5 text-blue-500" />
          <h1>Log In</h1>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
