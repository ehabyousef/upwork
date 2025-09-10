"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import model from "../../public/model.png";
import skill from "../../public/skills (1).jpg";
import { MdFrontHand } from "react-icons/md";
import style from "./FlipCard.module.css";
import { useRef, useEffect, useState } from "react";
export default function CenterCard() {
  const cardRef = useRef(null);
  const handRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const { scrollY } = useScroll();
  const { scrollYProgress: handScroll } = useScroll({
    target: handRef,
    offset: ["start end", "end start"],
  });
  // Transform for the flip rotation based on scroll - 3D rotation with both X and Y
  const rotateY = useTransform(scrollY, [0, 1000, 2000], [0, 180, 360]);
  const rotateX = useTransform(
    scrollY,
    [0, 500, 1000, 1500, 2000],
    [0, -15, 0, 15, -20]
  );

  const rotateZ = useTransform(scrollY, [0, 1000, 2000], [0, 8, 5]);

  // Transform for additional movement during scroll
  const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 330]);
  const scale = useTransform(scrollY, [0, 1000, 2000], [1, 1.1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]); // Keep visible
  const transform = useTransform(
    handScroll,
    [0, 1],
    [
      "translateX(-50%) translateZ(20px) rotateX(0deg) rotateY(0deg) scale(1.5)",
      "translateX(-50%) translateZ(30px) rotateX(10deg) rotateY(-10deg) scale(0)",
    ]
  );
  return (
    <motion.div
      ref={cardRef}
      className={`hidden fixed inset-0 lg:flex items-center justify-center pointer-events-none z-30`}
    >
      <motion.div
        style={{
          translateX,
          rotateY,
          rotateX,
          rotate: rotateZ,
          scale,
        }}
        className={`${style.flipContainer} w-64 sm:w-56 md:w-60 xl:w-80 pointer-events-auto`}
      >
        <div
          className={`${style.f1_card} overflow-hidden rounded-2xl shadow-2xl bg-[#C1C2BC] h-[350px] xl:h-[450px]`}
        >
          <div className={`${style.face} ${style.front}`}>
            <Image
              src={model}
              alt="Profile Front"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`${style.face} ${style.back}`}>
            <Image
              src={skill}
              alt="Profile Back"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating hand icon with CSS-only 3D depth */}
        <motion.div
          ref={handRef}
          style={{ transform, opacity }}
          className={style.handFloating}
        >
          <span className="text-2xl handIcon">
            <span className="handWaver">
              <MdFrontHand size={46} color="#222" />
            </span>
          </span>
          <span
            className="text-2xl hiText absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest"
            aria-hidden
          >
            HI
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
