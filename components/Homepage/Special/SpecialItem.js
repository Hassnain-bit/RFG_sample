import React from "react";
import styles from "../../../styles/Special.module.scss";
import Image from "next/image";

function SpecialItem(props) {
  const { id, icon, title, desc } = props.data;

  return (
    <>
      <div className="col-md-6" key={id}>
        <div className={styles.sc_item}>
          <div className={styles.sc_icon_holder}>
            <div className={styles.sc_icon}>
              <Image
                alt="men_img"
                src={icon}
                layout="fixed"
                width={36}
                height={36}
              />
            </div>
          </div>
          <div className={styles.sc_text}>
            <h6>{title}</h6>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialItem;
