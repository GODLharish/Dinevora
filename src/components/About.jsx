import React from "react";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto mb-8 px-4 lg:px-0" id="about">
      {/* Section Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        About Us
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Image with Smooth Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full p-4 lg:w-1/2"
        >
          <img
            src={about}
            className="rounded-3xl shadow-lg lg:rotate-3"
            alt="About Us"
          />
        </motion.div>

        {/* Text Section with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
            },
          }}
          className="w-full px-2 lg:w-1/2"
        >
          {/* Animated Header */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>

          {/* Animated Divider */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.5 } },
            }}
            className="mb-8 mt-1 h-2 w-36 origin-left bg-rose-300 lg:rotate-3"
          ></motion.div>

          {/* Animated Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            {ABOUT.content}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
