import Link from "next/link";
import heroBooks from "@/assets/hero-books.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4">

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Borrow Books.<br /> Expand Your World.
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Discover thousands of books anytime, anywhere.
            Explore categories, find your favorites, and start reading today.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/books"
              className="btn btn-primary"
            >
              Browse Now
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative w-full h-62.5 sm:h-87.5 md:h-112.5 lg:h-125">
            <Image
              src={heroBooks}
              alt="Books"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;