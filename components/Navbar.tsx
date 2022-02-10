import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <a className={styles.navLink}>
          Open <span>tube</span>{" "}
        </a>
      </Link>
      <ul className={styles.navItems}>
        <Link href="/">Home</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
