"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type WorkCardProps = {
  href: string;
  image?: string;
  video?: string;
  title: string;
  description?: string;
  background: string;
  large?: boolean;
};

export default function WorkCard({
  href,
  image,
  video,
  title,
  description,
  background,
  large = false,
}: WorkCardProps) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        width: large ? "100%" : "450px",
        maxWidth: "100%",
      }}
    >
      <motion.div
        whileHover={{
          y: -14,
          scale: 1.02,
          boxShadow: "0 30px 70px rgba(86,28,36,0.25)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          background,
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        {video ? (
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src={video} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.img
            src={image}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}

        <div style={{ padding: "22px" }}>
          <h3
            style={{
              color: "#E8D8C4",
              marginBottom: description ? "12px" : "0",
            }}
          >
            {title} →
          </h3>

          {description && (
            <p
              style={{
                color: "#C7B7A3",
                lineHeight: "1.6",
              }}
            >
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}