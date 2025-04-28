import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2, Code, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'other';
  featured: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'other'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 5,
      title: "AI Sentiment Analysis",
      description: "Developed a sentiment analysis model using the SST-2 dataset to classify movie reviews as positive or negative. Implemented preprocessing, tokenization, and model training to achieve accurate sentiment classification.",
      image: "https://influencermarketinghub.com/wp-content/uploads/2025/02/AI-Sentiment-Analysis.jpg",
      tech: [
        "Python",
        "PyTorch",
        "Transformers (Hugging Face)",
        "NLTK",
        "Pandas",
        "SST-2 Dataset",
        "Jupyter Notebook"
      ]
      ,
      githubUrl: "https://github.com/bejoy-jbt/Sentiment-analysis-using-SST2",
      category: 'other',
      featured: false
    },

    {
      id: 1,
      title: "ConnectVerse",
      description: "Innovative platform designed to facilitate professional networking, meaningful interactions, and intellectual growth. It enables users to connect, share ideas, and expand their professional horizons through an intuitive and user-friendly interface.",
      image: "https://images.ctfassets.net/pdf29us7flmy/4OVj7HuuJkTyG5rHwLbXo5/022dc36619d3e86d20acae9c7b787020/resized.png?w=1440&q=100&fm=avif",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/bejoy-jbt/ConnectVerse-socialmedia-app-MERN-",

      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: "EvPointsHub",
      description: "A social platform for developers to share projects, connect with peers, and collaborate on open-source initiatives. Features include project showcasing, real-time chat, and skill matching.",
      image: "https://cdn.educba.com/academy/wp-content/uploads/2024/04/Essay-on-Recycling.jpg",
      tech: [
        "Kotlin",
        "Java",
        "Android Studio",
        "XML",
        "Firebase",
      ],
      githubUrl: "https://github.com",

      category: 'web',
      featured: false
    },
    {
      id: 3,
      title: "OR-Generater",
      description: "Built and deployed a QR code generator on Vercel that converts text or URLs into downloadable QR codes for easy sharing",
      image: "https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/img/homepage/homepage-step-1.webp",
      tech: ["React", "Flask", "Versel", "Python"],
      githubUrl: "https://github.com/bejoy-jbt/or-generator",
      liveUrl: "https://or-generator-using-python.vercel.app/",
      category: 'web',
      featured: false
    },
    {
      id: 4,
      title: "EV Solutions Platform",
      description: "Discover a comprehensive platform built for electric vehicle drivers, offering seamless access to charging stations, incentives, and user insights.",
      image: "https://res.cloudinary.com/ds9azjvr2/image/upload/v1720786997/1720786994211-Why_20EV_20Technology_20is_20the_20Future_20of_20Transportation.webp_uucouz.webp",
      tech: ["Php", "MySql", "HTML", "CSS"],
      githubUrl: "https://github.com/bejoy-jbt/EV-Management-System",

      category: 'web',
      featured: false
    },

  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development, mobile apps, and experimental technologies.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'web'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            Mobile Apps
          </button>
          <button
            onClick={() => setFilter('other')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'other'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            Experimental
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      aria-label="View details"
                    >
                      <Maximize2 size={18} />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <span>View Details</span>
                  <Code size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project details modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-modal="true" role="dialog">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setSelectedProject(null)}></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl transform transition-all">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center"
                    >
                      <Github size={18} className="mr-2" />
                      <span>GitHub</span>
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;