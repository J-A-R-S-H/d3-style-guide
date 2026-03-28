"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({
  children,
  className = "",
  duration = 0.8,
  y = 40,
  delay = 0,
  start = "top 85%",
  as: Tag = "div",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default FadeIn;
