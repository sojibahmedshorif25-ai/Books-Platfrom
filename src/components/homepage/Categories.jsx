"use client";

import { useRouter } from "next/navigation";
import { CiLaptop } from "react-icons/ci";
import { FaBook, FaHeadSideVirus } from "react-icons/fa";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { MdOutlineScience } from "react-icons/md";

const categories = [
    { name: "Story", icon: <FaBook /> },
    { name: "Tech", icon: <CiLaptop /> },
    { name: "Science", icon: <MdOutlineScience /> },
    { name: "History", icon: <LiaTachometerAltSolid /> },
    { name: "Self-Development", icon: <FaHeadSideVirus /> },
];

const Categories = () => {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
                Browse by Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        onClick={() =>
                            router.push(`/books?category=${category.name}`)
                        }
                        className="p-6 bg-base-200 rounded-lg text-center hover:shadow-md transition cursor-pointer"
                    >
                        <div className="text-4xl mb-3 text-primary flex justify-center">
                            {category.icon}
                        </div>
                        <p className="font-medium">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;  