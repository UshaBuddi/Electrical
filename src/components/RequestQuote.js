import React, { useState } from 'react';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobDescription: '',
    attachment: null,
    notARobot: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.jobDescription) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    if (!formData.notARobot) {
      setErrorMessage('Please confirm you are not a robot.');
      return;
    }

    // Reset error message
    setErrorMessage('');

    // Here you can handle the form submission, e.g., send data to the server
    console.log(formData);
    
    // After submitting
    setFormSubmitted(true);
  };

  return (
    <div className="quote-section">
      <div className="quote-form-container">
        <h2>Request a Free Quote</h2>

        {formSubmitted ? (
          <p className="success-message">Thank you for submitting your request. We will get back to you soon!</p>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="attachment">Attachment (optional)</label>
              <input type="file" id="attachment" name="attachment" onChange={handleChange} />
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="notARobot" name="notARobot" checked={formData.notARobot} onChange={handleChange} />
              <label htmlFor="notARobot">I am not a robot</label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>

      <div className="quote-image-container">
        <img src="/human.jpg" alt="Request a quote" />
      </div>
    </div>
  );
};

export default RequestQuote;
