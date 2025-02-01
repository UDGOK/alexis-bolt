import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid gap-6 mt-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/blog/${post.id}`} className="text-primary hover:text-primary-dark">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;