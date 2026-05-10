const features = [
    {
        title: " Huge Collection",
        desc: "Explore thousands of books across multiple categories.",
    },
    {
        title: " Fast & Easy",
        desc: "Borrow books instantly with a smooth experience.",
    },
    {
        title: " Secure",
        desc: "Your data is safe with modern authentication.",
    },
    {
        title: " Responsive",
        desc: "Use on mobile, tablet, or desktop seamlessly.",
    },
];

const WhyChooseUs = () => {
    return (
        <div className="bg-base-200 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Why Choose Borrowly?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 bg-white rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">
                                {f.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;