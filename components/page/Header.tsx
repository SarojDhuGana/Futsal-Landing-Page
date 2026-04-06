"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "/about" },
  { id: 3, title: "Gallery", href: "/gallery" },
  { id: 4, title: "Blogs", href: "/blogs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-green-600">⚽Kicksy⚽</h1>
        <nav className="hidden md:flex items-center gap-8">
          {headerItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`capitalize transition ${
                pathname === item.href
                  ? "text-green-400 font-semibold"
                  : "text-gray-800 hover:text-green-400"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Get in touch
        </Link>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-6 pb-6">
          <nav className="flex flex-col gap-4 mt-4">
            {headerItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`capitalize transition ${
                  pathname === item.href
                    ? "text-green-400 font-semibold"
                    : "text-gray-800 hover:text-green-400"
                }`}
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-xl text-center hover:bg-green-700 transition"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
