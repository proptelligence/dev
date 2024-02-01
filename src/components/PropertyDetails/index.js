import React from 'react';
import './index.css'

const PropertyDetails = ({ propertyName, description, price, location, propertyPhoto }) => {
  return (
    <div className="property-details">
      <h2>Property Details</h2>
      {/* Display property photo, you may need to handle image rendering appropriately */}
      {propertyPhoto && <img src={URL.createObjectURL(propertyPhoto)} alt="Property" />} 
      <p>Name: {propertyName}</p> 
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>Location: {location}</p>

      {/* You can style this component based on your design */}
    </div>
  );
};

export default PropertyDetails;
