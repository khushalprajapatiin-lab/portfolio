"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <motion.section
      id="about"
      className={styles.section}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        {/* LEFT */}

        <div>
          <p className={styles.subtitle}>
            ABOUT KHUSH CREATES
          </p>

          <h2 className={styles.title}>
            Design that people
            <br />
            remember.
          </h2>

          <p className={styles.description}>
            I help creators, businesses, and personal brands stand out through
            cinematic video editing, luxury poster design, branding, and
            creative visuals that leave a lasting impression.

            <br />
            <br />

            Every project combines storytelling, strategy, and premium design
            to create visuals that people don't just see—they remember.
          </p>

          <Link href="/contact" className={styles.buttonLink}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={styles.button}
            >
              Let's Work Together →
            </motion.div>
          </Link>
        </div>

        {/* RIGHT */}

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className={styles.logoWrapper}
        >
          <div className={styles.logoCircle}>
            <img
              src="/logo.jpg"
              alt="Khush Creates Logo"
              className={styles.logo}
            />
          </div>
        </motion.div>
      </div>

      {/* STATS */}

      <div className={styles.stats}>
        {[
          ["30+", "Projects"],
          ["4+", "Years Learning"],
          ["100%", "Dedication"],
        ].map(([number, text]) => (
          <div key={text} className={styles.stat}>
            <h2>{number}</h2>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
