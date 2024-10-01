import React, { useState } from 'react';
import Footer from '../components/Footer';
// import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobAddress: '',
        jobDescription: '',
        file: null,
        // robotCheck: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.phone) formErrors.phone = 'Phone number is required';
        if (!formData.jobAddress) formErrors.jobAddress = 'Job address is required';
        if (!formData.jobDescription) formErrors.jobDescription = 'Job description is required';
        // if (!formData.robotCheck) formErrors.robotCheck = 'Please confirm you are not a robot';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            // Handle the file upload or form submission logic here
            console.log(formData);
        }
    };

    return (
        <div className="contact-page">
            {/* Header Section with Image and Contact Text */}
            <div className="contact-header">
                <img src="/about.png" alt="Contact Header" className="header-image" />
                <div className="header-text">Contact</div>
            </div>

            {/* Contact Info and Form Section */}
            <div className="contact-section">
                {/* Contact Details */}
                <div className="contact-details">
                    <h2>Contact Information</h2>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> contact@exoticelectrical.com</p>
                    <p><strong>Address:</strong> 1234 Electric Ave, Auckland, NZ</p>
                    <p><strong>Business Hours:</strong> Mon-Fri: 9am - 5pm</p>
                </div>

                {/* Quote Submission Form */}
                <div className="quote-form">
                    <h2>Request a Quote</h2>
                    {isSubmitted ? (
                        <p className="success-message">Thank you! Your request has been submitted.</p>
                    ) : (
                        <form className="form-section" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="error-text">{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error-text">{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p className="error-text">{errors.phone}</p>}
                            </div>

                            <div className="form-group">
                                <label>Job Address</label>
                                <input
                                    type="text"
                                    name="jobAddress"
                                    value={formData.jobAddress}
                                    onChange={handleChange}
                                />
                                {errors.jobAddress && <p className="error-text">{errors.jobAddress}</p>}
                            </div>

                            <div className="form-group">
                                <label>Job Description</label>
                                <textarea
                                    name="jobDescription"
                                    value={formData.jobDescription}
                                    onChange={handleChange}
                                />
                                {errors.jobDescription && <p className="error-text">{errors.jobDescription}</p>}
                            </div>

                            <div className="form-group">
                                <label>Upload File</label>
                                <input type="file" onChange={handleFileChange} />
                            </div>

                            {/* <div className="form-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="robotCheck"
                                        checked={formData.robotCheck}
                                        onChange={handleChange}
                                    />
                                    I'm not a robot
                                </label>
                                {errors.robotCheck && <p className="error-text">{errors.robotCheck}</p>}
                            </div> */}

                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;
