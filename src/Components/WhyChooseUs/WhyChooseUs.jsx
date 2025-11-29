import React from "react";
import styles from "./WhyChooseUs.module.css";

export default function ChooseUsSection() {
  return (
    <>
    <div className={`d-flex ${styles.chooseUsSection}`}>
      
      <div className={styles.leftSide}>
        <img src="/Vector-B-y_5Inb.png" alt="Background" className={styles.backgroundImg} />
        <img src="/audi1-BAmM3xEd.png"  alt="Audi Car" className={styles.carImg} />
      </div>

      <div className={styles.rightSide}>
        <div className="d-flex justify-content-start align-items-center">
          <div className={`${styles.popularDeals} text-uppercase`}> why choose us </div>
        </div>

      <h2 className={`text-capitalize ${styles.popularTitle}`}> We offer the best experience with our rental <br /> deals </h2>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <img src="/image (8).png" alt="icon1" />
            <div>
              <h6>Best price guaranteed</h6>
              <small>Find a lower price? We’ll refund you 100% of the difference.</small>
            </div>
          </div>

          <div className={styles.featureItem}>
            <img src="/image (8).png" alt="icon2" />
            <div>
              <h6>24 hour car delivery</h6>
              <small>Book your car anytime and we will deliver it directly to you.</small>
            </div>
          </div>

          <div className={styles.featureItem}>
            <img src="/download.png" alt="icon3" />
            <div>
              <h6>Many pickup locations</h6>
              <small>Choose from hundreds of locations for more convenience.</small>
            </div>
          </div>

          <div className={styles.featureItem}>
            <img src="/download (1).png" alt="icon4" />
            <div>
              <h6>24/7 technical support</h6>
              <small>Have a question? Contact Rentcars support anytime.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
