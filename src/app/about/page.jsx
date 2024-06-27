"use client";
import Brain from "@/components/Brain/Brain";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold ">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              Arief Taufik Rahman is a dedicated and skilled Web Developer with
              a solid educational foundation and a diverse set of modern web and
              mobile development skills. Holding a Bachelor&apos;s degree from
              Gunadarma University, Arief has furthered his expertise through
              rigorous training programs. His proficiency spans a range of
              technologies, including React.js, Next.js, Tailwind CSS, Prisma,
              CodeIgniter, and Android development. Arief has completed two
              intensive 6-month programs: the Mobile Development Path at Bangkit
              Academy in 2023 and the React and Back End Path at Dicoding
              Academy in 2024. These experiences have deepened his understanding
              of both front-end and back-end development, as well as mobile
              application development. Arief&apos;s commitment to continuous
              learning and professional growth, combined with his innovative
              approach to problem-solving, makes him a valuable asset in the
              field of web development.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Excellence demands discipline; mediocrity brings regret.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="120"
                viewBox="0 0 279 242"
                fill="none"
              >
                <path
                  d="M23 200C24.6826 204.595 26.0616 209.312 27.7778 213.889C30.0363 219.912 34.6528 213.244 36.6111 210.333C47.5156 194.124 54.3239 174.694 60.6667 156.389C71.6115 124.803 77.3273 92.3625 83.7778 59.6667C86.8576 44.0558 91.0615 28.5385 93.3333 12.7778C94.0716 7.65617 93.6893 8.74194 94.2222 4.33334C94.3931 2.91957 95.0411 0.859125 94.7778 4.61112C93.7699 18.9732 90.3205 33.4192 87.7778 47.5556C82.8667 74.8586 77.3345 101.971 69.7222 128.667C66.22 140.948 62.3157 153.109 58.2778 165.222C55.937 172.245 56.5234 173.899 58 165.778C59.5749 157.116 60.6611 148.312 61.5556 139.556C61.9275 135.915 60.7922 127.619 65.5 133.111C78.025 147.724 93.4737 159.445 109 170.667C116.074 175.78 114.349 165.044 113.778 160C113.263 155.457 110.016 143.657 106.444 152.5C103.614 159.508 98.4884 181.349 102.222 174.778C106.286 167.625 106.191 158.826 109.444 151.389C113.978 141.026 107.81 174.005 105.667 185.111C105.48 186.076 105.111 188.188 105.111 189.389C105.111 189.748 105.579 188.83 105.722 188.5C108.604 181.849 111.86 175.407 114.556 168.667C116.472 163.877 118.335 159.252 121.111 154.889C123.138 151.703 122 158.557 122 159.5C122 169.483 120 179.491 120 189.333C120 192.191 121.631 183.851 122.611 181.167C125.256 173.921 126.985 166.539 129 159.111C129.133 158.623 130.9 150.907 131 156.222C131.201 166.849 131.305 177.606 130.833 188.222C130.527 195.116 129.236 201.617 128.167 208.389C128.086 208.902 127.943 210.452 128.056 209.944C128.544 207.745 128.748 205.333 129 203.111C131.025 185.262 133.991 132.024 136.722 149.778C139.283 166.425 136.72 185.55 135.556 202.222C134.441 218.168 134.746 210.599 133.667 225.444C133.52 227.461 132.027 236.491 133.556 239.111C135.559 242.546 134.871 231.25 135.056 227.278C135.96 207.831 136.867 188.198 139.444 168.889C141.112 156.396 143.392 141.289 152.667 131.778C163.449 120.72 183.601 120.903 197.778 121.389C205.854 121.666 216.88 122.378 221.889 129.944C227.503 138.426 223.732 151.885 218.444 159.556C207.815 174.975 187.613 182.766 170.5 188C163.357 190.184 157.699 191.373 150.611 193.333C149.926 193.523 139.797 195.61 138.778 197.556C138.672 197.757 148.454 198.001 148.556 198C157.82 197.946 167.07 197.63 176.278 196.556C176.99 196.473 183.069 195.607 178 197.167C163.491 201.631 147.536 202.709 132.556 204.556C131.643 204.668 106.204 206.079 106.444 209.444C106.881 215.559 137.395 221.499 141.111 222.5C158.805 227.267 176.598 230.788 194.778 233C200.144 233.653 204.407 235.108 195.333 234.778C175.785 234.067 156.188 231.599 136.722 229.833C96.3302 226.17 55.813 222.766 15.6667 216.889C11.247 216.242 -1.66681 213.667 2.77778 213.222C21.2607 211.374 40.5652 212.855 59.1111 212.389C126.84 210.686 194.548 205.582 262.333 207.222C263.802 207.258 279.764 205.625 277 211.444C273.316 219.201 265.356 223.779 259 229"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Prisma
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Android Kotlin
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Python
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Streamlit
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col justify-center gap-12 pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM 1*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    Dicoding Academy React and Back End Path
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Become cohort with 100% completion
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                    Dicoding
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    Bangkit Academy Mobile Development Path
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Become cohort with graduate distinction
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                    Bangkit
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
