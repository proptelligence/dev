import React from 'react';
import JohnDoeImage from './john_doe.jpg';
import JaneSmithImage from './jane_smith.jpg';
import MichaelJohnsonImage from './michael_johnson.jpg';

const Team = () => {
  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <p>Our dedicated team of professionals is here to revolutionize the real estate and legal industry.</p>
      <div className="team-members">
        <div className="team-member">
          <img src={JohnDoeImage} alt="John Doe" />
          <h3>John Doe</h3>
          <p>Co-Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src={JaneSmithImage} alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Chief Legal Officer</p>
        </div>
        <div className="team-member">
          <img src={MichaelJohnsonImage} alt="Michael Johnson" />
          <h3>Michael Johnson</h3>
          <p>Lead Software Engineer</p>
        </div>
        {/* Add more team members here */}
      </div>
    </div>
  );
};

export default Team;
