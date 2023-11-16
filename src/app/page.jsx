"use client";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <div>
      <Transition />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="container mx-auto px-4 py-6"
      >
        <h1 className="text-3xl font-bold">Home</h1>{" "}
        <p className="text-lg">I am a web developer based in Kyiv, Ukraine.</p>{" "}
      </motion.div>
    </div>
  );
}
