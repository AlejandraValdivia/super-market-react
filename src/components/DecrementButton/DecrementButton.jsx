import './DecrementButton.css';
const DecrementButton = ({removeOne}) => {
    return (
        <button
            onClick={removeOne}
            className="increment-button"
        >
            -
        </button>
    );
};

export default DecrementButton;