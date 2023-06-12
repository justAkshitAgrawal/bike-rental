"use client";

import React from "react";
import { DashNav } from "../../components/DashNav";
import { bikes } from "@/constants";
import Image from "next/image";
import { DetailsCard } from "@/components/DetailsCard";

const Dashboard = () => {
  const [selectedBike, setSelectedBike] = React.useState(null);

  return (
    <div>
      <DashNav />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl">Rent a bike!</h1>
        <div className="flex justify-between w-full mt-20 px-[10%] space-x-20 ">
          <div className="p-10 bg-white rounded-md w-[50%] flex flex-col items-center">
            <h1 className="text-xl ">Select a bike</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-[600px]">
              {bikes.map((bike) => {
                return (
                  <div
                    key={bike.id}
                    className={
                      `px-4 py-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-200` +
                      (selectedBike?.id === bike.id
                        ? " !bg-blue-500 text-white border-2 border-blue-300"
                        : "")
                    }
                    onClick={() => {
                      setSelectedBike(bike);
                    }}
                  >
                    <h1 className="text-sm">{bike.bike}</h1>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 ">
              {selectedBike ? (
                <div className="mt-10">
                  <div className="p-10 bg-gray-100 rounded-lg">
                    <Image
                      src={selectedBike.img}
                      alt={selectedBike.bike}
                      width={400}
                      height={400}
                      className="object-contain "
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h1 className="italic font-light">{selectedBike.use}</h1>
                  </div>
                </div>
              ) : (
                <h1 className="mt-10">Select a bike to continue</h1>
              )}
            </div>
          </div>
          <div className="p-10 bg-white rounded-md w-[50%] flex flex-col items-center">
            <h1 className="text-xl ">Details</h1>

            {selectedBike ? (
              <DetailsCard selectedBike={selectedBike} />
            ) : (
              <h1 className="mt-10">Select a bike to continue</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
