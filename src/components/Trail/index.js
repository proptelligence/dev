import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './index.css';

const Trail = () => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    'https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg',"https://img.freepik.com/premium-photo/3d-rendering-modern-luxurious-house-with-pool_190619-1781.jpg","https://img.freepik.com/free-vector/house-searching-concept-landing-page_23-2148298496.jpg"
  ];

  useEffect(() => {
    // Function to change the image after a specified interval
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Interval to change the image every 5 seconds (adjust interval duration as needed)
    const interval = setInterval(changeImage, 5000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">WELCOME</h1>
          <h2 className="sub-heading1">
            World's Leading Property Technology Startup
          </h2>
          <img
            src={images[currentImageIndex]} // Display the current image based on index
            alt="clothes to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Unlock the power of property intelligence with Proptelligence! Our
            innovative technologies are designed to help you get the most out of
            your real estate investments. Get the insights you need to make
            smarter decisions - with Proptelligence, the future of property is at
            your fingertips!
          </p>
        </div>
        <img
          src={images[currentImageIndex]} // Display the current image based on index
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  );
};

export default Trail;
