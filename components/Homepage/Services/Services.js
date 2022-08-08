import React from "react";
import styles from "../../../styles/Services.module.scss";
import GeneralHeading from "../../Common/GeneralHeading";
import ServicesCard from "./ServicesCard";
import { ServicesData } from "./ServicesData";

function Services() {
  return (
    <>
      <div className={styles.services}>
        <GeneralHeading
          small_Title={"WHAT WE OFFER"}
          large_Title={"Our Core Services"}
        />

        <div className={styles.services_cards}>
          <div className="container">
            <div className={`row ${styles.custom_row}`}>

              {ServicesData.map((loopData) => (
                <ServicesCard key={loopData.id} data={loopData} />
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
