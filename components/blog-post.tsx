import React from 'react'
import Head from 'next/head'

interface BlogPostProps {
  title: string
  content: string
  author: string
  date: string
  metaDescription: string
}

export function BlogPost({ title, content, author, date, metaDescription }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{title} | Alexis Concrete and Asphalt</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="text-gray-600 mb-8">
          By {author} | Published on {date}
        </div>
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  )
}