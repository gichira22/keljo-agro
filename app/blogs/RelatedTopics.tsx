import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from './BlogData';

interface RelatedTopicsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxItems?: number;
}

export default function RelatedTopics({ currentPost, allPosts, maxItems = 4 }: RelatedTopicsProps) {
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, maxItems);

  if (relatedPosts.length < maxItems) {
    const additionalPosts = allPosts
      .filter(post => post.id !== currentPost.id && !relatedPosts.some(related => related.id === post.id))
      .slice(0, maxItems - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  if (relatedPosts.length === 0) {
    return (
      <section className="bg-gray-50 rounded-xl px-4 sm:px-6 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Explore More Topics</h2>
        <div className="text-center">
          <Link href="/blogs" className="text-green-600 hover:text-green-700 font-medium">
            Browse All Articles →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 rounded-xl px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-full mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Related Topics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {relatedPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blogs/${post.id}`}
              className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-green-200 overflow-hidden"
            >
              {/* Image */}
              {/* <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div> */}
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2">
                </span>
                
                <h3 className="font-semibold text-black group-hover:text-green-600 transition-colors line-clamp-2 mb-2 text-sm sm:text-base">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                
              </div>
            </Link>
          ))}
        </div>
       
      </div>
       {/* View All Link */}
        <div className="mt-10 pt-4 border-t text-center">
           <Link 
            href="/blogs" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
          >
            View All Articles
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
    </section>
    
  );
}