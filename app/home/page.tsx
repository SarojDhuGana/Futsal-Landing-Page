import React from "react";
import Link from "next/link";
import Image from "next/image";
import homeImage from "../assets/blog3.jpg";
import FAQ from "@/components/page/FAQ";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function HomePage() {
  return (
    <>
      <section className="h-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-6 md:px-20 items-center bg-gray-200 shadow-lg">
        <div className="flex flex-col justify-center space-y-4">
          <div className=" text-green-400 px-3 py-3 border-2 border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 w-max">
            <Link
              href="https://wa.me/your-number"
              target="_blank"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon fontSize="large" />
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Empowering Champions with Our Futsal Academy
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl">
            Join a community where skill, speed, and teamwork come together to
            shape the football stars of tomorrow. Whether you’re starting out or
            looking to sharpen your game, we’re here to guide you every step.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={homeImage}
            alt="Futsal team celebrating victory"
            width={600}
            height={333}
            className="rounded-bl-full rounded-tr-full shadow-xl shadow-green-300 object-cover"
            priority
          />
        </div>
      </section>

      {/* FAQ Sections */}
      <main>
        <FAQ />
      </main>
    </>
  );
}
