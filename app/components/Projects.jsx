import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Video from "./Video";
import Link from "next/link";

const creations = [
  {
    id: 0,
    title: "Campusx (in progress)",
    link: "https://campusxplace.vercel.app/",
    description:
      "An all-in-one web app for freshers, offering rentals, food blogs, small businesses, and essential student services. 🎓🏠🍔",
    videoSrc: "/campusx.mp4",
    thumbnail: "/campusx.png",
  },
  {
    id: 1,
    title: "Hush",
    link: "https://whisper-and-hush.vercel.app/",
    description:
      "A privacy-focused chat app with real-time messaging and automatic message deletion.🔒💬",
    videoSrc: "/hush.mp4",
    thumbnail: "/hush.png",
  },
  {
    id: 2,
    title: "Linkfolio",
    link: "https://mylinkfolio.vercel.app/",
    description:
      "A dynamic and visually engaging portfolio showcasing my projects, skills, and achievements with an interactive user experience. 🚀",
    videoSrc: "/mylinkfolio.mp4",
    thumbnail: "/mylinkfolio.png",
  },
];

const Projects = () => {
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
        What I have Built
      </motion.h1>
      <section className="p-4 lg:p-8 gap-2 flex flex-col lg:flex-row items-center justify-around w-full">
        {creations.map((creation) => (
          <motion.div
            key={creation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ scale: scrollYProgress }}
            className="w-full p-4 flex flex-col flex-wrap items-center justify-around"
          >
            <Video
              src={creation.videoSrc}
              link={creation.link}
              thumbnail={creation.thumbnail}
            />
            <div className="w-full text-center p-2">
              <h2 className="text-lg font-semibold pt-2">{creation.title}</h2>
              <p className="text-sm text-center w-full ">
                {creation.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
