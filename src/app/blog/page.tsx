import Link from "next/link";
import { Metadata } from "next";
import {
  FaCalendar,
  FaUser,
  FaClock,
  FaArrowRight,
  FaHome,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Real Estate Blog - Dehradun Property Insights & Market Trends",
  description:
    "Expert insights on Dehradun real estate market, property buying guides, investment tips, and local area analysis. Stay updated with Shah Properties blog.",
  keywords: [
    "dehradun real estate blog",
    "property buying tips dehradun",
    "dehradun property market trends",
    "real estate investment dehradun",
    "property news uttarakhand",
  ],
  openGraph: {
    title: "Real Estate Blog - Dehradun Property Insights | Shah Properties",
    description:
      "Expert insights on Dehradun real estate market, property buying guides, and investment tips.",
    images: [
      {
        url: "/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Shah Properties Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://shahproperties.8bitcode.in/blog",
  },
};

// Blog posts data (will be moved to database/CMS later)
const blogPosts = [
  {
    id: "top-residential-areas-dehradun-2025",
    title: "Top 10 Residential Areas in Dehradun for 2025",
    excerpt:
      "Discover the best localities in Dehradun for residential property investment. Complete analysis of infrastructure, connectivity, and ROI potential.",
    category: "Investment Guide",
    author: "Roshan Singh Shah",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/images/blog/residential-areas.jpg",
    icon: FaHome,
  },
  {
    id: "dehradun-market-trends-2025",
    title: "Dehradun Real Estate Market Trends & Analysis 2025",
    excerpt:
      "Comprehensive analysis of Dehradun property market trends, price movements, and future outlook for residential and commercial properties.",
    category: "Market Analysis",
    author: "Roshan Singh Shah",
    date: "2025-01-10",
    readTime: "10 min read",
    image: "/images/blog/market-trends.jpg",
    icon: FaChartLine,
  },
  {
    id: "complete-guide-buying-property-dehradun",
    title: "Complete Guide to Buying Property in Dehradun",
    excerpt:
      "Step-by-step guide covering documentation, legal aspects, home loans, RERA compliance, and everything you need to know before buying property in Dehradun.",
    category: "Buyer's Guide",
    author: "Roshan Singh Shah",
    date: "2025-01-05",
    readTime: "12 min read",
    image: "/images/blog/buying-guide.jpg",
    icon: FaHome,
  },
  {
    id: "kalyanpur-vs-pondha-comparison",
    title: "Kalyanpur vs Pondha: Best Location for Property Investment?",
    excerpt:
      "Detailed comparison of Kalyanpur and Pondha localities - infrastructure, connectivity, amenities, prices, and investment potential.",
    category: "Location Guide",
    author: "Roshan Singh Shah",
    date: "2024-12-28",
    readTime: "7 min read",
    image: "/images/blog/location-comparison.jpg",
    icon: FaMapMarkerAlt,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Estate Insights & Guides
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Expert advice, market trends, and property buying guides for
              Dehradun real estate
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
              All Posts
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-emerald-50 transition-colors border border-gray-200">
              Investment Guide
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-emerald-50 transition-colors border border-gray-200">
              Market Analysis
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-emerald-50 transition-colors border border-gray-200">
              Buyer&apos;s Guide
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-emerald-50 transition-colors border border-gray-200">
              Location Guide
            </button>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden">
                  <post.icon className="text-8xl text-emerald-600/20 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-emerald-600" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-emerald-600" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-emerald-600" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                  >
                    Read Full Article
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 font-medium">
                📝 More articles coming soon! Subscribe to our newsletter for
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Real Estate Insights
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get expert tips, market trends, and new property listings directly
            in your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>

          <p className="text-emerald-100 text-sm mt-4">
            📧 No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center border border-emerald-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Looking for Property in Dehradun?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our premium property listings or get in touch with our
              experts for personalized assistance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/properties"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                View Properties
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-emerald-600 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 hover:shadow-lg border-2 border-emerald-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

