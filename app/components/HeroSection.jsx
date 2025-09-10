"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "./HeroSection.module.css";
import model from "../../public/model.png";
import skill from "../../public/skills (1).jpg";
import { MdFrontHand } from "react-icons/md";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* small screen card  */}
      <motion.div
        className={`absolute lg:hidden flex items-center justify-center pointer-events-none z-30`}
      >
        <motion.div className={`w-52 sm:w-72 md:w-80 pointer-events-auto`}>
          <div
            className={`relative overflow-hidden rounded-2xl shadow-2xl bg-[#C1C2BC] h-[350px] md:h-[400px] xl:h-[450px]`}
          >
            <Image
              src={model}
              alt="Profile Front"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating hand icon with CSS-only 3D depth */}
          <motion.div className={style.handFloating}>
            <span className="text-2xl handIcon">
              <span className="handWaver">
                <MdFrontHand size={35} color="#222" />
              </span>
            </span>
            <span
              className="text-lg md:text-2xl hiText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest"
              aria-hidden
            >
              HI
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* end small screen card  */}
      <div className="container px-12 xl:px-0 flex flex-col xl:flex-row items-center justify-between xl:justify-around h-screen xl:ml-[6rem]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left xl:mb-[8rem] md:mr-auto xl:mr-0 mt-36 xl:mt-0"
        >
          <h2 className="text-xl md:text-3xl font-medium text-gray-300 mb-2 tracking-wider uppercase">
            Duncan Robert
          </h2>

          <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold text-white mb-6 leading-none">
            DIGITAL
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left md:ml-auto xl:ml-0 mb-[3rem] lg:mb-[0rem]"
        >
          <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold text-white mb-6 leading-none">
            DESIGNER
          </h1>
          <p className="text-gray-300 text-lg  mb-8 max-w-md">
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
