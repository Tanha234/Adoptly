import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default Root;
