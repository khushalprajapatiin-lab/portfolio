"use client";

import { motion } from "framer-motion";

export default function FeaturedVideo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "120px 40px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#561C24",
          fontSize: "3rem",
          marginBottom: "40px",
          fontFamily: "var(--font-cormorant)",
        }}
      >
        Featured Video
      </h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          maxWidth: "1000px",
          aspectRatio: "16 / 9", // 16:9 frame
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: "30px",
          boxShadow: "0 20px 60px rgba(86,28,36,0.15)",
          background: "#561C24",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src="/work/demo.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.section>
  );
}