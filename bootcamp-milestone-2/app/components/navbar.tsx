import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1>Personal Website</h1>
      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}