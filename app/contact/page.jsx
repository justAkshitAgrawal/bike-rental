import Navbar from "components/Navbar";
import { PageWrapper } from "../page-wrapper";
import Link from "next/link";

function page() {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <h1 className="mt-10 text-4xl font-semibold text-center">Contact Us</h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <h1>For any queries, feel free to reach out to us at</h1>
          <Link
            href="/contact"
            className="p-2 mt-5 bg-gray-300 border rounded-xl"
          >
            help@electricCity.com
          </Link>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
