const IncrementButton = ({addOne}) => {
    return (
        <button
            onClick={addOne}
            className="increment-button"
        >
            +
        </button>
    );
};

export default IncrementButton;