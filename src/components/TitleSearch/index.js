import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Import the CSS file
import { auth } from '../../firebase'; // Import auth from your Firebase configuration

const TitleSearch = () => {
  const [showCategoriesFirstContainer, setShowCategoriesFirstContainer] = useState(false);
  const [showCategoriesSecondContainer, setShowCategoriesSecondContainer] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser); // Get current user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(newUser => {
      setUser(newUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLinkClick = (e) => {
    if (!user) { // Check if user is not logged in
      e.preventDefault();
      navigate('/login'); // Redirect to login page
    }
  };

  const handleTitleImageClickFirstContainer = () => {
    // Toggle the visibility of the category buttons for the first container
    setShowCategoriesFirstContainer(!showCategoriesFirstContainer);
  };

  const handleTitleImageClickSecondContainer = () => {
    // Toggle the visibility of the category buttons for the second container
    setShowCategoriesSecondContainer(!showCategoriesSecondContainer);
  };

  return (
    <>
      <div className="title-search-container">
        <h1>Title Search or Legal Opinion</h1>
        <p>
          A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate. It is issued by a title company or a lawyer, and it generally includes a review of the title history of the property and any liens or encumbrances that are attached to it. A Property Title Opinion can help protect the buyer and seller in a real estate transaction by providing an assurance that the title is valid and that the buyer has clear title to the property. Our experienced legal team can provide a detailed Property Title Opinion that clearly outlines the legal status of the property and helps to ensure a smooth real estate transaction.
        </p>
        <div className="ts-containers-wrapper">
          {showCategoriesFirstContainer ? (
            <div className='ts-half-container'>
              <div className="category-buttons">
                <Link to="/payment" onClick={handleLinkClick}>Agricultural Land</Link>
                <Link to="/payment" onClick={handleLinkClick}>Converted Land</Link>
                <Link to="/payment" onClick={handleLinkClick}>Commercial Properties</Link>
                <Link to="/payment" onClick={handleLinkClick}>Project Land</Link>
                <Link to="/payment" onClick={handleLinkClick}>Flat like Apartment</Link>
                <Link to="/payment" onClick={handleLinkClick}>Individual House</Link>
                <Link to="/payment" onClick={handleLinkClick}>Sites/Plots/Villas</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="ts-half-container" onClick={handleTitleImageClickFirstContainer}>
                <img src="https://img.freepik.com/premium-photo/pad-with-papers_249973-698.jpg" alt="Property Title" />
                <h2>Verification of Title from 1960 to Till Date</h2>
                <p>A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate.</p>
              </div>
            </>
          )}
          {showCategoriesSecondContainer ? (
            <div className='ts-half-container'>
              <div className="category-buttons">
                <Link to="/payment" onClick={handleLinkClick}>Agricultural Land</Link>
                <Link to="/payment" onClick={handleLinkClick}>Converted Land</Link>
                <Link to="/payment" onClick={handleLinkClick}>Commercial Properties</Link>
                <Link to="/payment" onClick={handleLinkClick}>Project Land</Link>
                <Link to="/payment" onClick={handleLinkClick}>Flat like Apartment</Link>
                <Link to="/payment" onClick={handleLinkClick}>Individual House</Link>
                <Link to="/payment" onClick={handleLinkClick}>Sites/Plots/Villas</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="ts-half-container" onClick={handleTitleImageClickSecondContainer}>
                <img src="https://img.freepik.com/free-photo/realtor-making-deal-with-customer-office_23-2147764245.jpg" alt="Property Title" />
                <h2>Verification of Title for Last 30 Years</h2>
                <p>A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TitleSearch;
