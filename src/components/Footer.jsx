import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const Footer = () => {
  return (
    <motion.div
      className="mb-8 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Social Media Icons */}
      <motion.div
        variants={staggerContainer}
        className="flex items-center justify-center gap-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ scale: 1.2, color: "#f43f5e" }}
            transition={{ duration: 0.3 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright Text */}
      <motion.p
        variants={fadeInUp}
        className="mt-8 text-center tracking-tighter text-neutral-500"
      >
        &copy; Tirthesh. All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;
