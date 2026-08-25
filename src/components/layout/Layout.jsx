import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white text-dark font-sans">
      <Navbar />
      <main className="flex-fill">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}