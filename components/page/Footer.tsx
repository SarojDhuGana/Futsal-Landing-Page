import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="bg-cover bg-center text-white relative bg-black">
      <div className="absolute inset-0 bg-green-900 opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 gap-y-6">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⚽ Kicksy Futsal ⚽
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Fun, Sport, Fitness & Entertainment - Your local futsal hub!
          </p>
          <p className="text-gray-400 text-xs md:text-sm">
            Join us for exciting futsal matches, tournaments and events in a fun
            and safe environment.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 hover:text-gray-200 transition-colors">
            Follow Us
          </h2>
          <div className="flex gap-5">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon className="hover:text-gray-200 text-4xl transition-transform transform hover:scale-110" />
            </Link>
            <Link
              href="https://wa.me/your-number"
              target="_blank"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="hover:text-gray-200 text-4xl transition-transform transform hover:scale-110" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="hover:text-gray-200 text-4xl transition-transform transform hover:scale-110" />
            </Link>
          </div>
          <p className="text-gray-400 text-xs mt-4">
            Stay connected and never miss an update!
          </p>
        </div>
      </div>

      <div className="bg-white border-t border-gray-50 text-center py-3 text-gray-900 text-base">
        © {new Date().getFullYear()} Kicksy Futsal. All rights reserved.
      </div>
    </footer>
  );
}
