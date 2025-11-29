import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/image.png" alt="Rinatal Logo" className={` ${styles.logo} m-lg-4`}   /> </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ paddingLeft: "5rem" ,fontSize:"20px",fontFamily:"system-ui"}}>
              <li className="nav-item">
                <a className={`nav-link ${styles.navItem}`} href="#">Become a rintal</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navItem}`} href="#">Rinatal deals</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navItem}`} href="#">How it work</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navItem}`} href="#">Why choose us</a>
              </li>
            </ul>

            <div>
              <form>
                <div className={`d-flex justify-content-start m-lg-4 ${styles.authButtons}`}>
                  <button className="btn btn-light fw-normal fs-5 me-2" type="submit">
                    Sign in
                  </button>
                  <button className="btn btn-primary fw-normal fs-5" type="submit">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}