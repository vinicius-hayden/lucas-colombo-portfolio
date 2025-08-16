"use client";

import { useEffect } from "react";
import Nav from "../../components/Nav";
import WhoIsLucas from "../../components/WhoIsLucas";
import Footer from "../../components/Footer";

export default function WhoIsLucasPage() {
  useEffect(() => {
    // Smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Fade-in animation
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = "0.2s";
          entry.target.classList.add("fade-in-active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach(el => {
      observer.observe(el);
    });

    // Navigation scroll effect
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (nav) {
        nav.style.background = window.scrollY > 50 
          ? "rgba(10, 10, 10, 0.95)" 
          : "rgba(10, 10, 10, 0.9)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav />
      <WhoIsLucas />
      <Footer />
    </>
  );
}
