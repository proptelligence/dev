import React from 'react';
import './index.css'; 
import { Link } from 'react-router-dom';

const Tech = () => {
  return (
    <>
      <div className="tech-home-cont">
     
      <div className="slider">
        <div className="container-item">
         
          
        </div>
        <div className="container-item"> 
        <Link to='/tech'> <img src="https://img.freepik.com/premium-photo/amazed-beautiful-caucasian-woman-using-virtual-reality-goggles-studio-modern-interactive-technology-studio_482257-45580.jpg" alt="AR & VR" /></Link>
          <h2 id='tech-heading'>AR/VR</h2>
          <p>Augmented Reality (AR) and Virtual Reality (VR) have transformed various industries, offering immersive experiences. Learn more about their impact:<Link to='/tech'><span>Read More..</span></Link></p>
        </div>
        <div className="container-item">
        <Link to='/tech'> <img src="https://img.freepik.com/premium-photo/smart-home-interface-with-augmented-realty-iot-object-interior-design_756748-3160.jpg" alt="AR & VR" className='lot-img' /></Link>
          <h2 id='tech-heading'>Internet of Things (IOT)</h2>
          <p>The Internet of Things (IoT) has profoundly influenced the real estate industry, revolutionizing the way properties are managed, operated, and experienced...<Link to='/tech'><span>Read More..</span></Link></p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Tech;
