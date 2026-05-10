"use client";

import books from "@/data/books.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookCard from "../shared/BookCard";

const FeaturedBooksSlider = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Featured Books
            </h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {books.slice(0, 6).map((book) => (
                    <SwiperSlide key={book.id}>
                        <BookCard key={book.id} book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedBooksSlider;