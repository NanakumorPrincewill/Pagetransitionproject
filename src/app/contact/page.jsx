"use client";
import Transission from "@/components/Transition";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div>
      <Transission />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Contact Page</h1>
          <p className="text-lg">You can reach me at hi@example.com.</p>{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
