"use client";

import FeaturedVideo from "./components/FeaturedVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        /* keep all your existing inline styles here */
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* FEATURED VIDEO */}
      <FeaturedVideo />

      {/* WORK SECTION */}
      <Work />

      {/* ABOUT */}
      <About />
    </main>
  );
}