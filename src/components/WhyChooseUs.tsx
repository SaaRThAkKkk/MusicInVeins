"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const MusicSchoolContent = [
  {
    title: "Interactive Music Lessons",
    description:
      "Learn music in a dynamic, hands-on environment with expert instructors. Our lessons adapt to your skill level, ensuring a personalized and engaging experience.",
  },
  {
    title: "Live Performances & Jams",
    description:
      "Showcase your talent through live sessions and jam with fellow students. Gain confidence, stage presence, and the joy of real-time musical collaboration.",
  },
  {
    title: "Track Your Progress",
    description:
      "Stay motivated with clear insights into your learning journey. Our system helps you monitor growth through feedback, recordings, and performance reviews.",
  },
  {
    title: "Join a Vibrant Community",
    description:
      "Be part of a passionate community of musicians. Connect, collaborate, and grow together through events, group classes, and shared musical goals.",
  },
  {
    title: "Learn Multiple Instruments",
    description:
      "Explore a wide variety of instruments including piano, guitar, drums, violin, and vocals — all under one roof with flexible learning paths.",
  },
  {
    title: "Master Music Theory & Composition",
    description:
      "Deepen your understanding of music with structured lessons in theory, songwriting, and composition. Unlock your creative potential and write your own music.",
  },
];


function WhyChooseUs() {
  return (
    <div className="w-full max-w-10xl">
        <StickyScroll content={MusicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
