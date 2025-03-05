"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "next/link";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [projectLink, setProjectLink] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const addHoverListeners = (selector, variant, link = "") => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setCursorVariant(variant);
          if (link) setProjectLink(link);
        });
        el.addEventListener("mouseleave", () => {
          setCursorVariant("default");
          setProjectLink("");
        });
      });
    };

    addHoverListeners("a, button", "hover");
    addHoverListeners("img", "image");
    addHoverListeners("video", "video", "View Project");

    return () => {
      document.querySelectorAll("a, button, img, video").forEach((el) => {
        el.removeEventListener("mouseenter", () => setCursorVariant("hover"));
        el.removeEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };
  }, []);

  const variants = {
    default: { scale: 1, backgroundColor: "#FF4191", width: "40px" },
    hover: { scale: 2, backgroundColor: "#E90074", width: "40px" },
    image: { scale: 3, backgroundColor: "#FFF078", width: "40px" },
    video: {
      scale: 1,
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      width: "200px",
      cursor: "pointer",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center text-xs text-black font-semibold h-10 rounded-full pointer-events-none mix-blend-difference z-50 bg-white"
      animate={{
        x: position.x - 40,
        y: position.y - 40,
        ...variants[cursorVariant],
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {cursorVariant === "video" && (
        <p className="text-black text-[10px] text-center">{projectLink}</p>
      )}
    </motion.div>
  );
};

export default Cursor;
