import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './RentalDeals.module.css';
import { useNavigate } from 'react-router-dom';

export default function RentalDeals() {
  const [carsList, setCarsList] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
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

  const getCars = async () => {
    try {
      const response = await axios.get('https://myfakeapi.com/api/cars/');
      setCarsList(response.data.cars);
      setFilteredCars(response.data.cars);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') {

      setFilteredCars(carsList);
    } else {
      const filtered = carsList.filter(car => 
        car.car.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredCars(carsList);
    } else {
      const filtered = carsList.filter(car => 
        car.car.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  const displayedCars = filteredCars.slice(0, 4);

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              Find, book and<br /> rent a car<br />
              <span className={styles.highlight}>Easily</span>
            </h1>
            <p>
              Get a car wherever and whenever you<br /> need it with your IOS and Android device.
            </p>
          </div>

          <div className={styles.heroCar}>
            <img src="/car 2 1-DriDdkj5.png" alt="Animated Car" />
          </div>
        </div>
      </div>

      <nav className="navbar navbar-light px-3">
        <form 
          className="d-flex align-items-center w-75 m-auto" 
          role="search"
          onSubmit={handleSearch}
        >
          <div className="input-group" style={{ width: '100%' }}>
            <span
              className="input-group-text bg-light text-muted"
              style={{ borderRight: 'none' }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="search"
              className="form-control p-2"
              placeholder="Search By Car Name"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ borderLeft: 'none', borderRight: 'none' }}
            />
            <button className="btn btn-primary px-4 fs-5" type="submit">
              Search
            </button>
          </div>
        </form>
      </nav>

      <div className="d-flex justify-content-center align-items-center my-2">
        <div className={`${styles.popularDeals} text-uppercase`}>
          popular rental deals
        </div>
      </div>

      <h2 className={`text-capitalize my-3 ${styles.popularTitle}`}>
        {searchQuery ? `Search results for "${searchQuery}"` : 'Most popular cars rental deals'}
      </h2>

      <div className="container mt-4">
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <p>Loading cars...</p>
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="col-12 text-center">
              <p className="text-muted fs-5">No cars found matching "{searchQuery}"</p>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => {
                  setSearchQuery('');
                  setFilteredCars(carsList);
                }}
              >
                Show All Cars
              </button>
            </div>
          ) : (
            displayedCars.map((car, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                <div className={`card w-100 h-100 ${styles.carCard}`}>
                  
                  <img
                    src={getCarImage(car.id)}
                    className={styles.carImage}
                    alt={car.car}
                  />
                  
                  <div className="card-body p-3">
                    
                    <h5 className={styles.carTitle}>{car.car}</h5>
                    
                    <div className={styles.reviewSection}>
                      <span className={styles.starIcon}>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span className={styles.reviewText}>
                        {car.rating} ({Math.floor(Math.random() * 3000) + 500} reviews)
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
                      <div className={styles.automatic}>
                        <div className={`${styles.specItem}`}>
                          <i className="fa-solid fa-gear"></i>
                          <span>Automatic</span>
                        </div>
                      </div>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.priceSection}>
                      <span className={styles.priceLabel}>Price :</span>
                      <div className={styles.priceAmount}>
                        {car.price || '2814.46'}
                        <span className={styles.perDay}>/day</span>
                      </div>
                    </div>
                    
                    <div className={styles.availabilityBadge}>
                      <span className={car.availability ? styles.availableTag : styles.notAvailableTag}>
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

        {!loading && filteredCars.length > 4 && (
          <div className="text-center mt-4 mb-5">
            <button
              className={styles.showAllBtn}
              onClick={() => navigate('/all-vehicles')}
            >
              Show all vehicles {filteredCars.length} cars
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}