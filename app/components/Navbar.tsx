"use client";

import Link from "next/link";

export default function Navbar() {
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
        <Link href="/contact" className="hover:text-orange-400">Contact</Link>
      </div>
    </nav>
  );
}