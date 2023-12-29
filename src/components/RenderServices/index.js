import React, { useState } from 'react';
import './index.css';
import { FaShoppingCart, FaHandshake } from 'react-icons/fa'; 

const RenderServices = ({ selectedOption }) => {
  const [showSellOptions, setShowSellOptions] = useState(false);
  const [showBuyOptions, setShowBuyOptions] = useState(false);
  const [showRentOptions, setShowRentOptions] = useState(false);

  const handleSellClick = () => {
    setShowSellOptions(true);
    setShowBuyOptions(false);
    setShowRentOptions(false);
  };

  const handleBuyClick = () => {
    setShowBuyOptions(true);
    setShowSellOptions(false);
    setShowRentOptions(false);
  };

  const handleRentClick = () => {
    setShowRentOptions(true);
    setShowSellOptions(false);
    setShowBuyOptions(false);
  };

  const [activeButtons, setActiveButtons] = useState({
    localities: '',
    propertyTypes: '',
    bedrooms: '',
  });



  return (
    <div className="services">
      {selectedOption === 'Residential' && (
        <div className="service">
          <button
            className={showSellOptions ? 'active' : ''}
            onClick={() => {
              handleSellClick();
            }}
          >
            <FaHandshake /> Sell
          </button>
          <button
            className={showBuyOptions ? 'active' : ''}
            onClick={() => {
              handleBuyClick();
            }}
          >
            <FaShoppingCart /> Buy
          </button>
          <button
            className={showRentOptions ? 'active' : ''}
            onClick={() => {
              handleRentClick();
            }}
          >
            Rent
          </button>

          {showSellOptions && (
            <div>
              {/* Display container for Sell */}
              <h4>Sell Container</h4>
              <div>
                <p>Popular Localities in Hyderabad</p>
                <button  type='button'> + Gachibowli, Hyderabad</button>
                <button type='button'> + Bachupally, Hyderabad</button>
                <button type='button'> + Hi-tech city, Hyderabad</button>
                <button type='button'> + Kondapur, Hyderabad</button>
                <button type='button'> + Miyapur, Hyderabad</button>
              </div>
              <div>
                <p>Property types</p>
                <button>Flat/Apartments</button>
                <button>Independent House </button>
                <button>Gated community</button>
                <button>Villas</button>
                <button>Farm House</button>
                <button>Builder Floor </button>
                <button>Land </button>
              </div>
              <div>
                <p>No. of Bedrooms</p>
                <button>1 BKH</button>
                <button>2 BKH</button>
                <button>3 BKH</button>
                <button>4+ BKH</button>
              </div> 

              <button type="button">Post Property</button>
            </div>
          )}

          {showBuyOptions && (
            <div>
            {/* Display container for Sell */}
            <h4>Buy Container</h4>
            <div>
              <p>Popular Localities in Hyderabad</p>
              <button  type='button'> + Gachibowli, Hyderabad</button>
              <button type='button'> + Bachupally, Hyderabad</button>
              <button type='button'> + Hi-tech city, Hyderabad</button>
              <button type='button'> + Kondapur, Hyderabad</button>
              <button type='button'> + Miyapur, Hyderabad</button>
            </div>
            <div>
              <p>Property types</p>
              <button>Flat/Apartments</button>
              <button>Independent House </button>
              <button>Gated community</button>
              <button>Villas</button>
              <button>Farm House</button>
              <button>Builder Floor </button>
              <button>Land </button>
            </div>
            <div>
              <p>No. of Bedrooms</p>
              <button>1 BKH</button>
              <button>2 BKH</button>
              <button>3 BKH</button>
              <button>4+ BKH</button>
            </div> 

           <div>
           <button id='#post-button2' type="button">Fetch Property</button>
            </div>
          </div>
          )}

          {showRentOptions && (
            <div>
              {/* Display container for Rent */}
              <h4>Rent Container</h4>
              {/* Add your content for renting options */}
            </div>
          )}
        </div>
      )}

      {/* Additional logic for 'Commercial' category */}
      {/* ... */}
    </div>
  );
};

export default RenderServices;
