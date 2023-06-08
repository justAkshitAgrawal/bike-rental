import Navbar from "components/Navbar";
import { PageWrapper } from "../page-wrapper";

function page() {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <h1 className="mt-10 text-4xl font-semibold text-center">Contact Us</h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="p-10 bg-black"></div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
