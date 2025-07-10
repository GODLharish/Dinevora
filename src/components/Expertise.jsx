import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const Expertise = () => {
  return (
    <motion.section
      id="expertise"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto px-4"
    >
      {/* Section Title Animation */}
      <motion.h2
        variants={fadeInUp}
        className="my-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        Our Expertise
      </motion.h2>

      {/* Animated List of Cuisines */}
      <motion.div variants={containerVariants}>
        {CUSINES.map((cusine, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-6"
          >
            {/* Image Animation */}
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-1/3 flex-shrink-0"
            >
              <motion.img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text Section with Staggered Animation */}
            <motion.div className="pl-8">
              <motion.h3
                variants={fadeInUp}
                className="text-2xl uppercase tracking-tighter text-rose-300"
              >
                {cusine.title}
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-lg tracking-tighter"
              >
                {cusine.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Expertise;
