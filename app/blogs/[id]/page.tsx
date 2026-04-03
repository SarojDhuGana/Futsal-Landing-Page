"use client";

import { useParams } from "next/navigation";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import { blogPosts } from "../page";
import Link from "next/link";
export default function BlogDetailsPage() {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <Link href="/blogs" className="text-green-600 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          {blog.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-500 mb-4 flex gap-2">
          <User size={15} />
          <span className="font-semibold text-green-600 text-md -mt-1">
            {blog.author}
          </span>
        </p>
        <div className="relative w-full h-105 mb-10 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <p className="text-xl text-gray-600 italic border-l-4 border-green-500 pl-6 mb-10">
          {blog.excerpt}
        </p>

        <article className="prose prose-lg max-w-none prose-headings:text-gray-600 prose-p:text-gray-600">
          <div className="whitespace-pre-line">{blog.content}</div>
        </article>
      </div>
    </section>
  );
}
