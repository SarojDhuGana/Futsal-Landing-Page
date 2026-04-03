import React from "react";
import Image from "next/image";
import Programs from "@/components/page/Programs";
import homeImage from "../assets/home.jpg";
export default function HomePage() {
  return (
    <>
      <section className="h-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-6 md:px-20 items-center bg-gray-200 shadow-lg">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Empowering Champions with Our Futsal Academy
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl">
            Join a community where skill, speed, and teamwork come together to
            shape the football stars of tomorrow. Whether you’re starting out or
            looking to sharpen your game, we’re here to guide you every step.
          </p>
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-300 w-max"
            aria-label="Get in touch with our academy"
          >
            Get in Touch
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src={homeImage}
            alt="Futsal team celebrating victory"
            width={600}
            height={333}
            className="rounded-tl-full rounded-br-full shadow-xl shadow-green-300  object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
}
