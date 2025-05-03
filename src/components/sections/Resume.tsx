import React from 'react';
import { FaCalendar, FaMapPin } from 'react-icons/fa';
import { Download, Award, Code, Calculator } from 'lucide-react';
import {
  FaReact, FaNode, FaJava, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiApollographql,
  SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiFigma, SiAdobephotoshop, SiAdobexd, SiCanva, SiSketch
} from 'react-icons/si';

const Resume: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="w-5 h-5 text-blue-500 mr-2" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400 mr-2" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-600 mr-2" /> },
        {
          name: "HTML/CSS", icon: (
            <div className="flex space-x-1 mr-2">
              <FaHtml5 className="w-5 h-5 text-orange-500" />
              <FaCss3Alt className="w-5 h-5 text-blue-600" />
            </div>
          )
        },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5 text-teal-400 mr-2" /> }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNode className="w-5 h-5 text-green-600 mr-2" /> },
        { name: "Express", icon: <SiExpress className="w-5 h-5 text-gray-600 mr-2" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500 mr-2" /> },
        { name: "MySql", icon: <SiApollographql className="w-5 h-5 text-purple-500 mr-2" /> }
      ]
    },
    {
      category: "Design Tools",
      items: [
        { name: "Figma", icon: <SiFigma className="w-5 h-5 text-purple-500 mr-2" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="w-5 h-5 text-blue-600 mr-2" /> },
        { name: "Adobe XD", icon: <SiAdobexd className="w-5 h-5 text-pink-500 mr-2" /> },
        { name: "Canva", icon: <SiCanva className="w-5 h-5 text-blue-400 mr-2" /> },
        { name: "Sketch", icon: <SiSketch className="w-5 h-5 text-yellow-400 mr-2" /> },
      ]
    },
    {
      category: "AI & ML",
      items: [
        { name: "Sklearn", icon: <SiScikitlearn className="w-5 h-5 text-yellow-500 mr-2" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-5 h-5 text-orange-500 mr-2" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5 text-yellow-600 mr-2" /> },
        { name: "OpenCV", icon: <SiOpencv className="w-5 h-5 text-blue-500 mr-2" /> },
      ]
    },
    {
      category: "Other",
      items: [
        { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-500 mr-2" /> },
        { name: "Docker", icon: <FaDocker className="w-5 h-5 text-blue-500 mr-2" /> }
        
      ]
    }
  ];

  const certifications = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      organization: "DeepLearning.AI",
      description: "Gaining hands-on experience in supervised machine learning, acquiring expertise in Python-based machine learning techniques, including regression and classification modeling.",
      link: "https://coursera.org/share/a7a1731ea34cf98dd001b427af2ef4b4", // Replace this link
    },
    {
      title: "Innovation Through Design: Think, Make, Break, Repeat",
      organization: "The University of Sydney ",
      description: "Focusing on user-centered design, rapid prototyping, and innovative solution development through iterative processes.",
      link: "https://www.coursera.org/account/accomplishments/verify/9YPLCAM3KT99", // Replace this link
    },
    {
      title: "Technical Support Fundamentals",
      organization: " Google",
      description: "Gaining foundational knowledge in IT support, troubleshooting, and system administration.",
      link: "https://www.coursera.org/account/accomplishments/verify/RDNJFH7ETB2P", // Replace this link
    },
    {
      title: "Foundations of User Experience (UX) Design",
      organization: " Google",
      description: "Gaining hands-on experience with UX processes such as user research, journey mapping, and interface design.",
      link: "https://www.coursera.org/account/accomplishments/verify/UMNB75VNTSNJ", // Replace this link
    },
    {
      title: "Excel Skills for Business: Essentials",
      organization: "Macquarie University",
      description: "Developing proficiency in data entry, formulas, functions, and basic data analysis using Microsoft Excel.",
      link: "https://www.coursera.org/account/accomplishments/verify/TP96LT7CV9JQ", // Replace this link
    },
    {
      title: "Python for Data Science, AI & Development",
      organization: "IBM",
      description: "Gaining practical skills in Python programming, data analysis, and foundational AI concepts",
      link: "https://www.coursera.org/account/accomplishments/verify/AR2KLRPM8AWN", // Replace this link
    }
  ];

  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A summary of my education, experience, and skills. Download my complete resume for more details.
          </p>
        </div>

        {/* Download Resume */}
        <div className="flex justify-center mb-12">
          <a
            href="src\public\BejoyJBT_ResumeAi.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Product Development Intern */}
          <div className="relative flex-1 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-600 rounded-full shadow-md flex items-center justify-center mr-4">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Information Technology Technical Support Intern
                </h3>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Internship
                </span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Allsec Technologies Limited
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-8 mb-4">
              <div className="flex items-center">
                <FaCalendar size={16} className="mr-2" />
                <span>Dec 2023 – Jan 2024</span>
              </div>
              <div className="flex items-center">
                <FaMapPin size={16} className="mr-2" />
                <span>Chennai, Tamil Nadu (On-site)</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Played a vital role in resolving technical issues, supporting users, and managing IT service tickets effectively. Leveraged troubleshooting skills to resolve hardware and software issues, ensuring minimal downtime and increased productivity.
            </p>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Key Responsibilities:
              </h5>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>Troubleshot and resolved hardware/software issues for employees</li>
                <li>Utilized ticketing system to manage IT requests and incidents</li>
                <li>Provided timely support that improved team productivity and user satisfaction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full mr-4">
              <Code size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((group, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{group.category}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full mr-4">
              <Award size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                <p className="text-purple-600 dark:text-purple-400 mb-2">{cert.organization}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline dark:text-green-400 font-medium"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
