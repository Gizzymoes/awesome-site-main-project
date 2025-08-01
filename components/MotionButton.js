// components/MotionButton.js
"use client";

import { motion } from "framer-motion";
import ButtonIcon from "./ButtonIcon";

export default function MotionButton({ href, children, className = "" }) {
  return (
    <motion.a
      href={href}
      className={`button ${className}`}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="button-text">{children}</div>
      <ButtonIcon />
    </motion.a>
  );
}
