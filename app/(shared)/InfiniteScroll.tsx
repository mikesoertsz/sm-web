"use client";
import Image from "next/image";
import styles from "../../components/page.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { InnerWrap, Wrapper } from "@/lib/atoms";

export default function InfiniteScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.02 * direction;
  };

  return (
    <>
      <div className="relative flex w-full">
        <Image
          src="/img/hero.webp"
          fill
          alt="background"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Fractional CTO -</p>
          <p ref={secondText}>Product Leader -</p>
        </div>
      </div>
    </>
  );
}
