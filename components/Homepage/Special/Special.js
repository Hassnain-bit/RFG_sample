import React from "react";
import styles from "../../../styles/Special.module.scss";
import GeneralHeading from "../../Common/GeneralHeading";
import Image from "next/image";
import { SpecialData } from "./SpecialData";
import SpecialItem from "./SpecialItem";

function Special() {
  return (
    <>
      <div className={styles.special}>
        <GeneralHeading
          small_Title={"OUR GOODNESS"}
          large_Title={"What Makes Us Special"}
        />

        <div className="container">
          <div className={styles.s_inner}>
            <div className={styles.s_img_holder}>
              <div className={styles.s_men_img}>
                <Image
                  alt="men_img"
                  src="/../public/images/men_img.png"
                  layout="responsive"
                  width={307}
                  height={499}
                />
              </div>
            </div>

            <div className={styles.s_content}>
              <div className={`${styles.custom_row} row`}>
                {SpecialData.map((loopData) => (
                  <SpecialItem key={loopData.id} data={loopData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
