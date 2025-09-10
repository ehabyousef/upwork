"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import avatar from "../../public/model.png"; // ensure this file exists in /public
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useWindowScroll } from "react-use";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false); // detect scroll
  const [expanded, setExpanded] = useState(false); // override mini width when clicked on avatar

  // scroll the nav appear
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setlastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true);

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
    }
    setlastScrollY(currentScrollY);
  }, [currentScrollY]);

  // Reset expanded state when scrolled state changes
  useEffect(() => {
    if (!scrolled) {
      setExpanded(false);
    }
  }, [scrolled]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        layout="position"
        animate={{
          height: menuOpen ? "auto" : 64,
          borderRadius: 35,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          layout: { type: "spring", stiffness: 300, damping: 30 },
          height: { duration: 0.3 },
        }}
        className={`relative flex flex-col bg-[#121212]/95 backdrop-blur-sm border border-neutral-800 
          shadow-[0_0_0_1px_rgba(255,255,255,0.04)] shadow-black/40 overflow-hidden
          ${!isNavVisible && !expanded ? "xl:w-[200px]" : "xl:w-[500px]"}
          w-[280px] px-2 width-transition`}
      >
        {/* Row container */}
        <div className="flex items-center gap-4 h-16 pl-1">
          {/* Avatar - clickable on large screens when scrolled */}
          <div
            className={`flex items-center justify-center w-10 h-9 object-cover rounded-full overflow-hidden shrink-0 `}
            style={{ background: "#C0C1BB" }}
          >
            <Image
              src={avatar}
              alt="avatar"
              width={48}
              height={48}
              className="w-10 h-10 object-cover"
              priority
            />
          </div>

          {/* Status indicator - only on XL screens when scrolled and not expanded */}
          <AnimatePresence mode="wait">
            {!isNavVisible && !expanded && (
              <div className="hidden xl:flex items-center gap-2 mr-2">
                <span className="text-xs text-neutral-400 whitespace-nowrap">
                  Available for work
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
                </span>
              </div>
            )}
          </AnimatePresence>

          {/* Desktop full nav - visible only at xl breakpoint and when not scrolled or expanded */}
          <div className="hidden xl:flex items-center justify-between w-full">
            <AnimatePresence mode="wait">
              {(isNavVisible || expanded) && (
                <motion.div className="flex items-center gap-8 text-sm tracking-wide font-medium">
                  {[
                    ["Home", "#home"],
                    ["About", "#about"],
                    ["Projects", "#projects"],
                    ["Blogs", "#blogs"],
                  ].map(([label, href], i) => (
                    <motion.a
                      key={href}
                      href={href}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-neutral-200 hover:text-lime-300 transition-colors duration-200"
                    >
                      {label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact button - always visible */}
            <AnimatePresence mode="wait">
              {(!scrolled || expanded) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.035 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-fancy shadow-sm shadow-black/40 h-10"
                >
                  Contact
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile nav - hidden at xl breakpoint */}
          <div className="xl:hidden flex items-center justify-between w-full">
            <AnimatePresence initial={false}>
              {!menuOpen && !scrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span
                    className={`text-xs text-neutral-400 ${
                      menuOpen ? "hidden" : ""
                    }`}
                  >
                    Available for work
                  </span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile menu toggle button */}
            <div className="ml-auto">
              <motion.button
                whileTap={{ scale: 0.9 }}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
                className="w-10 h-10 rounded-full bg-lime-300 text-black font-semibold flex items-center justify-center shadow-inner shadow-lime-200/40 hover:bg-lime-200 transition-colors relative"
              >
                <AnimatePresence mode="crossfade" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close-icon"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-xl absolute"
                    >
                      <IoMdClose />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu-icon"
                      initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-xl absolute"
                    >
                      <HiOutlineMenuAlt4 />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="text-xl leading-none opacity-0">≡</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                opacity: { duration: 0.2 },
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  mass: 1,
                },
              }}
              className="w-full overflow-hidden xl:hidden"
            >
              <div className="pt-2 pb-4">
                <nav className="flex flex-col items-center text-sm font-medium tracking-wide">
                  {[
                    ["Home", "#home"],
                    ["About", "#about"],
                    ["Projects", "#projects"],
                    ["Blogs", "#blogs"],
                  ].map(([label, href], i) => (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        delay: 0.06 * i,
                        duration: 0.3,
                      }}
                      className="py-4 w-full text-center text-neutral-200 hover:text-lime-300 transition-colors"
                    >
                      {label}
                    </motion.a>
                  ))}
                </nav>
                <div className="flex justify-center mt-2">
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="btn-fancy shadow shadow-black/50 px-12 h-10"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
