import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling

const PropertyForm = ({ showForm, setShowForm }) => {
  const [propertyName, setPropertyName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [propertyPhoto, setPropertyPhoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    // You can access form values in propertyName, description, price, location, propertyPhoto
    // Reset the form or perform any other necessary actions after submission
  };

  return (
    <div className={`property-form ${showForm ? 'show' : ''}`}>
      <form onSubmit={handleSubmit}>
        <h2>Post Property</h2>
        <label htmlFor="propertyName">Enter Property Name:</label>
        <input
          type="text"
          id="propertyName"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
        />

        <label htmlFor="description">Enter Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="price">Enter Property Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="location">Enter Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="propertyPhoto">Upload Property Photo:</label>
        <input
          type="file"
          id="propertyPhoto"
          onChange={(e) => setPropertyPhoto(e.target.files[0])}
        />

        <button type="submit">Submit</button>
        <button onClick={() => setShowForm(false)}>Close</button>
      </form>
    </div>
  );
};

export default PropertyForm;
