import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog5.jpg";
import Blog3 from "../assets/blog3.jpg";
import Blog4 from "../assets/blog4.jpg";
import { User, ArrowRight } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "5 Essential Futsal Skills Every Player Should Master",
    excerpt:
      "Discover the key techniques that separate good players from great ones on the futsal court",
    author: "Coach Miguel Rodriguez",
    category: "Training Tips",
    image: Blog1,
    content: `
Futsal is a fast-paced game that demands technical precision and quick decision-making.
Every player should focus on mastering these essential skills:

1. Ball Control – Keep the ball close using the sole of your foot.
2. Quick Passing – Short and accurate passes help maintain possession.
3. Movement Off the Ball – Always create passing options.
4. Defensive Positioning – Anticipate your opponent’s moves.
5. Shooting Accuracy – Placement matters more than power.

Practice these consistently to elevate your performance on the court.
    `,
  },
  {
    id: 2,
    title: "How to Prepare for Your First Futsal Tournament",
    excerpt:
      "From physical preparation to mental strategies, here's everything you need to know before your first competition",
    author: "Sarah Johnson",
    category: "Competition",
    image: Blog2,
    content: `
Preparing for your first futsal tournament can be exciting and challenging.

Physical Preparation:
- Improve stamina with interval training.
- Practice match simulations.

Mental Preparation:
- Visualize success.
- Stay calm under pressure.

Team Preparation:
- Understand team tactics.
- Communicate clearly with teammates.

Arrive early, stay hydrated, and enjoy the experience!
    `,
  },
  {
    id: 3,
    title: "The Importance of Team Chemistry in Futsal",
    excerpt:
      "Learn why communication and trust are just as important as technical skills in futsal",
    author: "David Chen",
    category: "Team Building",
    image: Blog3,
    content: `
Team chemistry is the backbone of successful futsal teams.

Key elements include:
- Communication on and off the court.
- Trust between teammates.
- Understanding player roles.

Teams that move and think as one unit often outperform more skilled individuals.
Build relationships through training, discussions, and shared goals.
    `,
  },
  {
    id: 4,
    title: "Nutrition Guide for Young Futsal Players",
    excerpt:
      "What to eat before and after training to maximize performance and recovery",
    author: "Dr. Emily White",
    category: "Health & Nutrition",
    image: Blog4,
    content: `
Nutrition plays a vital role in performance and recovery.

Before Training:
- Eat carbohydrates like rice, fruits, or whole grains.
- Stay hydrated.

After Training:
- Consume protein for muscle recovery.
- Include vegetables and healthy fats.

Avoid sugary drinks and focus on balanced meals to maintain energy levels.
    `,
  },
];

export default function BlogsPage() {
  return (
    <section
      className="py-16 px-6 md:px-20 bg-white"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            id="blog-heading"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Latest from Our Blog
          </h1>
          <div
            className="w-24 h-1 bg-green-600 mx-auto mb-6"
            aria-hidden="true"
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, training tips, and academy news to keep you
            inspired
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col grow py-2 px-3">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
                  <div className="flex items-start gap-1">
                    <User size={14} aria-hidden="true" className="mt-1" />
                    <span className="text-md text-center">{post.author}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="hover:no-underline focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-green-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded px-2 py-1"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
