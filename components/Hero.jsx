import CenterPoster from "./CenterPoster";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import { RiTimerFlashLine, RiWallet3Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

function Hero() {
  return (
    <div className="flex justify-between mt-20 sm:px-40">
      <div className="flex flex-col max-w-[15vw] mt-10 ">
        <h1 className="text-6xl font-semibold uppercase">
          E-Bikes
          <br /> Rental
        </h1>
        <p className="mt-10 text-[#6a6a68] text-xl font-light">
          Driving around the city with joy and comfort for true adventure lovers
        </p>

        <button className=" bg-[#1f1f1f] text-white mt-16 w-fit px-14 py-4 rounded-full">
          Start Now
        </button>

        <div className="mt-40">
          <h1 className="text-[#6a6a68] text-sm">Download our app</h1>
          <div className="flex items-center mt-3 space-x-3">
            <div className="p-2 bg-white rounded-full">
              <BsApple className="w-5 h-5 text-blue-500/50" />
            </div>
            <div className="p-2 bg-white rounded-full">
              <BsGooglePlay className="w-5 h-5 text-blue-500/50" />
            </div>
          </div>
        </div>
      </div>

      <div className="-ml-20">
        <CenterPoster />
      </div>

      <div className="flex flex-col max-w-[15vw] space-y-24 mt-10">
        <div>
          <div className="p-2 bg-white rounded-full w-fit ">
            <RiTimerFlashLine className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="mt-2 font-bold">Quick Reservation</h1>
          <p className="text-sm text-[#6a6a68] font-light mt-1">
            Rent a bike in just a few <br />
            clicks directly from the app
          </p>
        </div>

        <div>
          <div className="p-2 bg-white rounded-full w-fit">
            <RiWallet3Line className="w-8 h-8 text-blue-500 rounded-lg" />
          </div>
          <h1 className="mt-2 font-bold">Affordable Price</h1>
          <p className="text-sm text-[#6a6a68] font-light mt-1">
            Rides from ₹25 <br /> per hour
          </p>
        </div>

        <div>
          <div className="p-2 bg-white rounded-full w-fit">
            <IoIosPeople className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="mt-2 font-bold">Different Models</h1>
          <p className="text-sm text-[#6a6a68] font-light mt-1">
            Bikes for enthusiasts
            <br /> and amateurs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
