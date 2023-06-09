"use client";

import Image from "next/image";
import React from "react";
import bike from "../assets/bike.png";
import { motion } from "framer-motion";

function CenterPoster() {
  return (
    <div className="flex items-center justify-center -mt-10">
      <div className="relative  rounded-t-full bg-gradient-to-bl from-yellow-200 via-pink-100 to-blue-200 w-[30vw] h-[75vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[30%] left-[50%] -translate-x-[50%]"
        >
          <h1 className="text-xl italic font-semibold">Motorad | X1</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 420 }}
          transition={{ duration: 1.5 }}
          className="absolute -bottom-[11%] right-[50%] w-[40vw]"
        >
          <Image
            src={bike}
            alt="bike"
            height="full"
            width="full"
            className="w-full h-full "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default CenterPoster;
