// components/ButtonIcon.js
import React from "react";

//Custom button icon svg file to reuse
export default function ButtonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="button-svg-icon"
    >
      <line
        x1="1.29289"
        y1="17.2929"
        x2="17.2929"
        y2="1.29289"
        strokeWidth="2"
      />
      <line x1="17" y1="1" x2="1" y2="1" strokeWidth="2" />
      <line x1="18" y1="4.37114e-08" x2="18" y2="18" strokeWidth="2" />
    </svg>
  );
}
