"use client";

import Navbar from "components/Navbar";
import { PageWrapper } from "../page-wrapper";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { faqs } from "@/constants";

function page() {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        <h1 className="mt-10 text-4xl font-semibold text-center">FAQs</h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="w-full px-4 ">
            <div className="w-full max-w-[800px] p-2 pt-1 mx-auto bg-white rounded-2xl">
              {faqs.map((faq) => {
                return (
                  <Disclosure as="div" key={faq.question} className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                          <span className="text-lg">{faq.question}</span>
                          <BsChevronDown
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-blue-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 ">
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
