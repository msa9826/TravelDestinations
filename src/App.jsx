import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx';
import Modal from './components/TravelPackage/Modal.jsx'; // New import for the modal
import './App.css';
import uaeImage from './assets/uae.jpg';
import turkeyImage from './assets/turkey.jpg';
import saudiImage from './assets/saudi.jpg';
import canadaImage from './assets/canada.jpg';

import HomePage from './components/HomePage/HomePage.jsx';

import Description from './components/Homepage/Description.jsx';

import SummerDestinations from './components/HomePage/summerDestination/summerDestination.jsx';

import WinterDestinations from './components/HomePage/winterDestination/winterDestination.jsx';

import LoginPage from './LoginPage/LoginPage';
import AdminDashboard from './Admin/AdminDashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState(null);

    const [userRole, setUserRole] = useState(null); // Track user role

    const summerDestinationsRef = useRef(null); // Create a ref for the SummerDestinations component

    useEffect(() => {
        // Load login status and role from localStorage
        const savedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
        const savedUserRole = localStorage.getItem('userRole');
        setIsLoggedIn(savedLoginStatus);
        setUserRole(savedUserRole);
    }, []);

    const handleLogin = (role) => {
        setIsLoggedIn(true);
        setUserRole(role);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserRole(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userRole');
        localStorage.removeItem('username');
    };
    
    const handleCardClick = (destination) => {
        setSelectedDestination(destination);
    };

    const handleCloseModal = () => {
        setSelectedDestination(null);
    };

    const scrollToSummerDestinations = () => {
        // Scroll to the SummerDestinations component
        if (summerDestinationsRef.current) {
            summerDestinationsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const destinations = [
        {
            title: 'UAE',
            image: uaeImage,
            description: 'Explore the luxurious experiences and iconic landmarks in the UAE, from Dubai’s skyscrapers to Abu Dhabi’s heritage.',
            listItems: [
                { id: 1, name: 'Dubai', make: 2024 },
                { id: 2, name: 'Abu Dhabi', make: 2023 },
                { id: 3, name: 'Sharjah', make: 2022 }
            ]
        },
        {
            title: 'TURKEY',
            image: turkeyImage,
            description: 'Dive into the rich history and vibrant culture of Turkey, with stunning landscapes from Istanbul to Cappadocia.',
            listItems: [
                { id: 4, name: 'Istanbul', make: 2024 },
                { id: 5, name: 'Ankara', make: 2023 },
                { id: 6, name: 'Izmir', make: 2022 }
            ]
        },
        {
            title: 'SAUDI',
            image: saudiImage,
            description: 'The heat, the exploration, the rich culture, heritage and deserts.',
            listItems: [
                { id: 7, name: 'Riyadh', make: 2024 },
                { id: 8, name: 'Jeddah', make: 2023 },
                { id: 9, name: 'Medina', make: 2022 }
            ]
        },
        {
            title: 'CANADA',
            image: canadaImage,
            description: 'Experience the breathtaking natural beauty of Canada.',
            listItems: [
                { id: 10, name: 'Toronto', make: 2024 },
                { id: 11, name: 'Vancouver', make: 2023 },
                { id: 12, name: 'Montreal', make: 2022 }
            ]
        }
    ];

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />
            {isLoggedIn ? (
                <>
                    {userRole === 'admin' ? (
                        <AdminDashboard />
                    ) : (
                        <>
                            <HomePage onExplore={scrollToSummerDestinations} />
                            <Description />
                            <div className="card-container">
                                {destinations.map(dest => (
                                    <Card
                                        key={dest.title}
                                        title={dest.title}
                                        image={dest.image}
                                        listItems={dest.listItems}
                                        description={dest.description}
                                        onClick={() => handleCardClick(dest)} />
                                ))}
                            </div>
                            <div ref={summerDestinationsRef}>
                                <SummerDestinations onClick={handleCardClick} />
                            </div>
                            <WinterDestinations onClick={handleCardClick} />
                            <Footer />
                        </>
                    )}
                    
                    {selectedDestination && (
                        <Modal destination={selectedDestination} onClose={handleCloseModal} />
                    )}
                </>
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
