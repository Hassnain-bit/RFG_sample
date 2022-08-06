import React from "react";
import { useState } from "react";
import styles from "../../styles/Navbar/Navbar.module.css";

function Navbar() {
  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.D_navbar}>
        <div className="container" style={{ height: "100%" }}>
          <div className={styles.inner}>
            {/* LOGO */}
            <div className={styles.logo}>
              <h1>RFG Logo</h1>
            </div>

            {/* LINKS */}
            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              <ul className={styles.navbar_list}>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
              </ul>
              <div className={styles.l_quote}>Request Quote</div>
            </div>

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div
                class={
                  openNav
                    ? `${styles.hamburger_lines} ${styles.active}`
                    : `${styles.hamburger_lines}`
                }
              >
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
