"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }}      
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
