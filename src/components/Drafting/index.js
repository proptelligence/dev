import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Import the CSS file
import { auth } from '../../firebase'; // Import auth from your Firebase configuration

const Drafting = () => {
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
        <h1>Legal Document Drafting</h1>
        <p>
          Deeds and agreements are legal documents that can be used to record and document 
          certain actions, rights, and obligations. Our legal services can provide advice 
          and assistance in drafting, reviewing, and negotiating deeds and agreements.
          We can also help with the registration of certain types of deeds and agreements, 
          such as mortgages and transfers of property. Our experienced team can ensure that 
          all parties involved are fully aware of the terms and conditions of the deed or agreement 
          before it is signed. We can also provide comprehensive advice on the various legal 
          aspects associated with deeds and agreements. If you have any questions or require any
          advice, please contact us for a free initial consultation.
        </p>

        <div className="ts-containers-wrapper">
          {showCategoriesFirstContainer ? (
            <div className='ts-half-container'>
              <div className="category-buttons">
                <Link to="/payment" onClick={handleLinkClick}>Sale Agreement</Link>
                <Link to="/payment" onClick={handleLinkClick}>Rent & Lease Agreement</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="ts-half-container" onClick={handleTitleImageClickFirstContainer}>
                <img src="https://img.freepik.com/free-vector/notary-service-concept-professional-lawyer-signing-legalizing-paper-document-person-witnessing-signatures-document-isolated-flat-vector-illustration_613284-1686.jpg" alt="Legal Drafting"  />
                <h2>Agreement Drafting</h2>
                <p>Our team creates clear and concise agreements tailored to your specific requirements.</p>
              </div>
            </>
          )}
          {showCategoriesSecondContainer ? (
            <div className='ts-half-container'>
              <div className="category-buttons">
                <Link to="/payment" onClick={handleLinkClick}>Sale</Link>
                <Link to="/payment" onClick={handleLinkClick}>Gift</Link>
                <Link to="/payment" onClick={handleLinkClick}>Release</Link>
                <Link to="/payment" onClick={handleLinkClick}>Rectification</Link>
                <Link to="/payment" onClick={handleLinkClick}>Will</Link>
                <Link to="/payment" onClick={handleLinkClick}>GPA</Link>
                <Link to="/payment" onClick={handleLinkClick}>SPA</Link>
                <Link to="/payment" onClick={handleLinkClick}>Mortgage</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="ts-half-container" onClick={handleTitleImageClickSecondContainer}>
                <img src="https://img.freepik.com/free-photo/lawyer-office-lawyer-team-working-wood-table-with-smartphone-laptop-tablet-consult-business-law_342744-753.jpg" alt="Legal Drafting"/>
                <h2>Deeds</h2>
                <p>We draft comprehensive contracts covering various legal aspects to protect your interests.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Drafting;
