import React, { useEffect, useRef } from 'react';
import TypedEffect from '../ui/TypedEffect';
import TextPressure from '../ui/TextPressure';

const Home: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      backgroundRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div
          ref={backgroundRef}
          className="absolute inset-0 opacity-10 dark:opacity-20 transition-transform duration-500 ease-out"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-green-500 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-orange-500 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-40 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-center text-2xl md:text-2xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fadeInUp animation-delay-100">
            Hola! I'm
            <div style={{ position: 'relative', height: '200px' }}>
              <TextPressure
                text="Bejoy!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#252525"
                minFontSize={26}
              />
            </div>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-12">
            <TypedEffect
              strings={[
                "Tech Dreamer.",
                "Creative Thinker.",
                "Future Builder.",
                "Product Innovator.",
              ]}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-fadeIn">
            I build innovative digital experiences that empower users and solve real-world problems,
            combining technical expertise with product thinking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp animation-delay-300">
            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              onClick={() => handleScrollTo('projects')}
            >
              View My Work
            </button>
            <button
              className="px-8 py-3 bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
              onClick={() => handleScrollTo('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => handleScrollTo('about')}
        >
          ↓
        </button>
      </div>
    </section>
  );
};

export default Home;
