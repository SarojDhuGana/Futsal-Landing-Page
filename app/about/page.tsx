import React from "react";
import Image from "next/image";
import gallery9 from "../assets/gallery/gallery9.jpeg";
import Programs from "@/components/page/Programs";
import Diversity1Icon from "@mui/icons-material/Diversity1";
export default function AboutPage() {
  const achievements = [
    {
      value: "500+",
      label: "Active Players",
    },
    {
      value: "15+",
      label: "Pro Coaches",
    },
    {
      value: "20+",
      label: "Tournaments Won",
    },
    {
      value: "1000+",
      label: "Happy Alumni",
    },
  ];
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div>
            <Diversity1Icon
              className="text-green-500 font-bold"
              fontSize="large"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Academy
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2018, our futsal academy has been dedicated to
              developing young talents and nurturing a passion for the beautiful
              game. With state-of-the-art facilities and experienced coaches, we
              provide the perfect environment for players to grow and excel.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 px-2 border-green-300 flex">
              Our methodology combines technical skill development, tactical
              awareness, and physical conditioning, all while fostering
              teamwork, discipline, and sportsmanship. We believe every player
              has unique potential waiting to be unlocked.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achive) => (
                <div
                  key={achive.value}
                  className="text-center p-6 bg-gray-200 rounded-lg"
                >
                  <div className="text-3xl font-bold text-green-600">
                    {achive.value}
                  </div>
                  <div className="text-gray-600">{achive.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full rounded-2xl overflow-hidden shadow-xl px-2 py-2">
            <Image
              src={gallery9}
              alt="Our futsal team in action"
              fill
              className="object-cover rounded-br-full rounded-t-full shadow-amber-200 shadow-2xl "
              priority
            />
          </div>
        </div>
        <div className="mt-10 px-10 py-5 bg-green-100 rounded-br-full rounded-tl-full bordet-t-red-200 ">
          <div className="animate-pulse">⚽</div>
          <Programs /> <div className="animate-pulse">⚽</div>
        </div>
      </div>
    </section>
  );
}
