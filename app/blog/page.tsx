import React from 'react'
import Link from 'next/link'

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: 'benefits-of-concrete-driveways',
    title: 'Top 5 Benefits of Concrete Driveways',
    excerpt: 'Discover why concrete driveways are a popular choice for homeowners in Tulsa and Bixby.',
  },
  {
    slug: 'asphalt-vs-concrete',
    title: 'Asphalt vs Concrete: Which is Right for Your Project?',
    excerpt: 'Compare the pros and cons of asphalt and concrete for your next construction project.',
  },
  {
    slug: 'maintaining-your-parking-lot',
    title: 'Essential Tips for Maintaining Your Commercial Parking Lot',
    excerpt: 'Learn how to extend the life of your parking lot with these maintenance tips.',
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}