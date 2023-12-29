import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'
const Home = () => (
    <>
    <Navbar />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">WELCOME</h1>
        <h2 className="sub-heading1">
          World's Leading Property Technology Startup
        </h2>
        <img
          src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Unlock the power of property intelligence with Proptelligence! Our
          innovative technologies are designed to help you get the most out of
          your real estate investments. Get the insights you need to make
          smarter decisions - with Proptelligence, the future of property is at
          your fingertips!
        </p>
      </div>
      <img
        src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>

    <div className="service-section">
      <h2 className="service-heading">Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <Link to="/prop">
            <img
              src="https://img.freepik.com/premium-vector/security-infests-house-agrees-isometric-illustration_18660-608.jpg"
              alt="Service 1"
              className="service-image"
            />
          </Link>
          <h3>Property Management Services</h3>
          <p>Efficient Solutions for Real Estate Management</p>
        </div>
        <div className="service-item">
          <Link to="/legalservices">
            <img
              src="https://img.freepik.com/premium-photo/consultation-male-lawyer-business-woman-customer_28283-887.jpg"
              alt="Service 2"
              className="service-image"
            />
            </Link>
          
          <h3>Legal Services</h3>
          <p>Expert Legal Guidance for Seamless Real Estate Transactions</p>
        </div>
      </div>
    </div>
  </>
  )
  
export default Home