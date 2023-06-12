"use client";

import bike from "../../assets/bike.png";
import aventon from "../../assets/aventon.png";
import trek from "../../assets/trek.png";
import coop from "../../assets/coop.png";
import haul from "../../assets/haul.png";

import Navbar from "components/Navbar";
import { PageWrapper } from "../page-wrapper";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";

function page() {
  const responsive = {
    0: {
      items: 1,
    },
  };

  const items = [
    <div
      key="1"
      className="h-[50vh] flex flex-col items-center bg-gradient-to-bl from-yellow-200 via-pink-100 to-blue-200 rounded-md p-4"
    >
      <h1 className="text-center">
        <span className="font-bold">Motorad | X1 </span>
        <br /> ₹120/hr | ₹800/day <br />{" "}
        <span className="mt-2 text-sm">Best for city and off-roading</span>
      </h1>
      <Image
        src={bike}
        alt=""
        height="full"
        width="full"
        className="object-contain w-full h-full "
      />
    </div>,
    <div
      key="2"
      className="h-[50vh] flex flex-col items-center bg-gradient-to-bl from-yellow-200 via-pink-100 to-blue-200 rounded-md p-4"
    >
      <h1 className="text-center">
        <span className="font-bold">Aventon Level.2</span>
        <br /> ₹100/hr | ₹700/day <br />{" "}
        <span className="mt-2 text-sm">Best for city rides</span>
      </h1>
      <Image
        src={aventon}
        alt=""
        height="full"
        width="full"
        className="object-contain w-full h-full scale-125 "
      />
    </div>,
    <div
      key="3"
      className="h-[50vh] flex flex-col items-center bg-gradient-to-bl from-yellow-200 via-pink-100 to-blue-200 rounded-md p-4"
    >
      <h1 className="text-center">
        <span className="font-bold">{`Trek Dual Sport+ 2`}</span>
        <br /> ₹200/hr | ₹1200/day <br />{" "}
        <span className="mt-2 text-sm">Best for adventure</span>
      </h1>
      <Image
        src={trek}
        alt=""
        height="full"
        width="full"
        className="object-contain w-full h-full scale-75 "
      />
    </div>,
    <div
      key="4"
      className="h-[50vh] flex flex-col items-center bg-gradient-to-bl from-yellow-200 via-pink-100 to-blue-200 rounded-md p-4"
    >
      <h1 className="text-center">
        <span className="font-bold">{`Co-op Cycles CTY e1.1`}</span>
        <br /> ₹150/hr | ₹900/day <br />{" "}
        <span className="mt-2 text-sm">Best for adventure</span>
      </h1>
      <Image
        src={coop}
        alt=""
        height="full"
        width="full"
        className="object-contain w-full h-full "
      />
    </div>,
    <div
      key="4"
      className="h-[50vh] flex flex-col items-center bg-gradient-to-bl from-yellow-200 via-pink-100 to-blue-200 rounded-md p-4"
    >
      <h1 className="text-center">
        <span className="font-bold">{`Specialized Globe Haul ST`}</span>
        <br /> ₹250/hr | ₹1500/day <br />{" "}
        <span className="mt-2 text-sm">Best for city and adventure</span>
      </h1>
      <Image
        src={haul}
        alt=""
        height="full"
        width="full"
        className="object-contain w-full h-full mt-10 scale-75"
      />
    </div>,
  ];

  return (
    <div>
      <Navbar />
      <PageWrapper>
        <h1 className="text-4xl font-semibold text-center mt-14">Pricing</h1>
        <div className="flex flex-col items-center justify-center mt-14"></div>
        <div className=" h-[80%] flex items-center justify-center w-full px-[30vw]">
          <AliceCarousel
            mouseTracking
            infinite
            autoPlay
            autoPlayInterval={4000}
            animationDuration={1000}
            disableButtonsControls
            responsive={responsive}
            items={items}
          />
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
