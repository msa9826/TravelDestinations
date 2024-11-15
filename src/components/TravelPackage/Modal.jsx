import React, { useState } from 'react';
import './Modal.css';

function Modal({ destination, onClose }) {
    const [customPackage, setCustomPackage] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [bookingMessage, setBookingMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const addCustomItem = () => {
        if (inputValue.trim() !== '') {
            setCustomPackage([...customPackage, inputValue]);
            setInputValue('');
        }
    };

    const removeCustomItem = (index) => {
        setCustomPackage(customPackage.filter((_, i) => i !== index));
    };

    const handleBookPackage = (packageName) => {
        setBookingMessage(`You have booked the ${packageName} package. Check your email for details.`);
        setShowConfirmation(true);
    };

    const handleRequestQuote = () => {
        setBookingMessage('Your quote request has been submitted. Check your email for details.');
        setShowConfirmation(true);
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
        setBookingMessage('');
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{destination.title} Packages</h2>
                <div className="package-cards-container">
                    <div className="package-card package-card-basic">
                        <h3>Basic</h3>
                        <ul>
                            <li>5 Days Stay</li>
                            <li>4 Star Hotel Stay</li>
                            <li>Economy Class Travel</li>
                            <li>Basic Tour Guide</li>
                        </ul>
                        <button className="book-button" onClick={() => handleBookPackage('Basic')}>Book</button>
                    </div>
                    <div className="package-card package-card-standard">
                        <h3>Standard</h3>
                        <ul>
                            <li>10 Days Stay</li>
                            <li>5 Star Hotel Stay</li>
                            <li>Business Class Travel</li>
                            <li>Standard Tour Guide</li>
                        </ul>
                        <button className="book-button" onClick={() => handleBookPackage('Standard')}>Book</button>
                    </div>
                    <div className="package-card package-card-premium">
                        <h3>Premium</h3>
                        <ul>
                            <li>15 Days Stay</li>
                            <li>Luxury Hotel Stay</li>
                            <li>First-Class Travel</li>
                            <li>Personal Tour Guide</li>
                        </ul>
                        <button className="book-button" onClick={() => handleBookPackage('Premium')}>Book</button>
                    </div>
                    <div className="package-card custom-package-card">
                        <h3>Custom Package</h3>
                        <ul>
                            {customPackage.map((item, index) => (
                                <li key={index}>
                                    {item} <button className="remove-button" onClick={() => removeCustomItem(index)}>−</button>
                                </li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Add custom item"
                        />
                        <button className="add-item-button" onClick={addCustomItem}>Add Item</button>
                    </div>
                </div>
                <button className="quote-button" onClick={handleRequestQuote}>Request a Quote</button>
                <button className="close-button" onClick={onClose}>Close</button>

                {showConfirmation && (
                    <div className="confirmation-popup">
                        <p>{bookingMessage}</p>
                        <button className="close-confirmation-button" onClick={closeConfirmation}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
