import React, { useState } from 'react';
import './PropertyForm.css'; // Import the updated CSS file
import PropertyDetails from '../PropertyDetails';

const PropertyForm = ({ showForm, setShowForm }) => {
  const [propertyName, setPropertyName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [propertyPhoto, setPropertyPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`custom-property-form ${showForm ? 'show' : ''}`}>
      <form onSubmit={handleSubmit} className="custom-form">
        <h2>Post Property</h2>
        <label htmlFor="propertyName" className="custom-label">Enter Property Name:</label>
        <input
          type="text"
          id="propertyName"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
          className="custom-input"
        />

        <label htmlFor="description" className="custom-label">Enter Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="custom-textarea"
        ></textarea>

        <label htmlFor="price" className="custom-label">Enter Property Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="custom-input"
        />

        <label htmlFor="location" className="custom-label">Enter Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="custom-input"
        />

        <label htmlFor="propertyPhoto" className="custom-label">Upload Property Photo:</label>
        <input
          type="file"
          id="propertyPhoto"
          onChange={(e) => setPropertyPhoto(e.target.files[0])}
          className="custom-file-input"
        />

        <button type="submit" className="custom-button">Submit</button>
        <button onClick={() => setShowForm(false)} className="custom-button">Close</button>
      </form>

      {submitted && (
        <PropertyDetails
          propertyName={propertyName}
          description={description}
          price={price}
          location={location}
          propertyPhoto={propertyPhoto}
        />
      )}
    </div>
  );
};

export default PropertyForm;
