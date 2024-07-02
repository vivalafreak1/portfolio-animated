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
            src="https://lh3.googleusercontent.com/pw/AP1GczOl_WCyAG0YSdLHhv8M-6iRyrzjf1-iJSWMA1MBaUUSu8F8PG8-53X4lOWtbBv3kHMDb4Cq1GGO_O75hBZJOn-FwQpvkZDRuCnEPNiKFtcCJI7PAiuqUeEt22_t5Uixnlj2RVZLSj1NWvZ7-qIE92I50aw3RetL3VroxM3WVsaLxE5TTLKZAIML8mzy086sQeqcvONe_XHyrXmHpFIKvCno3ci8u8rcXezTLciaM2OfWwI9Cp_Zrs0juqG04wZpYoxEK8ueI8FON3AXw-BGWNvOufnReeuEptRTNyODvTNoapPlU0DhGroJoo07Zu0Z5WThAF_NsfR9bqwpbPlrQBLWLTZXkjjbOfu2AB_eN8b3uwXhkW14BToBckJatZ16CnN_9LkaK--_cTNxaMYTzeigS3nr4xye-w2r2Bon7XPgW7sqe1IDTscwo4_iEs72QJsspq9K0IRZUH-N-Drk2mIA4oRMYPDqJBhccUcgd2vgfSzWp7f63B_syOnfxQiJSG7q_v6NITyZPVe9zisQxqP3KPc5LyVnaxds1TKfMUfuQcOhKu_p8DVV_K9WSveI_SheRxDnYPrrFh1mRkfr9F2HR0WGibyL0Db72yjxf3bOT1YqCIYBMRP2bmzHgeWuHk7iqE-j5DYCk7CxMBH4i1KB_K2CRCsy3t3ZmsRnE7UJOnvC78WoQAo0x2ftNAEwCxxeYRTBuGb9S145OOyRus3BejXjOyiTJ_PtnuXXv7g7tsxHXREBXyEn2LTh9r_rWkOQJLLKJBpsdOK4qjolhZifZPlYdPvFpqCvRpc7KVFGOjoEoLv4y89hmmnI1ol5UULXHj_VDN9iagp8l-yVPXZ24u2fQpXKLco2Eyhu06tI_MoJmUC8TfzCS1uQqvG-y1GRK59vGwTV2nqsfDExdigPew=w1496-h1496-s-no-gm?authuser=0"
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
