import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => (
  <> 
    <Navbar/>
    <div className="cont-1">
      <div className="about-us">
        <div className='about-cont'>
        <h2>About Us</h2>
        </div>
        <p>
          Proptelligence is an AI-powered real estate and legal platform that
          helps agents, attorneys, and other real estate professionals find and
          procure properties. In a nutshell, we create a seamless experience for
          agents and attorneys to find properties and make offers. Our solution
          also automates much of the legal process in real estate transactions
          by using AI to automate tasks such as document review, contract
          negotiation, and financial analysis.
        </p>
        <p>
          Proptelligence is a World Leading Data-Driven company using PropTech
          and Legal Tech. We provide smart solutions for companies of all sizes
          and pride ourselves on our unparalleled, dedicated service. At
          Proptelligence, we believe that the right understanding and
          technological edge can lead companies towards a successful future.
          Unlike other services, we don't charge for basic features like data
          update - it's always free for our clients.
        </p>
        <p>
          Proptelligence focuses on Data-Driven technology Solutions using Data
          Science, Cloud, and Digital Platforms. We are a technology company
          that is developing AI for the legal and real estate sectors.
        </p>
      </div>
    </div> 
    <Footer/>
  </>
)

export default About