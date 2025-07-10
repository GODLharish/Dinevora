import React from "react";
import { CONTACT } from "../constants";
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

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto py-16"
    >
      {/* Section Title Animation */}
      <motion.h2
        variants={fadeInUp}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Contact Us
      </motion.h2>

      {/* Animated Contact Details */}
      <motion.div variants={containerVariants} className="text-neutral-400">
        {CONTACT.map((detail, index) => (
          <motion.p
            key={detail.key}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl"
          >
            {detail.value}
          </motion.p>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
