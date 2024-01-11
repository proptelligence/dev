import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'; // Import the CSS file

const TitleSearch = () => {
  const handleLinkClick = (e) => {
    const hasJWTToken = localStorage.getItem('jwtToken') !== null;
    if (!hasJWTToken) {
      e.preventDefault(); // Prevent default link behavior
      window.location.href = '/signup';
    }
  };
  return (
    <>
    
    <div className="title-search-container">
      <h1>Title Search or Legal Opinion</h1>
      <p>
        A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate. It is issued by a title company or a lawyer, and it generally includes a review of the title history of the property and any liens or encumbrances that are attached to it. A Property Title Opinion can help protect the buyer and seller in a real estate transaction by providing an assurance that the title is valid and that the buyer has clear title to the property. Our experienced legal team can provide a detailed Property Title Opinion that clearly outlines the legal status of the property and helps to ensure a smooth real estate transaction.
      </p>
      <div className="ts-containers-wrapper">
        <div className="ts-half-container">
          <Link to="/payment" onClick={handleLinkClick}><img src="https://img.freepik.com/premium-photo/pad-with-papers_249973-698.jpg" alt="Property Title" /></Link>
          <h2>Verification of Title from 1960 to Till Date</h2>
          <p>A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate.</p>
        </div>
        <div className="ts-half-container">
            <Link to="/payment" onClick={handleLinkClick}>          <img src="https://img.freepik.com/free-photo/realtor-making-deal-with-customer-office_23-2147764245.jpg" alt="Property Title" />
          <h2>Verification of Title for Last 30 Years</h2>
          <p>A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate.</p></Link>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default TitleSearch;
