import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from './BlogData';
import { notFound } from 'next/navigation';
import RelatedTopics from './RelatedTopics';

interface SingleBlogProps {
  params: {
    id: string;
  };
}

// Function to generate discussion questions based on post content
function generateDiscussionQuestions(post: any) {
  const questionsMap: { [key: string]: string[] } = {
    'Farming Practices': [
      'What innovative farming techniques are you most excited about this year?',
      'How do you currently implement crop rotation in your farming practices?',
      'What challenges have you faced with traditional farming methods?'
    ],
    'Technology': [
      'What advancements in agricultural technology are you most eager to see this year?',
      'How has precision farming improved your operational efficiency?',
      'What tech tools have made the biggest impact on your farm?'
    ],
    'Sustainability': [
      'Are there any new sustainable practices you\'re implementing?',
      'How do you balance productivity with environmental conservation?',
      'What sustainable methods have yielded the best results for you?'
    ],
    'Innovation': [
      'What emerging agricultural innovations are you keeping an eye on?',
      'How do you stay updated with the latest farming innovations?',
      'What innovative approach has transformed your farming operation?'
    ]
  };

  return questionsMap[post.category] || [
    'What are your thoughts on modern agriculture trends?',
    'How are you adapting to changes in the agricultural landscape?',
    'What practices have been most beneficial for your farm recently?'
  ];
}

export default function SingleBlog({ params }: SingleBlogProps) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Find next and previous posts for navigation
  const currentIndex = blogPosts.findIndex(p => p.id === params.id);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Generate discussion questions
  const discussionQuestions = generateDiscussionQuestions(post);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Main container*/}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Navigation Breadcrumb */}
        {/* <nav className="mb-6 md:mb-8">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-[#246A21] hover:text-green-700 font-medium transition-colors duration-200 text-sm md:text-base"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </nav> */}

        {/* Main Article Content */}
        <div>
          <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-64 sm:h-80 md:h-96 ">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Article Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <span className="text-[#246A21] text-sm font-medium px-3 py-1 rounded-full w-fit">
                  {/* {post.category} */}
                </span>
                <span className="text-gray-500 text-sm">
                  {post.date} • {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gray-200 border-2 overflow-hidden flex-shrink-0">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">{post.author.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Agricultural Specialist</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="space-y-4 text-gray-700">
                  
                  {post.category === 'Farming Practices' && (
                    <>
                      <p>Crop rotation is a fundamental practice that has been proven to enhance soil fertility and increase crop yields. By strategically alternating crops in a specific sequence, farmers can break pest cycles, improve soil structure, and optimize nutrient utilization.</p>
                      
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">Key Benefits of Crop Rotation</h2>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Natural pest and disease control</li>
                        <li>Improved soil nutrient management</li>
                        <li>Enhanced soil structure and water retention</li>
                        <li>Increased biodiversity and ecosystem health</li>
                      </ul>
                    </>
                  )}
                  
                  {post.category === 'Technology' && (
                    <>
                      <p>Precision farming technologies are revolutionizing agriculture by enabling data-driven decisions and optimized resource allocation. These tools help farmers maximize efficiency while minimizing environmental impact.</p>
                      
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Precision Farming Tools</h2>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>GPS-guided equipment for precise operations</li>
                        <li>Soil sensors for real-time monitoring</li>
                        <li>Drones for aerial imaging and analysis</li>
                        <li>Automated irrigation systems</li>
                      </ul>
                    </>
                  )}

                  {post.category === 'Sustainability' && (
                    <>
                      <p>Sustainable farming practices are essential for long-term agricultural success and environmental conservation. By adopting eco-friendly methods, farmers can maintain productivity while preserving natural resources for future generations.</p>
                      
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">Sustainable Practices to Implement</h2>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Water conservation techniques</li>
                        <li>Organic pest management</li>
                        <li>Soil conservation methods</li>
                        <li>Renewable energy integration</li>
                      </ul>
                    </>
                  )}

                  {post.category === 'Innovation' && (
                    <>
                      <p>Agricultural innovation is driving unprecedented changes in how we grow, harvest, and distribute food. Emerging technologies and creative approaches are solving age-old farming challenges.</p>
                      
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">Innovative Approaches</h2>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Smart farming IoT solutions</li>
                        <li>Vertical farming systems</li>
                        <li>Biotechnology advancements</li>
                        <li>Data analytics for crop optimization</li>
                      </ul>
                    </>
                  )}
                  
                  <p>Implementing these strategies can significantly enhance your agricultural operations and contribute to long-term success in modern farming practices.</p>
                </div>
              </div>

              {/* Discussion Section */}
              <div className="mt-8 p-6 bg-white rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Join the Discussion</h3>
                <p className="text-gray-700 mb-4">We'd love to hear your thoughts and experiences:</p>
                <ul className="space-y-2">
                  {discussionQuestions.map((question, index) => (
                    <li key={index} className="text-gray-600 text-sm">• {question}</li>
                  ))}
                </ul>
              </div>
            </div>
          

          {/* Next/Previous Post Navigation */}
          {(prevPost || nextPost) && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
              {prevPost && (
                <Link 
                  href={`/blogs/${prevPost.id}`}
                  className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center text-[#246A21] mb-2 text-sm font-bold  hover:text-green-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous Article
                  </div>
                </Link>
              )}

              {nextPost && (
                <Link 
                  href={`/blogs/${nextPost.id}`}
                  className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-right"
                >
                  <div className="flex items-center justify-end text-[#246A21] mb-2 text-sm  font-bold hover:text-green-600">
                    Next Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )}
            </div>
          )}
          </article>
        </div>
        
        {/* Related Topics Section*/}
        <section className="mt-4">
          <RelatedTopics currentPost={post} allPosts={blogPosts} />
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: SingleBlogProps) {
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found - Keljo Agro Blog',
    };
  }

  return {
    title: `${post.title} | Keljo Agro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}