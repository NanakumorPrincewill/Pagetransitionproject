"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex justify-between items-center"
        >
          <Link href="/">
            <h2 className="font-bold text-5xl">Logo</h2>
          </Link>

          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`px-3 py-2  rounded-md text-sm bg-yellow-600 font-medium ${
                  pathname === link.href
                    ? "bg-green-900 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <button className="md:hidden focus:outline-none">
            {/* <ChevronDownIcon className="h-6 w-6 text-gray-500" /> */}
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
