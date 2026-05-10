"use client";

import Marquee from "react-fast-marquee";

const updates = [
    {
        id: 1,
        text: "📚 New Arrival: Atomic Habits by James Clear",
    },
    {
        id: 2,
        text: "💻 Tech Picks: Clean Code & JavaScript Guide",
    },
    {
        id: 3,
        text: "🔬 Science Reads: Brief History of Time",
    },
    {
        id: 4,
        text: "🔥 Special Offer: 20% Discount on Membership",
    },
];

const MarqueeSection = () => {
    return (
        <div className="container mx-auto flex items-center gap-4  py-3 px-4 m-6 rounded-md">

            {/* Label */}
            <button className="btn bg-primary text-white">
                Updates
            </button>

            {/* Marquee */}
            <Marquee pauseOnHover={true} speed={60} gradient={false}>
                {updates.map((item) => (
                    <span key={item.id} className="mx-6 font-medium text-gray-700">
                        {item.text}
                    </span>
                ))}
            </Marquee>

        </div>
    );
};

export default MarqueeSection;