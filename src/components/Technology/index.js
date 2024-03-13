import React, { useState } from 'react';
import Navbar from '../Navbar'; 
import Footer from '../Footer';
import './index.css';

const Technology = () => {


  return (
    <>
      <Navbar />
      <div className="technology-container">
        <h1 className="main-heading">Technologies</h1>
        <p className="sub-heading">Providing Everything You Need</p>

        <div className='wrap-cont'>
         

        <div className="tech-sections">
            <div className="tech-image">
              <img
                src="https://img.freepik.com/free-photo/ai-human-technology-background_1409-5588.jpg"
                alt="AI in Real Estate"
              />
            </div> 
            <div className="centered-content">
                  <h2 >Artificial Intelligence</h2> 
                  <p className="prop-text-service-description">
  
                  Harnessing the power of AI, Proptelligence offers an innovative platform that transforms real estate decision-making. <span>Read More</span>

  </p>
                  <div classNmae="animated-list-container">
                  
                  <ul className='cont-101'>
                      <li className='list-item'>Property Valuation and Predictive Analytics</li>
                      <li className='list-item'>Automated Property Management</li>
                      <li className='list-item'>Personalized Property Recommendations</li>
                      <li className='list-item'>Risk Management and Fraud Detection</li>
                      <li className='list-item'>Market Analysis and Investment Strategies</li>
                      <li className='list-item'>Legal and Compliance Automation</li>
                      <li className='list-item'>Data Visualization and Analytics</li>
               </ul>
                  </div>
                </div>
      
          </div>

          {/* Add similar logic for the second section */}
          <div className="tech-sections">
            <div className="tech-image">
              <img
                src="https://img.freepik.com/premium-photo/amazed-beautiful-caucasian-woman-using-virtual-reality-goggles-studio-modern-interactive-technology-studio_482257-45580.jpg"
                alt="AI in Real Estate"
              /> 
              
            </div> 
            <div className="centered-content">
                  <h2>AR & VR</h2>
                  <div classNmae="animated-list-container">
                  
                  <ul  className='cont-101'>
                  <li className='list-item'> Virtual Property Tours</li>
                    <li className='list-item'>Property Visualization and Design</li>
                    <li className='list-item'>Interactive Property Marketing</li>
                    <li className='list-item'>Remote Collaboration and Design Review</li>
                    <li className='list-item'>Training and Simulations</li> 
                    <li className='list-item'>Tenant Onboarding and Orientation</li>
                    <li className='list-item'>Data Visualization and Analytics</li> 
                
                  </ul>
                  </div>
                </div>
          
          </div> 

         <div className="tech-sections">
            <div className="tech-image">
              <img
                src="https://img.freepik.com/free-photo/man-clicking-icon-house_1134-149.jpg"
                alt="AI in Real Estate"
              />
            </div> 
            <div className="centered-content">
            <h2>Internet of Things (IoT)</h2>
                  <div>
                 <ul  className='cont-101'>
                 <li  className='list-item'>Smart Building Management</li>
                    <li className='list-item'>Security and Access Control</li>
                    <li className='list-item'>Energy Efficiency</li>
                    <li className='list-item'>Predictive Maintenance</li> 
                    <li className='list-item'>Smart Home Automation</li>
                    <li className='list-item'>Occupancy Management</li> 
                    <li className='list-item'>Environmental Monitoring</li>
                   
                 </ul>
                  </div>
                </div>
           
          </div>


        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Technology;
