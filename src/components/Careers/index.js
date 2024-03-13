import React, { useState } from 'react';
import Navbar from '../Navbar';
import './index.css';

const Career = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data and resume to server
    const formData = {
      name: name,
      email: email,
      phone: phone,
      resume: resume
    };
    console.log('Form Data:', formData);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setResume(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  return (
    <>
      <Navbar/> 
      <div className="career-container">
        <h1 className="career-heading">Career Opportunities @ proptelligence.net</h1>
        <p>Interested in joining our team? Fill out the form below and upload your resume.</p>
        <form onSubmit={handleSubmit} className="career-form">
          <div>
            <label className="career-label">Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="career-input" required />
          </div>
          <div>
            <label className="career-label">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="career-input" required />
          </div>
          <div>
            <label className="career-label">Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="career-input" required />
          </div>
          <div>
            <label className="career-label">Upload Resume:</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="career-input" required />
          </div>
          <button type="submit" className="career-button">Submit Application</button>
        </form>
      </div>
    </>
  );
};

export default Career;
