"use client";

const BorrowButton = ({ available }) => {
    const handleOpen = () => {
        document.getElementById("borrow_modal").showModal();
    };

    return (
        <button
            className="btn btn-primary"
            disabled={available === 0}
            onClick={handleOpen}
        >
            {available === 0 ? "Not Available" : "Borrow Book"}
        </button>
    );
};

export default BorrowButton;