import React from "react";
import styles from "../../../styles/Services.module.scss";
import GeneralHeading from "../../Common/GeneralHeading";
import ServicesCard from "./ServicesCard";
import TruckIcon from "../../../assets/images/truck_icon.png";
import BoatIcon from "../../../assets/images/boat_icon.png";
import PlaneIcon from "../../../assets/images/plane_icon.png";

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
              <ServicesCard
                icon={TruckIcon}
                title={"Road Freight"}
                desc={
                  "We Provide transportation inside the GCC and other Middle Eastern Nations, we provide flatbed trailers, box trailers, curtain trailers, reefer trailers, car carrier trailers, and pickups with GPS-equipped to meet the needs of cargo moving inside the UAE."
                }
              />

              <ServicesCard
                icon={BoatIcon}
                title={"Sea Freight"}
                desc={
                  "We offer a wide range of sea freight services to meet the needs of both domestic and international customers. We offer a wide range of services and do not place limitations on the size or weight of the items."
                }
              />

              <ServicesCard
                icon={PlaneIcon}
                title={"Air Freight"}
                desc={
                  "We take great satisfaction in offering individualized and effective air freight solutions. We efficiently carry out our air freight services from our to any location in the world by attending to the many criteria such as customer urgency, special attention to the Cargo, etc"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
