"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Pure helper function to calculate the number of significant decimal places.
 * e.g., 4.8 -> 1, but 4.0 -> 0.
 */
const getDecimalPlaces = (num) => {
  const str = String(num);
  if (str.includes(".")) {
    const decimals = str.split(".")[1];
    if (parseInt(decimals, 10) !== 0) {
      return decimals.length;
    }
  }
  return 0;
};

/**
 * A simplified, performant count-up component that animates a number
 * over a specified duration when it becomes visible in the viewport.
 * This version uses a simple timer with easing instead of physics.
 */
export default function CountUp({
  to,
  from = 0,
  duration = 3,
  className,
  separator = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Determine formatting based on the number with the most decimal places.
    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));
    const formatValue = (value) =>
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: maxDecimals,
        maximumFractionDigits: maxDecimals,
        useGrouping: !!separator,
      }).format(value);

    // Set the initial value.
    element.textContent = formatValue(from);

    // If the component is in view, start the animation.
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          element.textContent = formatValue(value);
        },
      });
      // Return a cleanup function to stop the animation if the component unmounts.
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, separator]);

  return <span ref={ref} className={className} />;
}
