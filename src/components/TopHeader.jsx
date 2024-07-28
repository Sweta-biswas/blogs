import React from 'react';

const TopHeader = () => {
  return (
    <div className="bg-custom-light-green flex flex-col md:flex-row justify-between items-center p-2 shadow-md">
      <div className="flex space-x-4 mb-2 md:mb-0">
        <a href="#" className="bg-custom-purple w-10 h-10 flex items-center justify-center rounded-lg">
          <i className="fab fa-facebook-f text-white text-xl"></i>
        </a>
        <a href="#" className="bg-custom-purple w-10 h-10 flex items-center justify-center rounded-lg">
          <i className="fab fa-linkedin-in text-white text-xl"></i>
        </a>
        <a href="#" className="bg-custom-purple w-10 h-10 flex items-center justify-center rounded-lg">
          <img src="https://img.icons8.com/?size=100&id=98964&format=png&color=ffffff" className='w-7 h-7' alt="Description of the image" />
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <button className="bg-custom-purple text-white p-2 rounded flex items-center">
          <i className="fas fa-phone mr-2"></i> +1 (772) 100-200
        </button>
        <button className="bg-custom-purple text-white p-2 rounded flex items-center">
          <i className="fas fa-map-marker-alt mr-2"></i> Doynton Blvd, Bucharest
        </button>
        <button className="bg-custom-purple text-white p-2 rounded flex items-center">
          <i className="fas fa-envelope mr-2"></i> uxultimates@gmail.com
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
