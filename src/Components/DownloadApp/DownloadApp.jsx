import React from "react";
import styles from "./DownloadApp.module.css";

export default function DownloadApp() {
  return (
    <>
    <section className={styles.downloadSection}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}> 
              Download Rentcars App for 
              <div className={styles.free}>FREE</div>
              </h2>
            <p className={styles.subtitle}> For faster, easier booking and exclusive deals. </p>
            <div className={styles.smallImages}>
              <img src="/image (9).png" alt="Small 1" />
              <img src="/download (3).png" alt="Small 2" />
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <button className="submit" type="submit">Submit</button>
            </form>
          </div>
          <div className={styles.right}>
            <img src="/iPhone-14-D3LD-rvg.png" alt="Mobile" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
