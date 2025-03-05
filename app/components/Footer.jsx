import React from "react";
import { GitHub, LinkedIn, Mail, Code } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      className="backdrop-blur-lg bg-[#477696]/10 border border-white/20 shadow-lg
 text-white py-6 px-4 md:px-8 flex flex-col items-center"
    >
      <h2 className="text-xl lg:text-3xl font-semibold bg-clip-text text-transparent ">
        Let's Connect 🌐
      </h2>
      <p className="text-sm lg:text-md mt-2 text-gray-400 text-center">
        Feel free to reach out or explore my work!
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/iQliPsE-22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="text-[#e7f1f3] hover:text-[#477696] transition-all scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak2004/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="text-[#e7f1f3] hover:text-[#477696] transition-all scale-125" />
        </a>
        <a href="mailto:deepaklg02@gmail.com">
          <Mail className="text-[#e7f1f3] hover:text-[#477696] transition-all scale-125" />
        </a>
        <a
          href="https://iqlipse.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code className="text-[#e7f1f3] hover:text-[#477696] transition-all scale-125" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs lg:text-sm mt-4 text-gray-500">
        © {new Date().getFullYear()} iQlipse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
