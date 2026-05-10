"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    pathname === path
      ? "text-primary font-semibold border-b-2 border-primary pb-1"
      : "hover:text-primary";

  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between min-h-20">

          <Link href="/" className="text-3xl font-bold text-primary">
            Borrowly
          </Link>

          <nav className="hidden md:flex gap-8 font-medium">
            <Link href="/" className={navLinkClass("/")}>Home</Link>
            <Link href="/books" className={navLinkClass("/books")}>All Books</Link>
            <Link href="/profile" className={navLinkClass("/profile")}>My Profile</Link>
          </nav>

          <div className="flex items-center gap-3">

            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </button>

            {isPending ? (
              <span>Loading...</span>
            ) : session ? (
              <div className="hidden sm:flex items-center gap-3">

                <span className="text-sm text-gray-600 hidden lg:block">
                  Hey, {session?.user?.name?.split(" ")[0]}
                </span>

                <Link href="/profile">
                  <Image
                    src={session?.user?.image || "/default-avatar.png"}
                    alt="user"
                    width={36}
                    height={36}
                    className="rounded-full border"
                  />
                </Link>

                <button
                  onClick={() => signOut()}
                  className="btn btn-primary btn-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t py-4 flex flex-col gap-3">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/books" onClick={() => setMenuOpen(false)}>
              All Books
            </Link>

            <Link href="/profile" onClick={() => setMenuOpen(false)}>
              My Profile
            </Link>

            {session ? (
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="text-left text-red-500"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;