import Link from 'next/link'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Crypto-Based Company Acquisitions",
    excerpt: "Explore how blockchain technology is revolutionizing the M&A landscape.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "5 Key Benefits of Tokenized Company Ownership",
    excerpt: "Discover the advantages of representing company ownership through blockchain tokens.",
    date: "2023-05-10",
  },
  {
    id: 3,
    title: "Navigating Regulatory Challenges in Crypto-Based M&A",
    excerpt: "Learn about the current regulatory landscape and how to ensure compliance.",
    date: "2023-05-05",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            FinTech Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay updated with the latest news and insights in crypto-based company acquisitions
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-sm font-medium text-blue-600">
                  <time dateTime={post.date}>{post.date}</time>
                </p>
                <Link href={`/blog/${post.id}`} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                </Link>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read full story
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

