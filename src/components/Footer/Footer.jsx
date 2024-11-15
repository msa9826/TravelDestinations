import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-container">
                <div className="footer-content">
                    <p className='end-foot'>Begin your journey with TravelDestinations</p>
                    <p>&copy; 2024 TravelDestinations. All rights reserved.</p>
                    <nav aria-label="Footer Menu">
                        <ul className="footer-menu">
                            <li className="footer-item">
                                <i className="fa fa-home fa-3x" aria-hidden="true"></i>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
