"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #F3E8D7 0%, #E8D8C4 45%, #E8D8C4 100%)",
        padding: "60px 40px",
      }}
    >
      {/* Back Button */}

      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#561C24",
          fontWeight: 600,
          fontSize: "1rem",
        }}
      >
        ← Back to Home
      </Link>

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "80px",
        }}
      >
        <p
          style={{
            letterSpacing: "3px",
            color: "#6D2932",
          }}
        >
          LET'S CREATE SOMETHING EXTRAORDINARY
        </p>

        <h1
          style={{
            fontSize: "5rem",
            color: "#561C24",
            fontFamily: "var(--font-cormorant)",
            marginTop: "20px",
            lineHeight: "1",
          }}
        >
          Get In Touch
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            color: "#6D2932",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Have a project in mind? Whether it's cinematic video editing,
          premium posters, branding, or creative visuals, I'd love to help
          bring your ideas to life.
        </p>
      </motion.div>

      {/* Contact Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Instagram */}

        <motion.a
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(86,28,36,0.20)",
          }}
          transition={{ duration: 0.3 }}
          href="https://instagram.com/khushcreates.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            background: "#561C24",
            borderRadius: "28px",
            padding: "40px",
            color: "#E8D8C4",
            boxShadow: "0 15px 40px rgba(86,28,36,0.15)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
            }}
          >
            Instagram
          </h2>

          <p
            style={{
              color: "#C7B7A3",
              fontSize: "1.1rem",
            }}
          >
            @khushcreates.in
          </p>
        </motion.a>

        {/* Email */}

        <motion.a
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(86,28,36,0.20)",
          }}
          transition={{ duration: 0.3 }}
          href="mailto:khushcreates.in@gmail.com"
          style={{
            textDecoration: "none",
            background: "#561C24",
            borderRadius: "28px",
            padding: "40px",
            color: "#E8D8C4",
            boxShadow: "0 15px 40px rgba(86,28,36,0.15)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
            }}
          >
            Email
          </h2>

          <p
            style={{
              color: "#C7B7A3",
              fontSize: "1.05rem",
              wordBreak: "break-word",
            }}
          >
            khushcreates.in@gmail.com
          </p>
        </motion.a>

        {/* WhatsApp */}

        <motion.a
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(86,28,36,0.20)",
          }}
          transition={{ duration: 0.3 }}
          href="https://wa.me/918854886536"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            background: "#561C24",
            borderRadius: "28px",
            padding: "40px",
            color: "#E8D8C4",
            boxShadow: "0 15px 40px rgba(86,28,36,0.15)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
            }}
          >
            WhatsApp
          </h2>

          <p
            style={{
              color: "#C7B7A3",
              fontSize: "1.1rem",
            }}
          >
            +91 88548 86536
          </p>
        </motion.a>
      </div>
    </main>
  );
}