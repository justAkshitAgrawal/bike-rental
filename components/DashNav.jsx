import { BsDot } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const DashNav = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="flex items-center justify-between px-10 py-5 bg-white">
        <Link href="/dashboard">
          <h1 className="flex items-center text-lg italic font-semibold uppercase">
            Electric
            <span>
              <BsDot className="-ml-1 -mr-2 text-blue-500" />
            </span>
            City
          </h1>
        </Link>

        <div>
          <button
            className="flex items-center px-5 py-2 space-x-2 text-white bg-blue-500 rounded-full"
            onClick={() => {
              localStorage.removeItem("user");
              router.push("/account");
            }}
          >
            <h1>Sign Out</h1>
          </button>
        </div>
      </nav>
    </header>
  );
};
