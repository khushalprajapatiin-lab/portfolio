"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.section}
    >
      <h2 className={styles.title}>Select Work</h2>

      {/* Video Card */}
      <div className={styles.videoSection}>
        <WorkCard
          href="/video"
          video="/work/demo.mp4"
          title="Video Editing"
          description="Crafting cinematic edits, reels, motion graphics, and storytelling that capture attention and drive engagement."
          background="#561C24"
          large
        />
      </div>

      {/* Small Cards */}
      <div className={styles.cardGrid}>
        <WorkCard
          href="/poster"
          image="/work/poster.jpg"
          title="Poster Design"
          background="#561C24"
        />

        <WorkCard
          href="/graphic"
          image="/work/graphic.jpg"
          title="Graphic Design"
          background="#6D2932"
        />

        <WorkCard
          href="/thumbnails"
          image="/work/thumbnails.jpg"
          title="YouTube Thumbnails"
          description="Designing high-converting YouTube thumbnails that grab attention and boost click-through rates."
          background="#6D2932"
        />
      </div>
    </motion.section>
  );
}