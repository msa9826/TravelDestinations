// src/ContactUs.jsx
import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <form className="contact-form">
                <label className="form-label">
                    Name:
                    <input type="text" name="name" className="form-input" required />
                </label>
                <label className="form-label">
                    Email:
                    <input type="email" name="email" className="form-input" required />
                </label>
                <label className="form-label">
                    Message:
                    <textarea name="message" className="form-textarea" required></textarea>
                </label>
                <button type="submit" className="form-button">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;
