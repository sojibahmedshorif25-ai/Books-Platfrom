"use client";

import { useState } from "react";

const BorrowModal = ({ book }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        returnDate: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Borrowed Book:", book.title);
        console.log("User Data:", formData);

        document.getElementById("borrow_modal").close();
        alert("Book borrowed successfully!");
    };

    return (
        <dialog id="borrow_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">
                    Borrow: {book.title}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-3">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name="returnDate"
                        className="input input-bordered w-full"
                        required
                        onChange={handleChange}
                    />

                    <button className="btn btn-primary w-full">
                        Confirm Borrow
                    </button>
                </form>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default BorrowModal;