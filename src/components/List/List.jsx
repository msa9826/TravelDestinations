import PropTypes from 'prop-types';
import './List.css'; // Ensure you have a CSS file for styling

function List(props) {
    // Sort list items by 'make' property
    const sortedItems = props.pass.sort((a, b) => a.make - b.make);

    // Create list items
    const listItems = sortedItems.map(item => (
        <li className="item-style" key={item.id}>
            {item.name} - {item.make}
        </li>
    ));

    // Conditional rendering
    return (
        <>
            {listItems.length > 0 && (
                <>
                    <h1 className="list-title-style">{props.title}</h1>
                    <ul>{listItems}</ul>
                </>
            )}
        </>
    );
}

List.propTypes = {
    title: PropTypes.string,
    pass: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            make: PropTypes.number.isRequired,
        })
    ).isRequired,
};

List.defaultProps = {
    title: "Empty",
    pass: [],
};

export default List;
