import React from "react";
import styles from "../../../styles/Services.module.scss";
import Image from "next/image";

function ServicesCard(props) {
  const {
    id,
    icon,
    title,
    desc,
    button,
  } = props.data;
  return (
    <>
      <div className="col-lg-4 col-md-6" key={id}>
        <div className={styles.sc_item}>
          <Image
            alt="truck-icon"
            src={icon}
            layout="fixed"
            objectFit="cover"
            quality={100}
            width={105}
            height={105}
          />
          <h5>{title}</h5>
          <p>
            {desc}
            <span>{button}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
