"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const graphics = [
  {
    image: "/work/graphic/graphic1.jpg",
    title: "Project 1",
  },
  {
    image: "/work/graphic/graphic2.jpg",
    title: "Project 2",
  },
  {
    image: "/work/graphic/graphic3.jpg",
    title: "Project 3",
  },
  {
    image: "/work/graphic/graphic4.png",
    title: "Project 4",
  },
];

export default function GraphicPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #F3E8D7 0%, #E8D8C4 45%, #E8D8C4 100%)",
        padding: "60px 40px",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#561C24",
          fontWeight: 600,
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
        }}
      >
        <p
          style={{
            letterSpacing: "3px",
            color: "#6D2932",
          }}
        >
          GRAPHIC DESIGN
        </p>

        <h1
          style={{
            fontSize: "5rem",
            color: "#561C24",
            fontFamily: "var(--font-cormorant)",
            marginTop: "20px",
          }}
        >
          Visual Identity
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "25px auto",
            color: "#6D2932",
            lineHeight: "1.8",
          }}
        >
          Creative graphics that strengthen brands, communicate ideas, and
          create memorable visual experiences.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {graphics.map((graphic, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#6D2932",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(86,28,36,0.15)",
            }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={graphic.image}
              alt={graphic.title}
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  color: "#E8D8C4",
                }}
              >
                {graphic.title}
              </h3>

              <p
                style={{
                  color: "#C7B7A3",
                  marginTop: "8px",
                }}
              >
                Creative branding and graphic design project.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}