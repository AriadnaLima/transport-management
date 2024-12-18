import React from 'react';
import SideBar from './components/SideBar/SideBar';
import "./App.css";
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Truck from './pages/truck';
import Driver from './pages/driver';
import Product from './pages/product';

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/truck" element={<Truck />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
