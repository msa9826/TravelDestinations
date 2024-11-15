import React from 'react';
import Card from '../../Card/Card.jsx';
import uaeImage from '../../../assets/uae.jpg'; // Make sure to import necessary images
import turkeyImage from '../../../assets/turkey.jpg';

const summerDestinations = [
    {
        title: 'UAE',
        image: uaeImage,
        description: 'Explore the luxurious experiences and iconic landmarks in the UAE.',
        listItems: [
            { id: 1, name: 'Dubai', make: 2024 },
            { id: 2, name: 'Abu Dhabi', make: 2023 },
            { id: 3, name: 'Sharjah', make: 2022 },
        ],
    },
    {
        title: 'TURKEY',
        image: turkeyImage,
        description: 'Dive into the rich history and vibrant culture of Turkey.',
        listItems: [
            { id: 4, name: 'Istanbul', make: 2024 },
            { id: 5, name: 'Ankara', make: 2023 },
            { id: 6, name: 'Izmir', make: 2022 },
        ],
    },
];

function SummerDestinations({ onClick }) {
    return (
        <div className="description-container">
            <h2 className="description-title">Summer Destinations</h2>
            <div className="card-container">
                {summerDestinations.map(dest => (
                    <Card
                        key={dest.title}
                        title={dest.title}
                        image={dest.image}
                        description={dest.description}
                        listItems={dest.listItems}
                        onClick={() => onClick(dest)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SummerDestinations;
