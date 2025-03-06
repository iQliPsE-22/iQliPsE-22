import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Audiowide, Quicksand } from "next/font/google";
import Cursor from "./components/Cursor";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepak Kumar | Full Stack Developer & JavaScript Enthusiast",
  description:
    "Deepak Kumar (iQlipse) - Full Stack Developer specializing in React, Next.js, JavaScript, and MERN stack. Explore projects, blogs, and open-source contributions. Contact for collaborations!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} ${quicksand.variable} antialiased `}
      >
        <SmoothScroll>
          <Cursor />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
