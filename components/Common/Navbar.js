import React from "react";
import { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import ReactFlagsSelect from "react-flags-select";

function Navbar() {
  const router = useRouter();

  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  const [select, setSelect] = useState("US");
  const onSelect = (code) => setSelect(code);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.top_details}>
          <div className="container" style={{ height: "100%" }}>
            <div className={styles.td_inner}>
              <div className={styles.td_left}>
                <div className={styles.tdl_item}>
                  <h6>Address</h6>
                  <a
                    href="https://goo.gl/maps/zRXUhWNEqFnXiX1x7"
                    target="_blank"
                  >
                    International City, Dubai
                  </a>
                </div>
                <div className={styles.tdl_item}>
                  <h6>Email Us</h6>
                  <a href="mailto:handycrewts@gmail.com">
                    Support@rfglogistics.ae
                  </a>
                </div>
                <div className={styles.tdl_item}>
                  <h6>Phone Number</h6>
                  <a href="tel:+971500000001">+971 50 0000 001</a>
                </div>
              </div>
              <div>
                <div className={styles.td_right}>
                  <ReactFlagsSelect
                    className={styles.D_lang}
                    selected={select}
                    onSelect={onSelect}
                    placeholder={"English"}
                    selectedSize={"14px"}
                    optionsSize={"14px"}
                    countries={["US", "GB", "FR", "DE", "IT"]}
                    customLabels={{
                      US: "English",
                      GB: "EN-GB",
                      FR: "FR",
                      DE: "DE",
                      IT: "IT",
                    }}
                    /*showSelectedLabel={showSelectedLabel}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
                  />
                  <button type="button" className={styles.D_quote_btn}>
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
                  <li
                    className={
                      router.asPath == "/services" ? `${styles.active}` : ""
                    }
                    onClick={() =>
                      router.push("/services") && setOpenNav(!openNav)
                    }
                  >
                    Services
                  </li>
                  <li
                    className={
                      router.asPath == "/contact" ? `${styles.active}` : ""
                    }
                    onClick={() =>
                      router.push("/contact") && setOpenNav(!openNav)
                    }
                  >
                    Contact us
                  </li>
                </ul>
                <div className={styles.l_quote}>Request Quote</div>
              </div>

              <div className={styles.buttons}>
                <ReactFlagsSelect
                  className={styles.T_lang}
                  selected={select}
                  onSelect={onSelect}
                  placeholder={"English"}
                  selectedSize={"11px"}
                  optionsSize={"11px"}
                  countries={["US", "GB", "FR", "DE", "IT"]}
                  customLabels={{
                    US: "English",
                    GB: "EN-GB",
                    FR: "FR",
                    DE: "DE",
                    IT: "IT",
                  }}
                  /*showSelectedLabel={showSelectedLabel}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
                />
                <button type="button" className={styles.T_quote_btn}>
                  Request a Quote
                </button>
              </div>

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
