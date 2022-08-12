import React from "react";
import styles from "../../../styles/Services.module.scss";
import Image from "next/image";

function ServicesCard(props) {
  
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className={styles.sc_item}>
          <Image
            alt="services-icon"
            src={props.icon}
            layout="fixed"
            objectFit="cover"
            quality={100}
            width={105}
            height={105}
          />
          <h5>{props.title}</h5>
          <p>
            {props.desc}
            <span>Read more</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
