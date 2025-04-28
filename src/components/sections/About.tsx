import React from 'react';
import { Code, Laptop, Lightbulb, Workflow } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4">
                Hey there! I'm <span className="font-semibold">Bejoy</span>, a passionate tech enthusiast, aspiring
                product manager, and creative product designer with a love for crafting intuitive digital experiences
                and building products that truly make a difference.
              </p>


              <p className="mb-4">
                My journey began with a simple curiosity about how things are built and why they matter. What started as tinkering with code soon grew into a passion for designing thoughtful products that solve real problems and create delightful user experiences.
              </p>

              <p className="mb-4">
                I bridge the gap between technology and design—I don't just build features, I shape experiences. Whether it's crafting a seamless MERN stack web app or designing an intuitive Android application, I always focus on the "why" behind every decision.
              </p>

              <p>
                Outside of building and designing, you'll often find me exploring emerging tech trends, sketching new product ideas, learning about user behavior, or brainstorming the next big thing that could make a real impact.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                MERN Stack
              </span>
              <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                ML and AI
              </span>

              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Product Management
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                UX/UI Design
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                Open CV
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    <Code size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Building robust applications with modern technologies and best practices.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    <Lightbulb size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Turning creative ideas into practical solutions through experimentation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    <Laptop size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Product Thinking</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Creating user-centered experiences that solve real problems.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
                    <Workflow size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Learning</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Continuously exploring new technologies and expanding my skillset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;