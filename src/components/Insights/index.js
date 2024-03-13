import {Link} from 'react-router-dom'
import Navbar from '../Navbar'

const Insights = () => {

    return(
       <> 
       <Navbar/> 
       <div className="legal-services-container">
        <h1 className='main-heading'>Insights</h1>
        <div className="intro">
          <p className='legal-sub-heading'>
           
          </p>
        </div>

        <div className="services-cont">
          {/* Service block 1 */}
          <div className="service-1">
            <Link to="/blogdetails">
              <img
                className="img1"
                src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709876547/s_vmo3j9.jpg"
                alt="Service 1"
              />
            </Link>
            <h2 className='sub'>
              Blogs 
            </h2>
            <p className='slide-des'>
            Our blogs cover a wide array of topics, from industry trends and market analysis to practical tips and expert advice.......<Link to="/blog"><span>Read More</span></Link>
            </p>
          </div>

          {/* Service block 2 */}
          <div className="service-1">
            <Link to="/">
              <img
                className="img1"
                src="https://img.freepik.com/premium-photo/busy-analyst-team-office-analyzing-financial-data-analysis-by-tablet-entity_31965-151090.jpg"
                alt="Service 1"
              />
            </Link>
            <h2 className='sub'>
              Reports & Insights.
            </h2>
            <p className='slide-des'>
            Our Reports & Insights section serves as a hub for in-depth analysis, comprehensive research, and actionable intelligence tailored to property owners, managers, investors, and industry professionals.<Link to="/blog2"><span>Read More</span></Link>
            </p>
          </div>
   
        </div>
      </div>
       </>
    )
}

export default Insights