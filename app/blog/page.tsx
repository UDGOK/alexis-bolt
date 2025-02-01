import React from 'react';
import BlogList from '../../components/BlogList';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 'revolutionizing-concrete-industry-2025',
    title: 'Revolutionizing the Concrete Industry: Key Innovations from World of Concrete 2025 in Las Vegas',
    excerpt: 'Discover the latest innovations and technologies shaping the future of the concrete industry from the World of Concrete 2025 event in Las Vegas.',
    date: 'February 1, 2025',
  },
  {
    id: 'benefits-of-concrete-driveways',
    title: 'Top 5 Benefits of Concrete Driveways for Tulsa Homeowners',
    excerpt: 'Explore the advantages of choosing concrete driveways for your Tulsa home, from durability to aesthetic appeal.',
    date: 'January 15, 2025',
  },
  {
    id: 'asphalt-vs-concrete',
    title: 'Asphalt vs Concrete: Making the Right Choice for Your Oklahoma Project',
    excerpt: 'An in-depth comparison of asphalt and concrete to help you make an informed decision for your next construction project in Oklahoma.',
    date: 'January 22, 2025',
  },
  {
    id: 'maintaining-your-parking-lot',
    title: 'Essential Tips for Maintaining Commercial Parking Lots in Tulsa',
    excerpt: 'Learn expert strategies to extend the life of your Tulsa commercial parking lot and protect your investment.',
    date: 'January 29, 2025',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <BlogList posts={blogPosts} />
    </div>
  );
}