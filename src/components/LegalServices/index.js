import React from 'react';
import './index.css';

const LegalServices = () => (
  <>
    <div className="legal-services-container">
      <h1 className='main-heading'>Legal Services</h1>
      <div className="intro">
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti aliquam labore
          ipsam, quaerat facere provident, mollitia consequuntur a esse recusandae. Doloribus?
        </p>
      </div>

      <div className="services-cont">
        <div className="service-1">
          <img
            className="img1"
            src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223017/Title_nmk2t2.jpg"
            alt="Service 1"
          />
          <h2 className='sub'>
            Title Search OR Legal Opinion
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi
            pariatur fugit excepturi, fuga delectus facere provident beatae.
          </p>
        </div>

        {/* Repeat these service blocks for other services */}
        <div className="service-1">
        <img
            className="img1"
            src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703223056/Drafting_imdjr6.webp"
            alt="Service 1"
          />
          <h2 className='sub'>
          Drafting
          </h2>
          <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae
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
          <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero eaque animi pariatur fugit excepturi, fuga delectus facere provident beatae
          </p>
        </div>
      </div>
    </div>
  </>
);

export default LegalServices;
