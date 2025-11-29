import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ShowAllVehicles from './Components/ShowAllVehicles/ShowAllVehicles';
import CarDetails from './Components/CarDetails/CarDetails';
import Notfound from './Components/Notfound/Notfound';
import Layout from './Layout';
import RentalDeals from './Components/RentalDeals/RentalDeals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<RentalDeals />} />
          <Route path="/all-vehicles" element={<ShowAllVehicles />} />
          <Route path="/all-vehicles/:id" element={<CarDetails />} />
        </Route>
        
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;