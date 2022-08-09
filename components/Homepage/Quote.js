import React from "react";
import styles from "../../styles/Quote.module.scss";
import GeneralHeading from "../Common/GeneralHeading";

function Quote() {
  return (
    <>
      <div className={styles.quote}>
        <div className="container">
          <form>
            <GeneralHeading
              small_Title={"Request A"}
              large_Title={"Free Quote"}
            />
            <input
              class="form-control"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Quote;
