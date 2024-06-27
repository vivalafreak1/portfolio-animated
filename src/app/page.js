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
            src="https://lh3.googleusercontent.com/pw/AP1GczPBuGwbCrmKr4A6RSqFHMxa7z2y7ibs6UKr5Jve2VtDvV-8yPLtxmdjm80Bomo3NmtYBY5cLi6Qv4Yg_Om8jPkFfCy2q15m55BEhlJIvY9X4NSBdfdbI12pLB1ecBskgAnnvrZPT4kUVxHMGiDmJ7zorvLrNjuzAI4BRUnWjkOVn_3KAYlWWkMJJrpE6DXb5qp8ntttVUNsNcEA_2fnV1L4cZDAGam_snKENhIcRVgSOXuQaH5jO1V5PgS659raMVVmLmZidmJe1wfHdXiDu6eO5AtiM9eGT6d-l9pM0cs02kZOb3D6uWWwP-2zwNMYdhkZV1TpWN5fzab7wTKCmAMO2XPlEOOGS0Joe6qXX8OtAAn5v_F-rJqhuAi7c1Fv8edrr6zfD02N8vGFibeqFBL1WKKETf_YNxVI-cFxn4uqeFos23V3lXFyzSY_67-RoeLDkOZqkLNCo3jxAGdDoxYISRWBDy7c_GrQ9nJq7tZkCq6R5EYPr1FzZ1S1oH6SkiemYa5rzfjl132XJJENnV6h5xUX3TiQ3ENRYZjXfx8ji-pyqv4jH5CQzfoSXs5sTiTQrkfH5ouL-TssuxTVPy10WmItx0KhjfstJDrcoHunVRLCaTV9v2F-C33G7oTB_iLQsBmXtD6ZozwRc6SH-Yu1GSQun9xWwhhlbck-ygC2YWb-YImZxIac7umkX_E6andPsl-ughmQh4XqZkeJH8H62mJap49akpUQeIfgAeS1OykxdHPJFnktk_VvxdLFqWH-4Cgj7UXXrtA5CcUkwu2Fw7pByYcOA-_xD6_t11k5D0LEjUDcf7wnZWfPsvRATcUSUO8hT2X8-Fh_q2NPzVa-p4NWbJ4YC0dibBwcKuw_WACZsVQfO1Jz6ZXy5LU61GFPUge0xNQoyPe718LHRljL6fGAPnUdjdSm1EBtBbUR74JSOpZhkYbFf2SYMgc=w945-h945-s-no-gm?authuser=0"
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
