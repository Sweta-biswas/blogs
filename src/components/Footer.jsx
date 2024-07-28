import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure you have Font Awesome CSS imported

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-[234px] mb-8 lg:mb-0">
          <div className="flex space-x-4">
            <a href="#" className="bg-custom-light-green p-3 rounded-full">
              <i className="fab fa-facebook-f text-black text-xl"></i>
            </a>
            <a href="#" className="bg-custom-light-green p-3 rounded-full">
              <i className="fab fa-linkedin-in text-black text-xl"></i>
            </a>
            <a href="#" className="bg-custom-light-green p-3 rounded-full">
              <i className="fab fa-youtube text-black text-xl"></i>
            </a>
          </div>
          <div className="space-y-2 mt-8 lg:mt-0">
            <h3 className="text-lg font-bold">Services</h3>
            <p>Waste Management</p>
            <p>E-waste EPR</p>
            <p>Plastic Waste EPR</p>
            <p>Battery Waste EPR</p>
            <p>TYPE WASTE EPR</p>
            <p>RECYCLE REGISTRATION</p>
            <p>CGWA NOC</p>
            <p>UPGWD NOC</p>
            <p>HWRA NOC</p>
            <p>LMPC</p>
            <p>BIS, WPC, ISO</p>
          </div>
        </div>
        <div className="space-y-2 mt-[270px] lg:mt-0">
          <h3 className="text-lg font-bold">Contact Us</h3>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
