import React from 'react';
import styles from './HowItWorks.module.css';

const brands = [
  { src: "/image (3).png", alt: "Brand 1" },
  { src: "/image (5).png", alt: "Brand 2" },
  { src: "/image (6).png", alt: "Brand 3" },
  { src: "/image (7).png", alt: "Brand 4" },
];

export default function HowItWorks() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className={`${styles.howItWork} text-uppercase`}>
          How It Work     
        </div>
      </div>
    
      <h2 className={`text-capitalize my-3 ${styles.howItWorkTitle}`}>
        Rent with following 3 working steps
      </h2>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between flex-wrap">

            <div className="d-flex flex-column align-items-center px-3 my-4 flex-fill text-center">
              <img src="/image (4).png" alt="choose location" className="mb-3" style={{ maxWidth: '100px' }} />
              <h5 className="my-3">Choose location</h5>
              <small className="text-muted">Choose your and find your best car</small>
            </div>

            <div className="d-flex flex-column align-items-center px-3 my-4 flex-fill text-center">
              <img src="/download (2).png" alt="pick up date" className="mb-3" style={{ maxWidth: '100px' }} />
              <h5 className="my-3">Pick-up date</h5>
              <small className="text-muted">Select your pick up date and time to book your car</small>
            </div>

            <div className="d-flex flex-column align-items-center px-3 my-4 flex-fill text-center">
              <img src="/image (4).png" alt="book your car" className="mb-3" style={{ maxWidth: '100px' }} />
              <h5 className="my-3">Book your car</h5>
              <small className="text-muted">Book your car and we will deliver it directly to you</small>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div className={styles.slideTrack}>
            {[...brands, ...brands].map((brand, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.slideContent}>
                  <img src={brand.src} alt={brand.alt} className={styles.slideImg} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.gradientLeft}></div>
          <div className={styles.gradientRight}></div>
        </div>
      </div>
    </>
  );
}
