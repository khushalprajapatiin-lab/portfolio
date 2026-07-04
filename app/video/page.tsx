"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const videos = [
  {
    video: "/work/video/edit1.mp4",
    poster: "/work/edit1.jpg",
    title: "Project 1",
  },
  {
    video: "/work/video/edit2.mp4",
    poster: "/work/edit2.png",
    title: "Project 2",
  },
  {
    video: "/work/video/edit3.mp4",
    poster: "/work/edit3.png",
    title: "Project 3",
  },
];

export default function VideoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #F3E8D7 0%, #E8D8C4 45%, #E8D8C4 100%)",
        padding: "60px 20px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#561C24",
          fontWeight: 600,
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        ← Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "70px",
          padding: "0 10px",
        }}
      >
        <p
          style={{
            letterSpacing: "3px",
            color: "#6D2932",
          }}
        >
          VIDEO EDITING
        </p>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#561C24",
            fontFamily: "var(--font-cormorant)",
            marginTop: "20px",
          }}
        >
          Cinematic Stories
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "25px auto",
            color: "#6D2932",
            lineHeight: "1.8",
          }}
        >
          Every frame is crafted to capture attention, tell a story, and leave
          a lasting impression.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1300px",
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        {videos.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#561C24",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(86,28,36,0.15)",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <video
              controls
              preload="metadata"
              poster={item.poster}
              style={{
                width: "100%",
                display: "block",
                maxWidth: "100%",
              }}
            >
              <source src={item.video} type="video/mp4" />
            </video>

            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "#E8D8C4" }}>{item.title}</h3>

              <p
                style={{
                  color: "#C7B7A3",
                  marginTop: "8px",
                }}
              >
                Cinematic video editing project.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}