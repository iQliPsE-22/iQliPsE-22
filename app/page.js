"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFileArrowDown } from "react-icons/fa6";
import Particles from "./components/Particles";
import Scroll from "./components/Scroll";
import About from "./components/About";
import Journey from "./components/Journey";
import Tech from './components/Tech';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,#6db2e4_1%,_transparent_60%)] opacity-20 lg:opacity-15 z-[-1]"
        style={{ y: backgroundY }}
      />
      <Particles />
      <section className="min-h-dvh flex flex-col items-center justify-center p-2 relative">
        <h1 className="name text-3xl text-center font-bold lg:text-7xl tracking-wider underline">
          DEEPAK KUMAR
        </h1>
        <h2 className="quicksand text-white text-lg lg:text-3xl tracking-wider mt-2 lg:mt-4">
          Full-Stack Developer
        </h2>

        <div className="w-1/2 flex justify-center gap-12 mt-6 text-3xl text-white">
          <Link
            href="https://www.linkedin.com/in/deepak2004"
            className="flex flex-col items-center justify-center lg:hover:text-[#477596]"
          >
            <FaLinkedinIn className="w-5 h-5 lg:w-10 lg:h-10" />
            <p className="text-sm text-center">LinkedIn</p>
          </Link>
          <Link
            href="https://github.com/iQliPsE-22"
            className="flex flex-col items-center justify-center hover:text-[#477596]"
          >
            <FaGithub className="w-5 h-5 lg:w-10 lg:h-10" />
            <p className="text-sm text-center">GitHub</p>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1TBs_cPnaqDiULJka8I1pWk5B4jLeLM-J/view?usp=sharing"
            className="flex flex-col items-center justify-center hover:text-[#477596]"
          >
            <FaFileArrowDown className="w-5 h-5 lg:w-10 lg:h-10" />
            <p className="text-sm text-center">Resume</p>
          </Link>
        </div>
        <Scroll />
      </section>
      <About />
      <Journey />
      <Tech />
    </>
  );
}
