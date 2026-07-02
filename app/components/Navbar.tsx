"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <h3>@khushcreates.in</h3>
      </Link>

      {/* Desktop Links */}
      <div className={styles.links}>
        <Link href="#work" className={styles.link}>
          Work
        </Link>

        <Link href="#about" className={styles.link}>
          About
        </Link>

        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "85px",
            right: 0,
            width: "220px",
            background: "rgba(232,216,196,0.96)",
            backdropFilter: "blur(15px)",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            border: "1px solid #C7B7A3",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          }}
        >
          <Link
            href="#work"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>

          <Link
            href="#about"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}