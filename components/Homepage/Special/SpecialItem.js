import React from "react";
import styles from "../../../styles/Special.module.scss";
import Image from "next/image";

function SpecialItem(props) {
  return (
    <>
      <div className="col-md-6">
        <div className={styles.sc_item}>
          <div className={styles.sc_icon_holder}>
            <div className={styles.sc_icon}>
              <Image
                alt="special_icon"
                src={props.icon}
                layout="fixed"
                width={36}
                height={36}
              />
            </div>
          </div>
          <div className={styles.sc_text}>
            <h6>{props.title}</h6>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialItem;
