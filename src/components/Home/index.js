import {Link} from 'react-router-dom'
import Navbottom from '../Navbottom'

import Tech from '../Tech'

import Navbar from '../Navbar'
import './index.css'
const Home = () => { 
  const cityImages = {
    Mumbai: 'https://img.freepik.com/premium-photo/taj-mahal-hotel_78361-4512.jpg',
    Delhi: 'https://img.freepik.com/premium-photo/india-gate-background-cloudy-sky-sightseeing-new-delhi-view-from-road_431724-6913.jpg',
    Bangalore: 'https://as2.ftcdn.net/v2/jpg/03/11/94/23/1000_F_311942374_cK69g8ORWymuDTy6CuuRd8LSGgy8l93D.jpg',
    Hyderabad: 'https://img.freepik.com/premium-vector/illustration-famous-indian-monument-charminar_674037-19.jpg',
    Kolkata: 'https://procaffenation.com/wp-content/uploads/2017/04/beautiful-view-of-howrah-bridge-at-evening-compressor.jpg',
    Chennai: 'https://img.freepik.com/premium-vector/chennai-skyline-detailed-silhouette-trendy-vector-illustration_668947-1201.jpg',
    Pune: 'https://www.tourmyindia.com/images/trimbakeshwar-shiva-temple-nashik1.jpg',
    Ahmedabad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheth_Hutheesinh_Temple.jpg/800px-Sheth_Hutheesinh_Temple.jpg',
  };

  const cities = [
    'Bangalore',
    'Mumbai',
    'Chennai',
    'Delhi',
    'Hyderabad',
    'Kolkata',
    'Pune',
    'Ahmedabad',
  ];

  

    return(
      <>
    <Navbar /> 
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
           World's Leading Property Technology Startup
        </h1>
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
 

    <h1 className='city-heading'>Popular Cities</h1>
    <div className="cities-container"> 
        {cities.map((city) => (
          <div
            key={city}
            className="city-button"
           
          >
            <div className="city-image">
              <Link to="/prop">
              <img
                src={cityImages[city]}
                alt={`${city} Image`}
                style={{ width: '100%', height: '100%' }}
              />
              </Link>
            </div>
            <div className="city-text">{city}</div>
          </div>
        ))}
      </div>
    
    <Tech/>
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
          <h1 className='heading-2'>Property Management Services</h1>
          <p className='des-1'>Efficient Solutions for Real Estate Management</p>
        </div>
        <div className="service-item">
          <Link to="/legalservices">
            <img
              src="https://img.freepik.com/premium-photo/consultation-male-lawyer-business-woman-customer_28283-887.jpg"
              alt="Service 2"
              className="service-image"
            />
            </Link>
          
          <h1 className='heading-2'>Legal Services</h1>
          <p className='des-1'> Expert Legal Guidance for Seamless Real Estate Transactions</p>
        </div>
      </div>
    </div> 
    <footer>
      
      <Navbottom/>
  </footer>
  </>
    )
}
export default Home