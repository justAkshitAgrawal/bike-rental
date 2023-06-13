"use client";

import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

export const PhoneLogin = ({ phone, setPhone, setShowOtp, getOTP }) => {
  const [error, setError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [startAnimation, setStartAnimation] = React.useState(false);

  const variants = {
    hidden: { x: 0 },
    visible: { x: 260 },
  };

  const handlePhone = () => {
    if (phone.length !== 10 || isNaN(phone) || phone === "") {
      setError(true);
      setDisabled(true);
      return;
    }

    setStartAnimation(true);
    getOTP();
    setTimeout(() => {
      setShowOtp(true);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col items-center px-10 py-5 bg-white rounded-md">
      <GiStarShuriken className="absolute w-5 h-5 top-4 left-4 " />
      <h1 className="w-full pb-1 text-4xl text-center border-b max-sm:text-2xl ">
        Login
      </h1>

      <input
        type="number"
        name=""
        id=""
        placeholder="Enter phone number"
        value={phone}
        disabled={startAnimation}
        onChange={(e) => {
          setPhone(e.target.value);
          setError(false);
          if (e.target.value.length === 10) {
            setDisabled(false);
          }
        }}
        className="mt-5 w-[300px] max-sm:w-[200px] max-sm:text-sm bg-gray-100 rounded-md outline-none p-2 text-end placeholder:text-end text-xl tracking-wide disabled:cursor-not-allowed"
      />
      {error && (
        <p className="text-red-500">Please enter a valid phone number</p>
      )}

      <button
        onClick={handlePhone}
        className="w-full p-3 mt-5 text-white bg-blue-500 rounded-md disabled:bg-gray-300 disabled:text-black disabled:cursor-not-allowed"
        disabled={disabled}
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <AiOutlineArrowRight className="" />
        </motion.div>
      </button>
    </div>
  );
};
