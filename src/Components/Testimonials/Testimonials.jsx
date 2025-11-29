import React from "react";
import styles from "./Testimonials.module.css";

export default function TestimonialsCard() {
  const testimonials = [
    {
      id: 1,
      rating: 5.5,
      text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      time: "Last updated 3 mins ago",
      name: "Christian Doe",
      image: "/Rectangle 8-vT6KmhwM.png",
    },
    {
      id: 2,
      rating: 5.5,
      text: "Excellent service, cars are clean and staff are very professional. Highly recommended!",
      time: "Last updated 5 mins ago",
      name: "Jane Smith",
      image: "/girl--mxZ6wIV.png",
    },
    {
      id: 3,
      rating: 5.5,
      text: "Fast booking and great customer service. I always use them when I travel!",
      time: "Last updated 10 mins ago",
      name: "Michael Johnson",
      image: "/Rectangle 8-vT6KmhwM.png",
    },
  ];

  return (
    <div className={styles.testimonialsSection}>
      <div className="container my-5">
        <div className="d-flex justify-content-center align-items-center my-4">
          <div className={`${styles.testimonialBadge} text-uppercase`}>
            testimonials
          </div>
        </div>

        <h2 className={`text-capitalize my-3 ${styles.testimonialTitle}`}>
          What People Say About Us?
        </h2>

        <div className={styles.scrollContainer}>
          <div className={styles.scrollTrack}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.name} className={styles.image} />
                </div>

                <div className={styles.content}>
                  <div className={styles.rating}>
                    <div className={styles.ratingTop}>
                      <span className={styles.ratingNumber}>{item.rating}</span>
                      <span className={styles.starText}>stars</span>
                    </div>
                    <div className={styles.stars}>★★★★★</div>
                  </div>

                  <p className={styles.text}>{item.text}</p>
                  <p className={styles.name}>{item.name}</p>
                  <small className={styles.time}>{item.time}</small>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.gradientLeft}></div>
          <div className={styles.gradientRight}></div>
        </div>
      </div>
    </div>
  );
}
