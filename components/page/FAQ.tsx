"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HelpIcon from "@mui/icons-material/Help";

import gallery9 from "@/app/assets/gallery/gallery9.jpeg";

const faqData = [
  {
    id: 1,
    question: "What is the minimum age to join the futsal academy?",
    answer:
      "Our academy welcomes players aged 6 and above. We have specialized programs for different age groups: Kids (6-10), Youth (11-14), Junior (15-18), and Adult (19+). Each program is tailored to the specific developmental needs of the age group.",
    category: "General",
  },
  {
    id: 2,
    question: "Do I need prior futsal experience to enroll?",
    answer:
      "Not at all! We have programs for all skill levels - from complete beginners to advanced players. Our coaches assess each player's current level and place them in the appropriate training group to ensure optimal learning and development.",
    category: "General",
  },
  {
    id: 3,
    question: "What equipment do I need for training?",
    answer:
      "Essential equipment includes: futsal-specific shoes (flat sole, gum rubber), shin guards, comfortable athletic wear, a water bottle, and a positive attitude! We provide training balls and other equipment. New students receive a welcome kit with an academy jersey.",
    category: "Equipment",
  },
  {
    id: 4,
    question: "How often are training sessions held?",
    answer:
      "We offer flexible schedules: Beginners train twice per week (Tuesday & Thursday), Intermediate players train three times per week (Monday, Wednesday, Friday), and Advanced/Competitive players train four times per week plus weekend matches. Each session lasts 90 minutes.",
    category: "Training",
  },
  {
    id: 5,
    question: "Do you participate in tournaments?",
    answer:
      "Yes! Our competitive teams participate in local, regional, and national tournaments throughout the year. We have tournament teams for U-12, U-15, U-18, and Adult categories. Selection is based on skill, commitment, and teamwork.",
    category: "Competition",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-linear-to-b from-gray-50 to-white">
      <div className="space-y-2">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <HelpIcon fontSize="medium" />
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our academy, training
            programs, and facilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-2 px-3 gap-5">
          <div className=" flex justify-center items-center py-1 ">
            <Image
              src={gallery9}
              alt="faqImag"
              width={500}
              height={459}
              className="rounded-b-full rounded-tr-full shadow-amber-200 shadow-2xl animate-in"
            />
          </div>
          <div className="space-y-4">
            {faqData.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                <HelpIcon
                  fontSize="medium"
                  className="mx-auto text-gray-400 mb-3"
                />
                <p className="text-gray-500">
                  No questions found matching your search.
                </p>
              </div>
            ) : (
              faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:shadow-green-300 hover:shadow-2xl transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-green-50 bg-emerald-400 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="shrink-0">
                      {openItems.includes(faq.id) ? (
                        <ArrowDownwardIcon
                          className="text-emerald-600"
                          fontSize="medium"
                        />
                      ) : (
                        <ArrowUpwardIcon
                          className="text-gray-400 hover:text-emerald-600"
                          fontSize="medium"
                        />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(faq.id) ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-2 pb-4 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          <span className="text-2xl animate-spin text-green-400">
                            ⚽
                          </span>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="mt-12 w-full text-center bg-linear-to-r from-emerald-100 to-teal-300 rounded-tr-full rounded-bl-full p-10 z-10">
          <h3 className="text-4xl font-bold text-gray-800 mb-2 z-10">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please contact our support
            team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md">
              Contact Support
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
