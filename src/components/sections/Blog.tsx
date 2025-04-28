import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readingTime: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "From Idea to MVP: My Product Development Journey",
      excerpt: "How I transformed a simple idea into a working prototype in just 4 weeks, and what I learned along the way.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "May 15, 2024",
      category: "Product Development",
      readingTime: "7 min read"
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Exploring emerging technologies and methodologies that are shaping the future of web development.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "April 28, 2024",
      category: "Web Development",
      readingTime: "5 min read"
    },
    {
      id: 3,
      title: "Why User Experience Should Drive Technical Decisions",
      excerpt: "How prioritizing user experience can lead to better technical choices and more successful products.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "April 10, 2024",
      category: "UX/Product",
      readingTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Thoughts</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing my insights, experiences, and reflections on technology, product development, and creative problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="mx-2">•</div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="mx-2">•</div>
                  <span>{post.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-2 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;