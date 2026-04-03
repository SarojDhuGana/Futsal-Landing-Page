"use client";
import React, { useState } from "react";
import Link from "next/link";
const headerItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "/about" },
  { id: 3, title: "Gallery", href: "/gallery" },
  { id: 4, title: "Blogs", href: "/blogs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-green-600">⚽Kicksy⚽</h1>
        <nav className="flex items-center gap-8">
          {headerItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-gray-700 font-normal hover:text-green-600 transition-colors duration-200 capitalize"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
          Get in touch
        </button>
      </div>
    </header>
  );
}
