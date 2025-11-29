import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './CarDetails.module.css';

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const carImages = [
    '/car1-C6me-wu0.png',
    '/car2-DQa8FXRk.png',
    '/car3-DtXN34w2.png'
  ];

  const getCarImage = (carId) => {
    const numericId = parseInt(carId) || 0;
    const hash = (numericId * 17 + 13) % carImages.length;
    return carImages[hash];
  };

  useEffect(() => {
    const getCarDetails = async () => {
      try {
        const response = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
        setCar(response.data.Car);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getCarDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <p>Loading car details...</p>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="container mt-5 text-center">
        <p>Car not found</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" style={{ color: '#597CF8', textDecoration: 'none' }}>Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/all-vehicles" style={{ color: '#597CF8', textDecoration: 'none' }}>Cars</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Car Details</li>
        </ol>
      </nav>

      <div className="row">

        <div className="col-md-7">
          <div className={styles.imageContainer}>
            <img
              src={getCarImage(id)}
              alt={car.car}
              className={styles.carDetailImage}
            />
          </div>
        </div>

        <div className="col-md-5">
          <div className={styles.whyChooseUs}>
            WHY CHOOSE US
          </div>

          <h2 className={styles.mainTitle}>
            We Offer The Best Experience With Our Rental Deals.
          </h2>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-user"></i>
              </div>
              <span className={styles.featureText}>2 Passanger</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-snowflake"></i>
              </div>
              <span className={styles.featureText}>Air conditioning</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-gear"></i>
              </div>
              <span className={styles.featureText}>CVT</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-door-open"></i>
              </div>
              <span className={styles.featureText}>Doors</span>
            </div>
          </div>

          <div className={styles.carInfo}>
            <h4>{car.car}</h4>
            <p className={styles.infoText}>
              <strong>Year:</strong> {car.car_model_year || '2021'}
            </p>
            <p className={styles.infoText}>
              <strong>Price:</strong> {car.price || '2814.46'} /day
            </p>
            <p className={styles.infoText}>
              <strong>Availability:</strong> 
              <span className={car.availability ? styles.available : styles.notAvailable}>
                {car.availability ? ' Available' : ' Not Available'}
              </span>
            </p>
          </div>

          <button
            className={styles.backButton}
            onClick={() => navigate('/all-vehicles')}
          >
            <i className="fa-solid fa-arrow-left me-2"></i>
            Back to All Vehicles
          </button>
        </div>
      </div>
    </div>
  );
}