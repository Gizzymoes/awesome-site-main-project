// components/SpecialEventSection.js
import React from "react";
import Image from "next/image";
import MotionButton from "./MotionButton";
import MotionDiv from "./MotionDiv";

export default function SpecialEventSection() {
  return (
    <MotionDiv>
      <section className="special-event-section">
        <div className="w-layout-blockcontainer container event-container w-container">
          <div className="event-wrapper">
            <div className="event-text">
              <h2 className="h2 event-text">Join Our Special Event</h2>
              <p className="paragraphs">
                Join our special event to explore groundbreaking products, meet
                our expert speakers, and discover what makes Awesome Company a
                leader in enterprise software. Experience cutting-edge
                technology and connect with industry innovators.
              </p>
              <MotionButton href="#">Buy tickets</MotionButton>
            </div>
            <div className="image-holder">
              <Image
                src="/conference-image-min.png"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 780px"
                srcSet="/conference-image-min-p-500.png 500w, /conference-image-min.png 780w"
                alt=""
                className="image"
                width={780}
                height={510}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
