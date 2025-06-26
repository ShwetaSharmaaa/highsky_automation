import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';
import ServiceDetail from './Components/Services/ServiceDetail';
import Products from './Components/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<AboutUs />} path="/about_us" />
          <Route element={<Services />} path="/services" />
          <Route element={<Products />} path="/products" />
          <Route element={<ContactUs />} path="/contact_us" />
          <Route element={<ServiceDetail />} path="/service_detail" />
          <Route path="/service_detail/:id" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;