import PropTypes from 'prop-types';
import List from '../List/List';
import './Card.css';

function Card(props) {
    return (
        <div className="card" onClick={props.onClick}>
            <img className="card-img" alt={props.title} src={props.image} />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.description}</p>
            <h3 className="card-city-title">Top Places</h3> {/* New "City" title */}
            <ul className="card-list">
                {props.listItems.map(item => (
                    <li key={item.id}>{item.name}</li> // Display only the city name
                ))}
            </ul>
        </div>
    );
}



Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            make: PropTypes.number.isRequired,
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
};  

export default Card;
