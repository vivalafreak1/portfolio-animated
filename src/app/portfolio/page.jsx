"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioItem = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Explore Bali",
    desc: "Creating destination website in Bali by creating our own API with NodeJS, ReactJS, and TailwindCSS.",
    img: "https://lh3.googleusercontent.com/pw/AP1GczPYr-ioPayc7Q0OvSLLErCaZL8VZchH-ZkiFmnunZ55ACEF-3NFDfVhoVqEH9lSMFZnORc9LXkpd8Z92yQlXbnf1I9vOnK1X8aLQjAy7zF3GZwhXQ306Pm96c9wnMikWG6T5HlOR4ARtjn1yRd_XKG07Kghh923qBInFv-YLYOiLnsfOq-C54pLfat_WiVtXFix0h6tv-xEdfeUuAiSTOOkUxMiuMJzhafvvVcj22Uu0Q3VxI4BkSihRNOTHTaZ3MdGlyQ1mROXGDcGCEGOLP49MjE0smUI3B0wYrL_6qbBnt40I2L_MBK09RPunKO0X9ywt4YkP1iM_dajdWIG8jqSSvoLcei1XRIN1WqeFlEytWGFZJKOXP5n85dYOMzf3_kqMoTCzWpR4ZnotlHL2qdt6J1Hz8iR1pVyQ4yHnsi-zFpktakE48Wm7s08Rz_UMl_ePGv61szjrPfB5PcLfB-RlsyFThtxCqq76R_nF2wIAy_ElWRID5BUiIrIWcO36J7HOUB4LiHk0CXNIAx_SyUtgSFT9cFM8o2-nX4N2yAa9FS8ETnV5CMv6BNzD0UWI9anR8SN3IVWfaEz0kJLem3SeRAu_hcQiDVAkFheNXEuT6dB5X06hwwykNKvoODRONIIj1bEi5NS1BgYN7FXv0mu0B-VTJzLkLmzrddfHh_-DRDAQtzEA9oavzZN7bhyTfu8A9rrJ2bE10FfzvcgU3e8N4oNtSkk6I4ye7EVSIqbvJ4rOrGEb0gu-oWtLL83GIfk7V-ks2ZiHYGGH84oRZ5MluXAhEuaE1h5BJV7jHOo0X4j8AFiZ2YwDKJ714Z02bX2QTBcNL8oimkNpXJ91Q6SNUuVH6NrYPJZ5z3AIC_UUyKuzzzYt_HPzOy8yTsTRzF6sGO5EPO-WI2_EtOS9bfYGg=w1603-h846-s-no-gm?authuser=0",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7211067943726563329/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Wibu Nation",
    desc: "Building an anime portal web application by implementing API from Jikan API, implement login feature: collection, and comment with NextJS, TailwindCSS, Prisma.",
    img: "https://lh3.googleusercontent.com/pw/AP1GczODJRftaCqKlJljjt4F1e2jJr3Z5xXsj2REP61txLXyKWa4pzI8WPq_NWTyjONwScJ7_hQe8RQFXSry-gywqCveGP-iigrfr4tOh7NQPfFrVDfvjrNKMJ58AuV3W2UiPgBFYRY33FZ8o1pzOxsbkC_FBdbPQHvGEpMiuLcAe0Gdwo5YCIgoZCNCfjQKeV3D6nB5HXJYZJyRgqFWPzQpXbzavEYVtdQNACi0e6BP7wq5rwTd4oP4i3jxnDZwE2nDgtvn-Cy8xpHOSbAQG3P_HtuUjNVB8IvR3LWmMXu94wyl6EtJameuoJNEoMHlmZ17VhijNTH9H_aPn8uxLSZG5_tM0ZJiwuXnD-CeEWgm464h1qzvnqwDhsEFNWu83mIQ39xSj4xzBBbNEDX-KaB3N1TGn-5z9vuvKPphxG6UCV5R-aELS1QJXwqknKgNnNhaVqxJrqV_v0cm-G7ZRbJnstxWfzuPgjoOKGP_dsK_NkxY_Rz4zbzbVuA2K-2uGYQeUMA4WsBve8eFp7Grt0JlCio2N2bkVW21fo9eNx3XxBmmZaYhb1rKalpHo1nnMXWWo8ldIqSTiq8Nt_9dr_x5W7SfdMUaTEWozFGpxs0VnnOzz3b2ayzA0E6od-s2yg6XQnRPDSnLYUAXKBXhI3oLOowQi-NG78aKPJ388s3FmSg7d908O2InvSdCGSRUqfqM5kjzGfrbhd9-dZWS6crno7MC0anBTpw-QG9x4KCujWsjy-RJSyrkCi7B28uB6Pb0Xic-QSj0kqCXMrVzpbMkQcS06RGfNznNjQXEVp10hfod3u98Xx-W40y2Lqp9Zkc5a5CCBIlc0yzEIXrdcsk6-ayxVqRRQPO5PRw3dmdZkPzWsNup4HlwsE55yY1VtSkDpvDr-wz2kGLxHEJpZ0yD3mdkRA=w1898-h941-s-no-gm?authuser=0",
    link: "https://github.com/vivalafreak1/anime-next",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Open Weather App",
    desc: "Building weather app with NextJS, TailwindCSS, and OpenWeather API.",
    img: "https://lh3.googleusercontent.com/pw/AP1GczNUt0-ItBhaV_APF-5-6JqDtRbK5qvHHr9QzK_Kwv_X4OKp80RJP-JxF5DfHxDPVA3sYaCC3PmbEkOnTCg_QnMBVM-VwC7PKk5jVRohgoE9DItMe67z6nPAAGCOGn9hOd8THw--MpvML2lJ5z05oTkNvhfzTELBO8tQJP-2CxJEb5s7uBqIjWmLdqMowER0dGaz_Qi0PyAmhpIDy69DaAL1KCqeCsEBofp2nnBrU3Fip_z2Xvu6a3ydRpoLzhSpq843_ZT7GACooUz9XVBDZJpSg2e_f5PT2hJ8gSCfCwt7c7s32peSaSkCYL0fA2JHFbNg-D37ISsYgRlCFSlaq45SMfjRMIQZCwJtcsQSy9EftPucXhmYRYL9W_q5tKIFGtAobEV9wYDnE5c8CV_bdaA9PmCdY3z9rLvA7JRrCNJRdIUh4L5hUA6SA-e-ArGVEMcXCT3Zi1OinpNh3SUIfF2Ayjq0v9EHizPELGPANWN-_lUacWjEbjd4gyseJ5bmeL8c1ZCaaDTUN64PTXvevaVqStaxNsWo1mfcv5i1KkGwk0Le6btS-W7yohNcF2qtFuF9nJlNAHMd_7v9d_SnVray_w3AMSCqt3Er52xbM-j1nwtAK-Rsn-4skePJy2dA9YELBnpuHSTyLMuAovzWZvhXpuupY33ngW2e5_ZhZTfzBNEt-iU52rA2J_NJ5DJLoN6gb_s0q4q5r09-HSicKg6GpCAs7sDjChdTKT3ISRD-ZiFbGouVP7mRkGXhJ2ZLXHgXwaf3nzX9VV7YxWuJPBP6Yv39cITbqVFCsGQhFejkT3o9O1OFTkeSdywztmsUZS7XxLLBCH8ZGsU9UrI54DlttJHFBdcQ0DbF5FtTvwZ0qmO5QhJfSGPeKXUYx0eDIsOSdMoUKIV3cQWrnDSGRLnxkw=w1301-h918-s-no-gm?authuser=0",
    link: "https://cekcuacayuk.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Image2RGB",
    desc: "Image Processing web-based using Streamlit, Python and OpenCV.",
    img: "https://lh3.googleusercontent.com/pw/AP1GczM-B3zGftSXoaC5fXBrQ_h96jfUIO633QMCh2KTJVjUEI1JUTnc7nEk38dsGOCPdJjMIoTPpUr5yPIUDKatIiCGAdXtot3hDYSjL-pnUiUVWAjkVL_NDoZk1Ik1qekZGNCoCKc1mEnhLJBbHuszlTe7brHguFrM0cnGi8eVJXC-JnXrQNS3NAdT204nOkvFdasmo7LW_SzhzpIivJq68EJ-biYp-7vSoAu4z-QCU9D2Tylvn_oxMQFA-IUOq9kdXxF2Cz_Pg5RZv3y6X7e0snKeG8yQrlP35uA4VyXtGk5HTarkTIJHqYEFCQG1cCO_U9AF6htBCORtC-tNxp6PxV_lZdTeuHVmW3YaKppHWUo2NsVunyoNGDBhfSg8i4P9KF4NzG7dwxfrQYfjNJw7Kz5jiXTSQnS3zf4o2NtyQxDOqBC84PWPWEFp-EMHZugz7_83Xd-zRQlqOTuHB57vqZneOjrZDCP7A_oeNl9ZrwBZqdzzLM3TfeUkayzGt6OH41XaY5lAChaU_hc9CuHu9xzE7vA7OlajLDYA29e3mMBLxfIOq_lyfL_3jGMELkFJxvvReCBtaHTfU-KZoqd_lT64hfyGDcZzmAH8ZEhuuR79Z-ssO0wN4zMunMke0QcQldDzeHE4dt8NWpuCUAzgSCizE6jDc0AgEuaxBa7skp3unSXR0DMN622gKwqEKooAYZni1f0uo2VVrXetKtM7Hob0hx_J4iSWB1B6kVxcSjEkQzyExhAbdYyzWwgJFMoOVSR-AVWXdQj0UWcMu8r8AG5S1e8f1H7HOpSDu7RHebs0DSyekxLDknI8QShPBus5Oc_moHSX7TEpUzyOjiWvT7VUz-cxziZtQapz6jAtSxMiBhnIOfuYlpgC17qm8qWt0vCem6bNemBlUF_5tmbKz2GsHQ=w1919-h940-s-no-gm?authuser=0",
    link: "https://github.com/vivalafreak1/img2rgb",
  },
];

export default function PortfolioPage() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex items-center h-screen gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="flex items-center justify-center w-screen h-screen bg-black" />
            {portfolioItem.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-black`}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative h-56 w-80 md:w-96 md:h-64 lg:w-[500px] lg:h-[450px] xl:w-[800px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 m-4 text-sm font-semibold text-gray-600 bg-white rounded-lg md:p-4 md:text-md lg:p-8 lg:text-lg">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer and Android Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-16 h-16 m-auto text-white bg-black rounded-full md:w-28 md:h-28"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
