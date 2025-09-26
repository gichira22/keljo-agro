import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from './BlogData';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 sm:h-40 md:h-48 lg:h-56 xl:h-48">
        <img
          src={post.imageUrl}
          alt={post.title}
          
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          {/* <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full w-fit">
            {post.category}
          </span> */}
          <span className="text-gray-500 text-xs sm:text-sm">
            {post.date} • {post.readTime}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        
        {/* Read More Link */}
        <Link 
          href={`/blogs/${post.id}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-all duration-200 group/link mt-auto w-fit"
        >
          <span className="text-sm sm:text-base">Read More</span>
          <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}