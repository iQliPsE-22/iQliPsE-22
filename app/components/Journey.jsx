import React, { useRef } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { School, Work } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion";

const Journey = () => {
  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "start start"],
  });

  const events = [
    {
      year: "2025",
      title: "B.Tech in Computer Science & Engineering",
      description: "Chandigarh Group of Colleges, Landran.",
      icon: <School />,
      color: "primary",
    },
    {
      year: "2024",
      title: "Full Stack Development Internships",
      description: "Worked at House of Couton & Grappletech.",
      icon: <Work />,
      color: "primary",
    },
    {
      year: "2023",
      title: "Summer Intern/Trainee",
      description: "Industrial Training at Solitair Infosys",
      icon: <Work />,
      color: "primary",
    },
    {
      year: "2021",
      title: "Completed Intermediate with 92.2%",
      description: "Heritage Children Academy, Rampur",
      icon: <School />,
      color: "secondary",
    },
    {
      year: "2019",
      title: "Completed High School with 90%",
      description: "Heritage Children Academy, Rampur.",
      icon: <School />,
      color: "success",
    },
  ];

  return (
    <div
      ref={journeyRef}
      className="quicksand min-h-dvh pt-4 pb-8 flex flex-col items-center relative"
    >
      <motion.h1
        className="text-[40px] lg:text-[60px] text-center pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ scale: scrollYProgress }}
      >
        From Zero to Full Stack
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
        style={{ scale: scrollYProgress }}
        className="w-full"
      >
        <Timeline>
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TimelineItem>
                <TimelineOppositeContent className="text-sm lg:text-md bg-clip-text text-transparent bg-gradient-to-r from-[#e7f1f3] to-[#477696]">
                  {event.description}
                </TimelineOppositeContent>
                <TimelineSeparator className="h-auto lg:h-32">
                  <TimelineDot color={event.color}>{event.icon}</TimelineDot>
                  {index !== events.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent className="bg-clip-text text-transparent bg-gradient-to-r from-[#e7f1f3] to-[#477696]">
                  <h3 className="text-lg lg:text-xl text-white">
                    {event.year}
                  </h3>
                  <p className="text-md lg:text-lg ">{event.title}</p>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </motion.div>
    </div>
  );
};

export default Journey;
