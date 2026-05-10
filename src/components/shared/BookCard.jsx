import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition duration-300">

      <figure className="relative w-full h-60">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1024px) 50vw,
                 25vw"
          className="object-cover rounded-t-lg"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>

        <p className="text-sm text-gray-500">
          {book.author}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-outline">
            {book.category}
          </span>

          <span className="text-yellow-500 font-semibold flex justify-center items-center gap-1">
            <FaStar /> {book.rating}
          </span>
        </div>

        <div className="card-actions mt-4">
          <Link
            href={`/books/${book.id}`}
            className="btn btn-primary btn-sm w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;