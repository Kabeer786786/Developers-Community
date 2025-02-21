import { useEffect, useRef } from "react";
import FAQ from "./home/FAQ";
import LandingPage from "./home/LandingPage";
import Reviews from "./home/Reviews";
import Footer from "./home/Footer";
import Header from "./home/Header";
// import "../assets/snapscrolling.css";

export default function Home() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const observerOptions = {
      root: scrollContainer.current,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-section");
        } else {
          entry.target.classList.remove("active-section");
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <article className="scroll-wrapper" ref={scrollContainer}>
      <section className="scroll-section relative">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global">
            <Header />
          </nav>
        </header>
        <LandingPage />
      </section>
       
      <section className="scroll-section">
        <div className="flex flex-wrap max-w-7xl m-auto pb-32">
          <Reviews />
          <FAQ />
        </div>
      </section>
      <section className="scroll-section">
        <Footer />
      </section>
    </article>
  );
}
