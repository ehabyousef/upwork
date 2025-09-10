"use client";

import { motion } from "framer-motion";
import style from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container px-12 xl:px-0 flex flex-col xl:flex-row items-center justify-between xl:justify-around h-screen xl:ml-[6rem]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left xl:mb-[8rem] mr-auto xl:mr-0 mt-24 xl:mt-0"
        >
          <h2 className="text-3xl font-medium text-gray-300 mb-2 tracking-wider uppercase">
            Duncan Robert
          </h2>

          <h1 className="text-6xl lg:text-9xl font-bold text-white mb-6 leading-none">
            DIGITAL
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left ml-auto xl:ml-0"
        >
          <h1 className="text-6xl lg:text-9xl font-bold text-white mb-6 leading-none">
            DESIGNER
          </h1>
          <p className="text-gray-300 text-lg text-right mb-8 max-w-md">
            I'm a US-based digital designer and
            <br />
            Framer developer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
