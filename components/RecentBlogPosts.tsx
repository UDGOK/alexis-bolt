import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const RecentBlogPosts: React.FC = () => {
  console.log('Rendering RecentBlogPosts component');
  // This would typically come from a CMS or database
  const blogPosts: BlogPost[] = [
    {
      id: 'revolutionizing-concrete-industry-2025',
      title: 'Revolutionizing the Concrete Industry: Key Innovations from World of Concrete 2025 in Las Vegas',
      excerpt: 'Discover the latest innovations and technologies shaping the future of the concrete industry from the World of Concrete 2025 event in Las Vegas.',
      date: 'February 1, 2025',
      image: '/images/blog/world-of-concrete-las-vegas-1.jpeg',
    },
    {
      id: 'benefits-of-concrete-driveways',
      title: 'Top 5 Benefits of Concrete Driveways for Tulsa Homeowners',
      excerpt: 'Explore the advantages of choosing concrete driveways for your Tulsa home, from durability to aesthetic appeal.',
      date: 'January 15, 2025',
      image: '/images/blog/stamped-concrete-driveway-tulsa.jpeg',
    },
    {
      id: 'asphalt-vs-concrete',
      title: 'Asphalt vs Concrete: Making the Right Choice for Your Oklahoma Project',
      excerpt: 'An in-depth comparison of asphalt and concrete to help you make an informed decision for your next construction project in Oklahoma.',
      date: 'January 22, 2025',
      image: '/images/blog/asphalt-vs-concrete.jpeg',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:text-primary-dark transition duration-300">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;