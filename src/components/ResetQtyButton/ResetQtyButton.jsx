// Reset button for quantity input field
import './ResetQtyButton.css';

// Implement the reset button as a component

const ResetQtyButton = ({reset}) => {
    return (
        <button
            onClick={reset}
            className="add-to-cart-button"
        >
            Reset
        </button>
    );
};

export default ResetQtyButton;