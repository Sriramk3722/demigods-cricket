"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/90 px-6 py-4 backdrop-blur-sm">
      <Link href="/" className="text-xl font-bold text-orange-500">
        🏏 DCC
      </Link>

      <div className="flex items-center gap-6 text-sm text-gray-300">
        <Link href="/" className="hover:text-orange-400">Home</Link>
        <Link href="/about" className="hover:text-orange-400">About</Link>
        <Link href="/programs" className="hover:text-orange-400">Programs</Link>
        <Link href="/faq" className="hover:text-orange-400">FAQ</Link>
      </div>

      <div className="flex items-center gap-4">
        {session ? (
          <div className="flex items-center gap-3">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="h-8 w-8 rounded-full border border-orange-500"
              />
            )}
            <button
              onClick={() => signOut()}
              className="rounded-lg bg-red-600/80 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
}