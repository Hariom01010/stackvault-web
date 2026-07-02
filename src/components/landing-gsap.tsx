"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function LandingGsap() {
  useEffect(() => {
    // Check if target elements exist
    const targets = document.querySelectorAll(".gsap-fade-in");
    if (targets.length === 0) return;

    // Check if user has already visited in the past session
    const hasVisited = sessionStorage.getItem("stackvault_visited");

    if (hasVisited) {
      // If already visited, bypass animations and show immediately
      gsap.set(targets, { opacity: 1, y: 0 });
      gsap.set(".gsap-bg-grid", { opacity: 1 });
      return;
    }

    // Set initial animated state to avoid flashing on first visit
    gsap.set(targets, { opacity: 0, y: 24 });
    gsap.set(".gsap-bg-grid", { opacity: 0 });

    const tl = gsap.timeline();

    // Stagger animate all elements with class gsap-fade-in
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.1,
    });

    // Smoothly fade in the animated grid background
    tl.to(
      ".gsap-bg-grid",
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=0.6" // start slightly before the stagger finishes
    );

    // Record visit in sessionStorage
    sessionStorage.setItem("stackvault_visited", "true");
  }, []);

  return null;
}
