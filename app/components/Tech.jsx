"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import {
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiSocketdotio,
  SiNpm,
  SiChartdotjs,
} from "react-icons/si";

const skills = {
  languages: [
    {
      name: "JavaScript",
      icon: <FaJs className="h-8 lg:h-12 w-8 lg:w-12 text-yellow-500" />,
    },
    {
      name: "C++",
      icon: (
        <Image
          src= "/cpp3-svgrepo-com.svg"
          alt="C++"
          width={48}
          height={48}
          className="h-8 lg:h-12 w-8 lg:w-12"
        />
      ),
    },
    {
      name: "Java",
      icon: <FaJava className="h-8 lg:h-12 w-8 lg:w-12 text-red-500" />,
    },
  ],
  frontend: [
    {
      name: "HTML",
      icon: <FaHtml5 className="h-8 lg:h-12 w-8 lg:w-12 text-orange-600" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="h-8 lg:h-12 w-8 lg:w-12 text-blue-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: (
        <RiTailwindCssFill className="h-8 lg:h-12 w-8 lg:w-12 text-[#00acc1]" />
      ),
    },
    {
      name: "React",
      icon: <FaReact className="h-8 lg:h-12 w-8 lg:w-12 text-cyan-500" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-8 lg:h-12 w-8 lg:w-12 text-white" />,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-8 lg:h-12 w-8 lg:w-12 text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="h-8 lg:h-12 w-8 lg:w-12 text-gray-400" />,
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio className="h-8 lg:h-12 w-8 lg:w-12 text-white" />,
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-8 lg:h-12 w-8 lg:w-12 text-green-600" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="h-8 lg:h-12 w-8 lg:w-12 text-blue-600" />,
    },
  ],
  tools: [
    {
      name: "Git",
      icon: <FaGitAlt className="h-8 lg:h-12 w-8 lg:w-12 text-red-500" />,
    },
    {
      name: "Figma",
      icon: <FaFigma className="h-8 lg:h-12 w-8 lg:w-12 text-purple-500" />,
    },
    {
      name: "NPM",
      icon: <SiNpm className="h-8 lg:h-12 w-8 lg:w-12 text-red-500" />,
    },
  ],
};

const Tech = () => {
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "start start"],
  });

  return (
    <div
      ref={projectRef}
      className="quicksand min-h-dvh pt-4 pb-8 flex flex-col items-center relative"
    >
      <motion.h1
        className="text-[40px] lg:text-[60px] text-center pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ scale: scrollYProgress }}
      >
        My Tech Toolkit
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden & slightly down
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% is visible
        className="p-4 w-full flex flex-wrap justify-around gap-4"
        style={{ scale: scrollYProgress }}

      >
        {Object.entries(skills).map(([category, items], index) => (
          <section key={index} className="flex flex-col items-center">
            <h3 className="text-lg lg:text-xl mb-4 capitalize">
              {category.replace("_", " ")}
            </h3>
            <ul className="flex flex-col gap-4">
              {items.map((item, i) => (
                <li key={i} className="flex flex-col items-center">
                  <div className="h-8 lg:h-12 w-8 lg:w-12">{item.icon}</div>
                  <p className="text-sm lg:text-lg mt-2">{item.name}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
