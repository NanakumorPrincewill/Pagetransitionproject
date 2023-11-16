"use client";
import Transition from "@/components/Transition";
import React from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <div>
      <Transition />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="container mx-auto px-4 py-6"
      >
        <h1 className="text-3xl font-bold">Blog page</h1>
        <p className="text-lg">This is my blog.</p>
      </motion.div>
    </div>
  );
};

export default BlogPage;
