import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'; // Import the CSS file

const Drafting = () => {
  const handleLinkClick = (e) => {
    const hasJWTToken = localStorage.getItem('jwtToken') !== null;
    if (!hasJWTToken) {
      e.preventDefault(); // Prevent default link behavior
      window.location.href = '/signup';
    }
  };
  return (
    <div className="drafting-container">
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
      <div className="drafting-containers-wrapper">
        <div className="drafting-half-container">
        
         <div className="image-content-wrapper">
         <Link to="/payment"  onClick={handleLinkClick}>
            <img src="https://img.freepik.com/free-photo/lawyer-office-lawyer-team-working-wood-table-with-smartphone-laptop-tablet-consult-business-law_342744-753.jpg" alt="Legal Drafting" />
            </Link>
          </div>
        
          <div className="text-content">
            <h2>Contract Drafting</h2>
            <p>We draft comprehensive contracts covering various legal aspects to protect your interests.</p>
          </div>
        </div>
        <div className="drafting-half-container">
          <div className="image-content-wrapper">
            <Link to="/payment"  onClick={handleLinkClick}>
            <img src="https://img.freepik.com/free-vector/notary-service-concept-professional-lawyer-signing-legalizing-paper-document-person-witnessing-signatures-document-isolated-flat-vector-illustration_613284-1686.jpg" alt="Legal Drafting" />
            </Link>
          </div>
          <div className="text-content">
            <h2>Agreement Drafting</h2>
            <p>Our team creates clear and concise agreements tailored to your specific requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drafting;
