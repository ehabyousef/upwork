"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiDribbbleLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import { FaBehanceSquare } from "react-icons/fa";
// Counter component for animated numbers
function Counter({ from = 0, to, suffix = "", inView }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);
  const nodeRef = useRef();

  useEffect(() => {
    if (inView) {
      const animation = animate(count, to, { duration: 2 });
      return animation.stop;
    }
  }, [count, to, inView]);

  return <motion.span ref={nodeRef}>{displayValue}</motion.span>;
}

export default function AboutSection() {
  const [statsInView, setStatsInView] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-12 xl:px-52 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <h2
              style={{ lineHeight: "1rem" }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              ABOUT ME
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-0">
              Hi, I'm Duncan — a digital designer and Framer developer
              passionate about crafting meaningful and impactful digital
              experiences.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => setStatsInView(true)}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-4"
            >
              <div>
                <div
                  className="text-4xl md:text-5xl font-bold text-[#d0ff71]"
                  style={{ lineHeight: "1rem" }}
                >
                  <Counter from={0} to={12} inView={statsInView} />
                </div>
                <div className="text-sm md:text-base text-gray-400 mt-2">
                  Years of Experience
                </div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-bold text-[#d0ff71]"
                  style={{ lineHeight: "1rem" }}
                >
                  <Counter from={0} to={270} inView={statsInView} />
                </div>
                <div className="text-sm md:text-base text-gray-400 mt-2">
                  Completed Projects
                </div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-bold text-[#d0ff71]"
                  style={{ lineHeight: "1rem" }}
                >
                  <Counter from={0} to={50} suffix="+" inView={statsInView} />
                </div>
                <div className="text-sm md:text-base text-gray-400 mt-2">
                  Clients on Worldwide
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white text-xl font-semibold ">
                  Call Today :
                </h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold ">Email :</h4>
                <p className="text-gray-300">designer@example.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start mb-0">
              <a href="#" className="w-12 h-12 rounded-lg">
                <FaXTwitter size={30} />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg">
                <PiInstagramLogoFill size={30} />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg">
                <FaBehanceSquare size={30} />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg">
                <PiDribbbleLogoFill size={30} />
              </a>
            </div>

            {/* My Story Button */}
            <div>
              <button
                className="btn-fancy w-44 border h-12 mt-6 text-xl"
                data-variant="outline"
              >
                MY STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
