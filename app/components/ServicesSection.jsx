"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronUp, FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import skill1 from "../../public/skills (1).jpg";
import skill2 from "../../public/skills (2).jpg";
import skill3 from "../../public/skills (3).jpg";
import skill4 from "../../public/skills (4).jpg";
const ServicesSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: "UI/UX DESIGN",
      image: skill1,
      items: [
        "User interface design for web and mobile",
        "User experience research and testing",
        "Wireframing and prototyping",
        "Interactive design systems",
      ],
    },
    {
      id: 2,
      title: "GRAPHIC DESIGN",
      image: skill2,
      items: [
        "Logo and brand identity design",
        "Social media graphics and ad creatives",
        "Infographics and data visualization",
        "Custom illustrations and icons",
      ],
    },
    {
      id: 3,
      title: "WEB DESIGN",
      image: skill3,
      items: [
        "Responsive website design",
        "Landing page optimization",
        "E-commerce design solutions",
        "Custom web applications",
      ],
    },
    {
      id: 4,
      title: "BRANDING",
      image: skill4,
      items: [
        "Complete brand identity packages",
        "Brand guidelines and style guides",
        "Marketing collateral design",
        "Brand strategy consultation",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="h-[85vh] md:min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-10 xl:px-52 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                WHAT I CAN DO FOR YOU
              </h2>

              <p className="text-gray-300 text-lg mb-12 max-w-lg">
                As a digital designer, I am a visual storyteller, crafting
                experiences that connect deeply and spark creativity.
              </p>

              {/* Accordion Services */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-b-gray-300"
                  >
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === service.id ? null : service.id
                        )
                      }
                      onMouseEnter={() => setHoveredService(service)}
                      onMouseLeave={() => setHoveredService(null)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center">
                        <span
                          className="font-bold text-xl lg:text-3xl mr-4"
                          style={{ color: "var(--green)" }}
                        >
                          {service.id}.
                        </span>
                        <h3
                          className={`text-xl lg:text-3xl font-bold transition-colors ${
                            openAccordion === service.id
                              ? "text-[var(--green)]"
                              : "text-white group-hover:text-[var(--green)]"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{
                          rotate: openAccordion === service.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        // style={{ color: "var(--green)" }}
                      >
                        <FaChevronUp />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openAccordion === service.id ? "auto" : 0,
                        opacity: openAccordion === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-8">
                        <ul className="space-y-5">
                          {service.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex text-xl items-start text-gray-400"
                            >
                              <FaRegCircleCheck
                                className="mr-3 mt-1 flex-shrink-0"
                                style={{ color: "var(--green)" }}
                                size={16}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Image on Hover */}
      {hoveredService && (
        <motion.div
          className="hidden lg:block fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 50,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-56 h-32 rotate-6 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={hoveredService.image}
              alt={hoveredService.title}
              width={200}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ServicesSection;
