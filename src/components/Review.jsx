import React from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
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

const Review = () => {
  return (
    <motion.section
      id="review"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto mb-8 mt-12"
    >
      {/* Review Content */}
      <motion.div variants={fadeInUp} className="flex flex-col">
        <motion.p
          variants={fadeInUp}
          className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>

        {/* Reviewer Profile */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.img
            src={xaviour}
            alt={REVIEW.name}
            className="rounded-full border"
            width={80}
            height={80}
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Customer Images */}
      <motion.div
        variants={containerVariants}
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            key={index}
            src={customer}
            initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="h-[300px] w-[200px] rounded-br-3xl rounded-t-3xl object-cover"
            viewport={{ once: true }}
            alt=""
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Review;
