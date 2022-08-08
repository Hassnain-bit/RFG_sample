import React from "react";
import { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  const TopDetail = (props) => {
    return (
      <div className={styles.tdl_item}>
        <h6>{props.title}</h6>
        <a>{props.detail}</a>
      </div>
    );
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.top_details}>
          <div className="container" style={{ height: "100%" }}>
            <div className={styles.td_inner}>
              <div className={styles.td_left}>
                <TopDetail
                  title={"Address"}
                  detail={"International City, Dubai"}
                />
                <TopDetail
                  title={"Email Us"}
                  detail={"Support@rfglogistics.ae"}
                />
                <TopDetail title={"Phone Number"} detail={"+971 50 0000 001"} />
              </div>
              <div>
                <div className={styles.td_right}>
                  <button type="button" className="btn">
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  openNav
                    ? `${styles.links} ${styles.active}`
                    : `${styles.links}`
                }
              >
                <ul className={styles.navbar_list}>
                  <li
                    className={router.asPath == "/" ? `${styles.active}` : ""}
                    onClick={() => router.push("/") && setOpenNav(!openNav)}
                  >
                    Home
                  </li>
                  <li
                    className={
                      router.asPath == "/about" ? `${styles.active}` : ""
                    }
                    onClick={() =>
                      router.push("/about") && setOpenNav(!openNav)
                    }
                  >
                    About us
                  </li>
                  <li>Services</li>
                  <li>Contact us</li>
                </ul>
                <div className={styles.l_quote}>Request Quote</div>
              </div>

              <button type="button" className="btn">
                Request a Quote
              </button>

              {/* HAMBURGER */}
              <div
                class={styles.hamburger}
                onClick={() => setOpenNav(!openNav)}
              >
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
      </div>
    </>
  );
}

export default Navbar;
