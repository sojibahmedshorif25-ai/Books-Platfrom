"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import booksData from "@/data/books.json";
import BookCard from "@/components/shared/BookCard";

const categories = ["All", "Story", "Tech", "Science", "History", "Self-Development"];

const BooksPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const categoryFromURL = searchParams.get("category");
        if (categoryFromURL && categories.includes(categoryFromURL)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSelectedCategory(categoryFromURL);
        } else {
            setSelectedCategory("All");
        }
    }, [searchParams]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        const params = new URLSearchParams(searchParams.toString());
        if (cat === "All") {
            params.delete("category");
        } else {
            params.set("category", cat);
        }
        router.push(`/books?${params.toString()}`, { scroll: false });
    };

    const filteredBooks = booksData.filter((book) => {
        const matchCategory =
            selectedCategory === "All" || book.category === selectedCategory;

        const matchSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="mb-8 text-center">
                <input
                    type="text"
                    placeholder="Search books by title or author..."
                    className="input input-bordered w-full max-w-2xl text-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <aside className="lg:w-1/4">
                    <h2 className="text-xl font-bold mb-4">Categories</h2>

                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2">
                        {categories.map((cat) => {
                            const active = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-lg border text-sm transition ${active
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white hover:bg-gray-100"
                                        }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <main className="lg:w-3/4">
                    <h2 className="font-bold text-3xl mb-6">
                        {selectedCategory === "All"
                            ? "All Books"
                            : `${selectedCategory} Books`}
                    </h2>

                    {filteredBooks.length === 0 ? (
                        <p className="text-gray-500">No books found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BooksPage;