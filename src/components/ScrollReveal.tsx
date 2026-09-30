"use client";

import { useEffect } from "react";

type RevealKind = "content" | "image" | "botanical" | "cta";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const sections = [
      ...document.querySelectorAll<HTMLElement>("main section"),
      ...document.querySelectorAll<HTMLElement>("footer"),
    ];
    const targets = new Set<HTMLElement>();

    const register = (element: HTMLElement, kind: RevealKind, delay: number) => {
      if (targets.has(element)) return;
      element.dataset.reveal = kind;
      element.style.setProperty("--reveal-delay", `${delay}s`);
      element.style.setProperty("--reveal-opacity", window.getComputedStyle(element).opacity);
      targets.add(element);
    };

    sections.forEach((section) => {
      section.querySelectorAll<HTMLElement>("h1, h2, h3").forEach((element) => register(element, "content", 0));
      section.querySelectorAll<HTMLElement>("p, dl, ul").forEach((element) => register(element, "content", 0.12));

      section.querySelectorAll<HTMLElement>("picture, figure").forEach((element) => register(element, "image", 0.24));
      section.querySelectorAll<HTMLImageElement>("img").forEach((element) => {
        if (element.closest("picture, figure")) return;
        const kind: RevealKind = element.currentSrc.includes("/decor/botanical/") || element.src.includes("/decor/botanical/")
          ? "botanical"
          : "image";
        register(element, kind, kind === "botanical" ? 0.18 : 0.24);
      });

      section.querySelectorAll<HTMLElement>("a.button").forEach((element) => register(element, "cta", 0.18));
    });

    document.documentElement.classList.add("reveal-enabled");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.dataset.revealVisible = "true");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        target.dataset.revealVisible = "true";
        observer.unobserve(target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    targets.forEach((target) => observer.observe(target));

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      targets.forEach((target) => target.dataset.revealVisible = "true");
      observer.disconnect();
    };
    reduceMotion.addEventListener("change", handleReducedMotion);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", handleReducedMotion);
      document.documentElement.classList.remove("reveal-enabled");
      targets.forEach((target) => {
        delete target.dataset.reveal;
        delete target.dataset.revealVisible;
        target.style.removeProperty("--reveal-delay");
        target.style.removeProperty("--reveal-opacity");
      });
    };
  }, []);

  return null;
}
