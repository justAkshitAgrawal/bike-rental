import React from "react";

import { BookingModal } from "./BookingModal";

export const DetailsCard = ({ selectedBike }) => {
  const [selectedPlan, setSelectedPlan] = React.useState("hours");
  const [time, setTime] = React.useState(1);
  const [address, setAddress] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const phone = user.phoneNumber;

  //   console.log(localStorage.getItem("user"));

  return (
    <div className="flex flex-col items-center self-start justify-between w-full h-full mt-10">
      <div className="w-full">
        <h1 className="text-lg max-sm:text-sm">
          Bike: <span className="ml-2 font-semibold">{selectedBike.bike}</span>
        </h1>
        <div className="flex items-center mt-5 space-x-3 text-lg max-sm:flex-col max-sm:text-sm">
          <h1>Select a plan:</h1>
          <div className="flex items-center space-x-3 max-sm:mt-2">
            <button
              onClick={() => {
                setSelectedPlan("hours");
              }}
              className={
                `p-2 text-sm bg-gray-300 rounded-full` +
                (selectedPlan === "hours"
                  ? " !bg-blue-500 text-white border-2 border-blue-300"
                  : "")
              }
            >
              ₹{selectedBike.hourly}/hour
            </button>
            <button
              onClick={() => {
                setSelectedPlan("days");
              }}
              className={
                `p-2 text-sm bg-gray-300 rounded-full` +
                (selectedPlan === "days"
                  ? " !bg-blue-500 text-white border-2 border-blue-300"
                  : "")
              }
            >
              ₹{selectedBike.daily}/day
            </button>
          </div>
        </div>
        <div className="flex items-center mt-5 text-lg sm:space-x-3 max-sm:text-sm">
          <h1 className="max-sm:hidden">
            For how many {selectedPlan} do you want the bike:{" "}
          </h1>
          <h1 className="sm:hidden">Duration:</h1>
          <input
            type="number"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            max={selectedPlan === "hours" ? 24 : 7}
            min={1}
            className="px-2 max-sm:ml-2  bg-gray-200 py-1 outline-none rounded-full invalid:bg-red-200 text-center w-[50px] "
          />
          {selectedPlan === "hours" ? (
            time > 24 ? (
              <h1 className="text-xs text-red-500">Max 24 hours</h1>
            ) : null
          ) : time > 7 ? (
            <h1 className="text-xs text-red-500">Max 7 days</h1>
          ) : null}
        </div>

        <div className="mt-5 text-lg max-sm:text-sm">
          <h1>Phone: {phone}</h1>
        </div>

        <div className="flex items-center mt-5 text-lg max-sm:flex-col max-sm:text-sm">
          <h1>Enter address: </h1>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className=" w-[460px] max-sm:w-full max-sm:mt-5 px-3 py-1 ml-3 text-end bg-gray-200 rounded-full outline-none  invalid:bg-red-200"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-lg mt-14 max-sm:text-sm">
            Total:
            <span className="ml-2 font-semibold">
              ₹
              {selectedPlan === "hours"
                ? selectedBike.hourly * time
                : selectedBike.daily * time}
            </span>
          </h1>
        </div>

        <button
          className="self-center px-5 py-2 mt-12 text-lg text-white bg-blue-500 rounded-full max-sm:text-sm disabled:bg-gray-400 disabled:text-black w-fit"
          disabled={
            !time ||
            !phone ||
            address.length === 0 ||
            (selectedPlan === "hours" ? time > 24 : time > 7)
          }
          onClick={() => {
            setShowModal(true);
          }}
        >
          Confirm Booking
        </button>
      </div>
      {showModal && (
        <BookingModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
