import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const LegalServices = () => (
  <>
    <div className="legal-services-container">
      <h1 className='main-heading'>Legal Services</h1>
      <div className="intro">
        <p className='legal-sub-heading'>
        Welcome to Legal Services, your trusted destination for comprehensive legal solutions. 
        From intricate business contracts to personal legal matters, our team of seasoned attorneys is here to navigate the complex terrain of law on your behalf.
        </p>
      </div>

      <div className="services-cont">
        <div className="service-1">
          <Link to="/titlesearch">
          <img
            className="img1"
            src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223017/Title_nmk2t2.jpg"
            alt="Service 1"
          />
          </Link>
         
          <h2 className='sub'>
            Title Search OR Legal Opinion
          </h2>
          <p className='slide-des'>
          A Property Title Opinion is a legal document that provides an opinion on the legal status of a piece of real estate. ......<Link to="/titlesearch"><span>Read More</span></Link>
          </p>
        </div>

        {/* Repeat these service blocks for other services */}
        <div className="service-1">
          <Link to="/drafting">
          <img
            className="img1"
            src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223056/Drafting_imdjr6.webp"
            alt="Service 1"
          />

          </Link>
          <h2 className='sub'>
          Drafting
          </h2>
          <p className='slide-des'>
          Drafting legal documents requires precision and expertise. 
          Our team specializes in creating legally binding documents tailored to your needs....<Link to="/drafting"><span>Read More</span></Link>
          </p>
        </div>
      
        <div className="service-1">
        <img
            className="img1"
            src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223055/legal-best_jxmw5i.png"
            alt="Service 1"
          />
          <h2 className='sub'>
          Affidavits
          </h2>
          <p className='slide-des' >
          An affidavit is a sworn statement made voluntarily under oath or affirmation before a qualified authority.
          ..<Link to="/affidavits"><span>Read More</span></Link>
          </p>
        </div> 

        <div className="service-1">
        <img
            className="img1"
            src="https://img.freepik.com/premium-photo/real-estate-loan-home-agent-sale-agreement-insurance-finance-contract-signing-are-explaining-customers-office-property-manager-woman-use-computer_36325-3828.jpg"
            alt="Service 1"
          />
          <h2 className='sub'>
          Registration support at SRO
          </h2>
          <p className='slide-des'>
          Our legal services provide comprehensive registration support to ensure that all our clients are properly registered with the relevant authorities....<Link to="/registrationSupport"><span>Read More</span></Link>
          </p>
        </div>
      </div>
    </div>
  </>
);

export default LegalServices;
