"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const About = () => {
  const aboutRef = useRef(null); // Reference for section-based scrolling
  const { scrollYProgress } = useScroll({
    target: aboutRef, // Track scrolling within this section only
    offset: ["start end", "start start"], // Adjusts scaling based on section entry
  });

  return (
    <div
      ref={aboutRef}
      className="quicksand min-h-dvh p-4 pb-16 lg:p-8 lg:pb-16 mt-4 relative flex flex-col items-center"
    >
      <motion.h1
        className="w-full text-[50px] lg:text-[100px] text-center transition-all duration-300"
        style={{ scale: scrollYProgress }}
      >
        Hey, I'm Deepak
      </motion.h1>
      <p className="w-full lg:w-1/2 p-2 text-lg leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-[#e7f1f3] to-[#477696]">
        I build snappy, high-performance web apps and make sure they look damn
        good while running buttery smooth. Whether it's real-time chat apps,
        scaling web platforms, or crafting sleek UI/UX, I love making tech feel
        effortless. Fluent in MERN, Next.js, and system design, I live for
        problem-solving, hackathons, and late-night debugging sessions (powered
        by caffeine, of course ☕). When I'm not coding, I'm probably writing
        poetry, sketching designs, or breaking my own projects just to fix them
        better.
      </p>
      <div className="mt-auto w-full lg:w-1/2">
        <h2 className="quicksand text-white text-lg lg:text-2xl tracking-wider p-2">
          Reach Out:
        </h2>
        <div className="pt-4 pb-4 p-2 bg-[#fff] text-black rounded-lg flex items-center justify-around text-sm lg:text-lg">
          <span className="flex flex-row items-center gap-2">
            <MdOutlineAttachEmail h={48} w={48} />
            <a href="mailto:deepaklg02@gmail.com">deepaklg02@gmail.com</a>
          </span>
          <span className="flex flex-row items-center gap-2">
            <IoCallOutline />
            <a href="tel:+917668519318">+917668519318</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
