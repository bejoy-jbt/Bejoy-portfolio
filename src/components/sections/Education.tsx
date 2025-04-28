import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Cards flex container */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* MCA Card */}
          <div className="relative flex-1 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-600 rounded-full shadow-md flex items-center justify-center mr-4">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Master of Computer Applications (MCA)
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Current
                </span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              PSG College of Technology
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-8 mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>2022 - 2026</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Coimbatore, India</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Specializing in advanced computing concepts, including Operating Systems, Data Structures, and Algorithms, alongside software engineering and product development methodologies. 
              Passionate about building scalable applications with a strong focus on system design, performance optimization, and developing well-rounded product management skills.
            </p>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Key Achievements:
              </h5>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>Developed "ConnectVerse" - Web app for social networking</li>
                <li>Strong foundation in OS, DSA, DBMS, and Computer Networks</li>
                <li>Built strong communication and leadership skills through team projects and presentations.</li>
              </ul>
            </div>
          </div>

          {/* BSc Physics Card */}
          <div className="relative flex-1 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-600 rounded-full shadow-md flex items-center justify-center mr-4">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Science (Physics)
                </h3>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Completed
                </span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Loyola College (Autonomous)
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-8 mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>2021 - 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Chennai, India</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Leveraged a solid foundation in physics to enhance analytical thinking and problem-solving skills. Gained experience in applying mathematical and scientific principles to real-world scenarios, improving my approach to technical challenges and software development.
            </p>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Key Achievements:
              </h5>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>Completed Online Courses in UI/UX Design</li>
                <li>Served as Sports Secretary, organizing and managing sports events</li>
                <li>Won various competitions and awards</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
