import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>

          <div className={styles.brandSection}>
            <div className={styles.brandLogo}>
              <img src="/image (10).png" alt="" />
            </div>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <i className="bi bi-geo-alt"></i>
                <span className={styles.address}>25566 Hc 1, Glenallen,<br/> Alaska, 99588, USA</span>
              </div>
              <div className={styles.contactItem}>
                <i className="bi bi-telephone"></i>
                <span className={styles.address}>+603 4784 273 12</span>
              </div>
              <div className={styles.contactItem}>
                <i className="bi bi-envelope"></i>
                <span className={styles.address}>rentcars@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className={styles.heading}>Our Products</h3>
            <ul className={styles.list}>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Priceline</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>About Rent Cars</h3>
            <ul className={styles.list}>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Press Center</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Resources</h3>
            <ul className={styles.list}>
              <li><a href="#">Download</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Partner Network</a></li>
              <li><a href="#">Cruises</a></li>
              <li><a href="#">Developer</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Follow Us</h3>
            <div className={styles.social}>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
    </>
  );
}
