import BooksPage from "@/components/allBooks/BooksPage";
import { Suspense } from "react";


export default function Page() {
    return (
        <Suspense fallback={<p>Loading books...</p>}>
            <BooksPage />
        </Suspense>
    );
}