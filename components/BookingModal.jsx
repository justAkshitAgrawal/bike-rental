import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const BookingModal = ({ showModal, setShowModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full ">
      <div className="w-full h-full bg-black opacity-50"></div>
      <div className="fixed p-10 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-sm:max-w-[90%] rounded-xl opacity-100 flex flex-col items-center max-w-[20%] border-blue-500 border">
        <AiOutlineClose
          className="absolute cursor-pointer top-3 right-3"
          onClick={() => {
            setShowModal(false);
            window.location.reload();
          }}
        />
        <h1>Thank you for your booking!</h1>
        <h1 className="mt-5 text-center">
          An ElectricCity representative will call and confirm with you before
          delivering the bike!
        </h1>
      </div>
    </div>
  );
};
