import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './ShowAllVehicles.module.css';

export default function ShowAllVehicles() {
  const [carsList, setCarsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;
  const navigate = useNavigate();

  const carImages = [
    '/car1-C6me-wu0.png',
    '/car2-DQa8FXRk.png',
    '/car3-DtXN34w2.png'
  ];

  const getCarImage = (carId) => {
    const id = parseInt(carId) || 0;
    const hash = (id * 17 + 13) % carImages.length;
    return carImages[hash];
  };

  useEffect(() => {
    const getCars = async () => {
      try {
        let response = await axios.get('https://myfakeapi.com/api/cars/');
        setCarsList(response.data.cars);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getCars();
  }, []);

  const totalPages = Math.ceil(carsList.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carsList.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="container mt-5">

        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" style={{ color: '#597CF8', textDecoration: 'none' }}>Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Cars</li>
          </ol>
        </nav>


        <div className="d-flex justify-content-center align-items-center my-4">
          <div className={`${styles.popularDeals} text-uppercase`}>
            popular rental deals
          </div>
        </div>

        <h2 className={`text-capitalize my-3 ${styles.popularTitle}`}>
          Most popular cars rental deals
        </h2>

        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <p>Loading cars...</p>
            </div>
          ) : (
            currentCars.map((car, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                <div className={`card h-100 ${styles.carCard}`}>
                  
                  <img
                    src={getCarImage(car.id)}
                    className={styles.carImage}
                    alt={car.car}
                  />
                  
                  <div className="card-body p-3">

                    <h5 className={styles.carTitle}>{car.car}</h5>
                    
                    <div className={styles.reviewSection}>
                      <span className={styles.starIcon}>⭐</span>
                      <span className={styles.reviewText}>
                       ({Math.floor(Math.random() * 3000) + 500} reviews)
                      </span>
                    </div>

                    <div className={styles.specRow}>
                      <div className={styles.specItem}>
                        <i className="fa-solid fa-user"></i>
                        <span>2 Passanger</span>
                      </div>
                      <div className={styles.specItem}>
                        <i className="fa-solid fa-snowflake"></i>
                        <span>Air conditioning</span>
                      </div>
                    </div>

                    <div className={styles.specRow}>
                      <div className={styles.specItem}>
                        <i className="fa-solid fa-calendar"></i>
                        <span>{car.car_model_year || '2021'}</span>
                      </div>
                      <div className={`${styles.specItem}  ${styles.automatic}`}>
                        <i className="fa-solid fa-gear"></i>
                        <span >Automatic</span>
                      </div>
                    </div>

                    <hr className={styles.divider} />

<div className={styles.priceSection}>
  <span className={styles.priceLabel}>Price :</span>

  <div className={styles.priceAmount}>
    {car.price || '2814.46'}
    <span className={styles.perDay}> /day</span>
  </div>
</div>

<div className={styles.availabilityBadge}>
  <span className={car.availability ? styles.available : styles.notAvailable}>
    {car.availability ? 'Available' : 'Not Available'}
  </span>
</div>


                    <button
                      className={styles.viewDetailsBtn}
                      onClick={() => navigate(`/all-vehicles/${car.id || index + 1}`)}
                    >
                      View Details
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

{!loading && totalPages > 1 && (
  <div className="d-flex justify-content-center mt-5 mb-5">
    <nav aria-label="Page navigation">
      <ul className="pagination mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNumber = idx + 1;
          const showPage =
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

          if (showPage) {
            return (
              <li
                key={pageNumber}
                className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          } else if (
            pageNumber === currentPage - 2 ||
            pageNumber === currentPage + 2
          ) {
            return (
              <li key={`dots-${pageNumber}`} className="page-item">
                <span className="page-link">...</span>
              </li>
            );
          } else {
            return null;
          }
        })}

        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
)}


      </div>
    </>
  );
}