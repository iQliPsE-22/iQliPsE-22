"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Video({
  src,
  link,
  thumbnail,
  alt = "Video thumbnail",
}) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg border-2 border-border transition-all hover:border-primary"
      >
        <div
          className={`h-full w-full ${
            isHovered && isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={alt}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <video
          ref={videoRef}
          muted
          loop
          preload="none"
          onLoadedData={handleVideoLoaded}
          className={`absolute inset-0 h-full w-full object-cover ${
            isHovered && isVideoLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          aria-label={alt}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          className="sr-only focus:not-sr-only focus:absolute focus:bottom-2 focus:right-2 focus:z-10 focus:rounded focus:bg-primary focus:px-2 focus:py-1 focus:text-primary-foreground"
          onClick={() => {
            if (videoRef.current?.paused) {
              videoRef.current.play();
            } else if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
        >
          Toggle video playback
        </button>
      </div>
    </a>
  );
}
