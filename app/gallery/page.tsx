"use client";
import React, { useState } from "react";
import Image from "next/image";
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpeg";
import gallery8 from "../assets/gallery/gallery8.jpeg";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    title: "Championship Victory",
    category: "Matches",
  },
  {
    id: 2,
    src: gallery2,
    title: "Training Session",
    category: "Training",
  },
  {
    id: 3,
    src: gallery3,
    title: "Team Celebration",
    category: "Events",
  },
  {
    id: 4,
    src: gallery4,
    title: "Skill Development",
    category: "Training",
  },
  {
    id: 5,
    src: gallery5,
    title: "Tournament Final",
    category: "Matches",
  },
  {
    id: 6,
    src: gallery6,
    title: "Award Ceremony",
    category: "Events",
  },
  {
    id: 7,
    src: gallery7,
    title: "Goalkeeper Training",
    category: "Training",
  },
  {
    id: 8,
    src: gallery8,
    title: "Team Photo",
    category: "Events",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  const openModal = (index: any) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive the best moments from our matches, training sessions, and
            special events
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <div className="relative h-125 md:h-150">
            <Image
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-green-600 rounded-full text-sm mb-3">
                  {filteredImages[currentIndex].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {filteredImages[currentIndex].title}
                </h3>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
              {filteredImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition duration-300 ${
                    idx === currentIndex ? "bg-green-600 w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {filteredImages.slice(0, 4).map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openModal(idx)}
              className="relative h-32 cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-green-600 transition"
          >
            <X size={40} />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 text-white hover:text-green-600 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
              <h3 className="text-xl font-semibold">
                {filteredImages[currentIndex].title}
              </h3>
              <p className="text-gray-300">
                {filteredImages[currentIndex].category}
              </p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 text-white hover:text-green-600 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
