// PropertyManagement.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHandshake } from 'react-icons/fa';
import RenderServices from '../RenderServices';
import './index.css';

const cityImages = {
  Mumbai: 'https://img.freepik.com/premium-photo/taj-mahal-hotel_78361-4512.jpg',
  Delhi: 'https://img.freepik.com/premium-photo/india-gate-background-cloudy-sky-sightseeing-new-delhi-view-from-road_431724-6913.jpg',
  Bangalore: 'https://as2.ftcdn.net/v2/jpg/03/11/94/23/1000_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg',
  Hyderabad: 'https://img.freepik.com/premium-vector/illustration-famous-indian-monument-charminar_674037-19.jpg',
  Kolkata: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
  Chennai: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
  Pune: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
  Ahmedabad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
};

const PropertyManagement = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setShowCategories(true);
    setSelectedOption('');
    setSelectedBudget('');
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
  };

  const handleBack = () => {
    setShowCategories(false);
    setSelectedOption('');
    setSelectedBudget('');
  };

  const cities = [
    'Ahmedabad',
    'Bangalore',
    'Chennai',
    'Delhi',
    'Hyderabad',
    'Kolkata',
    'Mumbai',
    'Pune',
  ];

  const budgetOptions = [
    '0-1L',
    '1-5L',
    '6-9L',
    '8-9L',
    '9-10L',
  ];


  const renderCategories = () => {
    if (selectedCity && showCategories) {
      return (
        <div className="categories">
          <button onClick={handleBack}>Back to Cities</button>
         
          <div className="category-options">
          <button
            onClick={() => handleOptionChange('Residential')}
            className={`category-button ${selectedOption === 'Residential' ? 'selected' : ''}`}
          >
            Residential
          </button>
          <button
            onClick={() => handleOptionChange('Commercial')}
            className={`category-button ${selectedOption === 'Commercial' ? 'selected' : ''}`}
          >
            Commercial
          </button>
        </div>
          {selectedOption && (
            <div className="budget-filters">
              <h4>Budget </h4>
              <div className="budget-options">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    onClick={() => handleBudgetChange(budget)}
                    className={selectedBudget === budget ? 'selected' : ''}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="property-management-services">
      <div className="header">
        <h2 className="pms-heading">Property Management Services</h2>
        <Link to="/post">
          <button >Post Property <span className="free-btn">Free</span></button>
        </Link>
      </div>
      <div>
        <h1>Select your City</h1>
      </div>
      <div className="cities-container">
        {cities.map((city) => (
          <div
            key={city}
            className="city-button"
            onClick={() => handleCityChange(city)}
          >
            <div className="city-image">
              <img
                src={cityImages[city]}
                alt={`${city} Image`}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="city-text">{city}</div>
          </div>
        ))}
      </div>
      {renderCategories()}
      <RenderServices selectedOption={selectedOption} selectedCity={selectedCity} />
    </div>
  );
};

export default PropertyManagement;
