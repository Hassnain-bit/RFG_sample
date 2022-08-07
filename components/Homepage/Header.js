import React from "react";
import styles from "../../styles/Header/Header.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function Header() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  const CarouselItem = () => {
    return (
      <div className={styles.c_item}>
        <div className={styles.ci_wrapper}></div>
        <Image
          alt="truck-img"
          src="/../public/images/carousal_img_1.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="container">
          <div className={styles.ci_text}>
            <h1>RFG Logistic Solution From Pickup to Designation</h1>
            <p>
              RFG Logistics provides best of the kind services that will make
              our customer’s experience pleasantly easy and unforgettable.
            </p>
            <button type="button" className="btn">
              Learn more
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={styles.header}>
        <Carousel
          responsive={responsive}
          containerClass={styles.carousel_container}
          infinite={true}
          showDots={true}
        >
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </div>
    </>
  );
}

export default Header;
