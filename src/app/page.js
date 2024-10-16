"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczPPMznh-X4SGuKZ2BuIbRdqxB694vy66YrWFsL4784TADSm720alxMYC8a_x_fIsPqEMFfOvQJt1zY1vSyh4EAi_lckcPO_bqHJTREp7f2YG0oKigFQJnzvcUSO-7G9Eb9CemHM08OZYlab8vrlSauA=w945-h945-s-no-gm"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Revolutionizing Modern Web Development Like Never Before
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome to my portfolio website! I am a passionate web developer
            with a passion for creating beautiful and functional websites.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <button className="p-4 text-white bg-black rounded-lg ring-1 ring-black">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
