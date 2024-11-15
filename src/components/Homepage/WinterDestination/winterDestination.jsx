import React from 'react';
import Card from '../../Card/Card.jsx';
import canadaImage from '../../../assets/canada.jpg';
import saudiImage from '../../../assets/saudi.jpg';

const winterDestinations = [
    {
        title: 'CANADA',
        image: canadaImage,
        description: 'Experience the breathtaking natural beauty of Canada.',
        listItems: [
            { id: 10, name: 'Toronto', make: 2024 },
            { id: 11, name: 'Vancouver', make: 2023 },
            { id: 12, name: 'Montreal', make: 2022 },
        ],
    },
];

function WinterDestinations({ onClick }) {
    return (
        <div className="description-container">
            <h2 className="description-title">Feeling Cold?</h2>
            <div className="card-container">
                {winterDestinations.map(dest => (
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

export default WinterDestinations;
