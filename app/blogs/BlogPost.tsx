'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { blogPosts } from './BlogData';
import BlogCard from './BlogCard';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to top of blog section
      document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate page numbers with ellipsis for many pages
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-50">
          <Image 
            src="/services.jpg"
            alt="Blogs"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Blogs
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Grid */}
          <div id="blog-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* No Posts Message */}
          {currentPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found.</p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Page Info */}
              <div className="text-sm text-gray-600">
              </div>

              {/* Pagination Buttons */}
              <div className="flex items-center space-x-2">
                {/* Left Arrow */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full border transition-all duration-200 ${
                    currentPage === 1 
                      ? 'text-gray-300 cursor-pointer border-gray-200' 
                      : 'text-[#246A21] cursor-pointer hover:bg-green-50 border-[#246A21] hover:shadow-md'
                  }`}
                  aria-label="Previous page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                <div className="flex space-x-1">
                  {pageNumbers.map((number, index) => (
                    number === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        key={number}
                        onClick={() => goToPage(number as number)}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer ${
                          currentPage === number
                            ? 'bg-[#246A21] text-white border-[#246A21] shadow-md'
                            : 'text-gray-600 hover:bg-gray-100 border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {number}
                      </button>
                    )
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full border transition-all duration-200 ${
                    currentPage === totalPages
                      ? 'text-gray-300 cursor-pointer border-gray-200'
                      : 'text-[#246A21] cusor-pointer hover:bg-green-50 border-[#246A21] hover:shadow-md'
                  }`}
                  aria-label="Next page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
}