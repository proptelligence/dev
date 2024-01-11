import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHandshake , FaRegBuilding } from 'react-icons/fa';
import PropertyForm from '../PropertyForm'
import './index.css';

const RenderServices = ({ selectedOption, selectedCity }) => {
  const [showSellOptions, setShowSellOptions] = useState(false);
  const [showBuyOptions, setShowBuyOptions] = useState(false);
  const [showRentOptions, setShowRentOptions] = useState(false);
  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);

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

  const toggleSelection = (selectedList, value, setSelectedList) => {
    const updatedList = [...selectedList];
    const index = updatedList.indexOf(value);
    if (index > -1) {
      updatedList.splice(index, 1);
    } else {
      updatedList.push(value);
    }
    setSelectedList(updatedList);
  };

  const renderButton = (value, selectedList, setSelectedList) => {
    const isSelected = selectedList.includes(value);
    return (
      <button
        key={value}
        type="button"
        className={isSelected ? 'selected' : ''}
        onClick={() => toggleSelection(selectedList, value, setSelectedList)}
      >
        {isSelected ? '- ' : '+ '}
        {value}, {selectedCity}
      </button>
    );
  };

  const popularLocalities = {
    Hyderabad: ['Gachibowli', 'Bachupally', 'Hi-tech city', 'Kondapur', 'Miyapur'],
    Mumbai: ['Thane West', 'Kharghar', 'Panve', 'Ghodbunder Road'],
    Chennai: ['Adyar', 'Anna Nagar', 'T. Nagar', 'Besant Nagar', 'Velachery', 'Nungambakkam', 'Mylapore', 'Alwarpet'],
    Pune: ['Koregaon Park', 'Kalyani Nagar', 'Baner', 'Wakad', 'Hadapsar', 'Viman Nagar', 'Kothrud', 'Hinjewadi'],
    Bangalore: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'Jayanagar', 'HSR Layout', 'Marathahalli', 'Yelahanka'],
    Kolkata: ['Salt Lake City', 'Rajarhat', 'New Town', 'Ballygunge', 'Behala', 'Garia', 'Dum Dum', 'Howrah'],
    Ahmedabad: ['Satellite', 'Bodakdev', 'Thaltej', 'Vastrapur', 'Maninagar', 'Gota', 'Chandkheda', 'Naranpura'],
    Delhi: ['Dwarka', 'Saket', 'Vasant Kunj', 'Pitampura', 'Rohini', 'Nehru Place', 'Lajpat Nagar', 'Karol Bagh']
  };



  return (
    <div className="services">
      {selectedOption === 'Residential' && (
        <div className="service">

          <button
            className={showBuyOptions ? 'active' : ''}
            onClick={handleBuyClick}
          >
            <FaShoppingCart /> Buy
          </button>

          <button
            className={showSellOptions ? 'active' : ''}
            onClick={handleSellClick}
          >
            <FaHandshake /> Sell
          </button> 

          <button
            className={showRentOptions ? 'active' : ''}
            onClick={handleRentClick}
          >
             Rent
          </button>
       

          {showBuyOptions && (
            <div>
              <div>
                <p>Popular Localities in {selectedCity}</p>
                {popularLocalities[selectedCity]?.map((locality) =>
                  renderButton(locality, selectedLocalities, setSelectedLocalities)
                )}
              </div>

              <div>
              <p>Property types</p>
              <button > < FaRegBuilding /> Flat/Apartments</button>
              <button>Independent House </button>
              <button>Gated community</button>
              <button>Villas</button>
              <button>Farm House</button>
              <button>Builder Floor </button>
              <button>Land </button>
            </div>
            <div>
              <p>No. of Bedrooms</p>
              <button>1 BHK</button>
              <button>2 BHK</button>
              <button>3 BHK</button>
              <button>4+ BHK</button>
            </div> 
              <Link to="/propertyForm">
              <button type="button">Find Property                                                                                                                                       </button>
              </Link>
            
            </div>
          )}

          {showSellOptions && (
            <div>
              <div>
                <p>Popular Localities in {selectedCity}</p>
                {popularLocalities[selectedCity]?.map((locality) =>
                  renderButton(locality, selectedLocalities, setSelectedLocalities)
                )}
              </div>

              <div>
              <p>Property types</p>
              <button > < FaRegBuilding /> Flat/Apartments</button>
              <button>Independent House </button>
              <button>Gated community</button>
              <button>Villas</button>
              <button>Farm House</button>
              <button>Builder Floor </button>
              <button>Land </button>
            </div>
            <div>
              <p>No. of Bedrooms</p>
              <button>1 BHK</button>
              <button>2 BHK</button>
              <button>3 BHK</button>
              <button>4+ BHK</button>
            </div> 
              <Link to="/propertyForm">
              <button type="button">Find Property <span className="free-btn">Free</span></button>
              </Link>
            
            </div>
          ) }

          {showRentOptions && (
  <div>
    <div>
      <p>Popular Localities in {selectedCity}</p>
      {popularLocalities[selectedCity]?.map((locality) =>
        renderButton(locality, selectedLocalities, setSelectedLocalities)
      )}
    </div>

    <div>
      <p>Property types</p>
      <button> < FaRegBuilding /> Flat/Apartments</button>
      {/* Include buttons for other property types */}
    </div>

    <div>
      <p>No. of Bedrooms</p>
      <button>1 BHK</button>
      {/* Include buttons for other bedroom options */}
    </div>

    <Link to="/propertyForm">
      <button type="button">Find Properties</button>
    </Link>
  </div>
)}

          {/* (Repeating similar content as needed) */}
        </div>
      )}

      {/* Additional logic for 'Commercial' category */}
    </div>
  );
};

export default RenderServices;
