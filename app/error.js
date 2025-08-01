"use client";

import MotionButton from "../components/MotionButton";

export default function Error() {
  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content">
        <h1 className="heading">Something went wrong</h1>
        <MotionButton href="/">Back to Home</MotionButton>
      </div>
    </div>
  );
}
