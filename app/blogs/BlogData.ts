export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Optimize Crop Rotation For Better Yields',
    excerpt: 'Discover innovative farming techniques and crop rotation strategies to maximize your agricultural productivity and soil health.',
    content: `
      <p>Crop rotation is a time-tested agricultural practice that involves growing different types of crops in the same area across different seasons. This technique helps in improving soil health, reducing soil erosion, and increasing crop yield.</p>
      
      <h2>Benefits of Proper Crop Rotation</h2>
      <p>Implementing an effective crop rotation system can lead to numerous benefits for farmers and the environment alike.</p>
      
      <h3>Soil Health Improvement</h3>
      <p>Different crops have varying nutrient requirements and root structures. By rotating crops, you prevent the depletion of specific nutrients from the soil.</p>
      
      <h3>Pest and Disease Management</h3>
      <p>Breaking pest cycles is one of the most significant advantages of crop rotation. Many pests and diseases are crop-specific.</p>
    `,
    imageUrl: '/blogs/crop-rotation.png',
    category: 'Farming Practices',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
    author: {
      name: 'Sarah Johnson',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '2',
    title: 'Invest In Precision Farming Tools For Efficiency',
    excerpt: 'Explore the latest advancements in agricultural technology and precision farming tools that are revolutionizing modern agriculture.',
    content: 'Full content about precision farming...',
    imageUrl: '/blogs/precision-farming.png',
    category: 'Technology',
    date: 'Nov 12, 2024',
    readTime: '7 min read',
    author: {
      name: 'Mike Chen',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '3',
    title: 'Explore Vertical Farming Benefits',
    excerpt: 'Learn about vertical farming advantages and how urban agriculture is shaping the future of sustainable food production.',
    content: 'Full content about vertical farming...',
    imageUrl: '/blogs/vertical-farming.png',
    category: 'Sustainability',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Emma Davis',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '4',
    title: 'Adopt Regenerative Agriculture Practices',
    excerpt: 'Implement new methods for soil health improvement through regenerative agriculture practices that benefit both crops and environment.',
    content: 'Full content about regenerative agriculture...',
    imageUrl: '/blogs/regenerative-ag.png',
    category: 'Sustainability',
    date: 'Nov 8, 2024',
    readTime: '8 min read',
    author: {
      name: 'Dr. James Wilson',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '5',
    title: 'Utilize Hydroponic Systems Effectively',
    excerpt: 'Get insights into urban agriculture trends and learn how to effectively implement hydroponic systems for optimal growth.',
    content: 'Full content about hydroponic systems...',
    imageUrl: '/blogs/hydroponic-systems.png',
    category: 'Technology',
    date: 'Nov 5, 2024',
    readTime: '4 min read',
    author: {
      name: 'Lisa Rodriguez',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '6',
    title: 'Innovative Irrigation Techniques for Water Conservation',
    excerpt: 'Discover cutting-edge irrigation methods that help conserve water while maintaining crop health and productivity.',
    content: 'Full content about irrigation techniques...',
    imageUrl: '/blogs/irrigation-techniques.png',
    category: 'Innovation',
    date: 'Nov 3, 2024',
    readTime: '5 min read',
    author: {
      name: 'Robert Kim',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '7',
    title: 'Sustainable Pest Management Solutions',
    excerpt: 'Explore eco-friendly pest control methods that protect your crops without harming the environment.',
    content: 'Full content about pest management...',
    imageUrl: '/blogs/pest-management.png',
    category: 'Sustainability',
    date: 'Nov 1, 2024',
    readTime: '6 min read',
    author: {
      name: 'Maria Gonzalez',
      avatar: '/reviews.jpg'
    }
  },
  {
    id: '8',
    title: 'Smart Greenhouse Technology Advancements',
    excerpt: 'Learn how smart greenhouse technologies are revolutionizing year-round crop production.',
    content: 'Full content about greenhouse technology...',
    imageUrl: '/blogs/greenhouse-tech.png',
    category: 'Technology',
    date: 'Oct 28, 2024',
    readTime: '7 min read',
    author: {
      name: 'David Thompson',
      avatar: '/reviews.jpg'
    }
  },
   {
    id: '9',
    title: 'Explore Vertical Farming Benefits',
    excerpt: 'Learn about vertical farming advantages and how urban agriculture is shaping the future of sustainable food production.',
    content: 'Full content about vertical farming...',
    imageUrl: '/blogs/vertical-farming.png',
    category: 'Sustainability',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Emma Davis',
      avatar: '/reviews.jpg'
    }
  },
   {
    id: '10',
    title: 'Explore Vertical Farming Benefits',
    excerpt: 'Learn about vertical farming advantages and how urban agriculture is shaping the future of sustainable food production.',
    content: 'Full content about vertical farming...',
    imageUrl: '/blogs/vertical-farming.png',
    category: 'Sustainability',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Emma Davis',
      avatar: '/reviews.jpg'
    }
  },
   {
    id: '11',
    title: 'Explore Vertical Farming Benefits',
    excerpt: 'Learn about vertical farming advantages and how urban agriculture is shaping the future of sustainable food production.',
    content: 'Full content about vertical farming...',
    imageUrl: '/blogs/vertical-farming.png',
    category: 'Sustainability',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Emma Davis',
      avatar: '/reviews.jpg'
    }
  },
   {
    id: '12',
    title: 'Explore Vertical Farming Benefits',
    excerpt: 'Learn about vertical farming advantages and how urban agriculture is shaping the future of sustainable food production.',
    content: 'Full content about vertical farming...',
    imageUrl: '/blogs/vertical-farming.png',
    category: 'Sustainability',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Emma Davis',
      avatar: '/reviews.jpg'
    }
  },
];