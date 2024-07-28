import React from 'react';
import TopHeader from './TopHeader';
import logo from '../assets/image.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div>
      <TopHeader />
      <header className="bg-custom-white flex flex-col md:flex-row justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="text-custom-olive-green text-2xl">
            <span className="font-bold">Water</span>
            <span className="font-normal">Wise</span>
          </div>
        </div>
        <nav className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="text-custom-black">Home</a>
          <a href="#" className="text-custom-black">Our Services</a>
          <a href="#" className="text-custom-black">Blog</a>
          <a href="#" className="text-custom-black">About Us</a>
          <a href="#" className="text-custom-black">Contact Us</a>
          <a href="#" className="text-custom-black"><i className="fas fa-search"></i></a>
        </nav>
      </header>

      <div className="flex flex-col items-center mt-16">
        <div className="text-left font-inter font-semibold text-3xl flex justify-center items-center" style={{ width: '217px', height: '48px' }}>
          Blogs
        </div>
        <div className="mt-4" style={{ width: '100px', height: '2px', borderTop: '0.5px solid black' }}></div>
      </div>
    </div>
  );
};

export default Header;
