import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import RetroCard from '../ui/RetroCard';
import BlurFade from '../ui/BlurFade';
import { profile } from '../../data/profile';

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

const projects: Project[] = [
  {
    id: 1,
    title: 'Quick Cart',
    description:
      'Scalable e-commerce backend with Spring Boot — REST APIs for products, orders, and users. JWT authentication, role-based authorization, and optimized MySQL schema for reliable transactions.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tech: ['Spring Boot', 'Spring Security', 'React.js', 'MySQL', 'JWT'],
    githubUrl: `${profile.links.github}`,
    category: 'web',
    featured: true,
  },
  {
    id: 2,
    title: 'Authentication & Authorization System',
    description:
      'Stateless auth module with Spring Security — JWT generation, validation, custom filters, BCrypt credentials, and MySQL-backed user roles with centralized exception handling.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'BCrypt'],
    githubUrl: `${profile.links.github}`,
    category: 'web',
    featured: true,
  },
  {
    id: 3,
    title: 'LeafLens – Edge AI Plant Diagnostics',
    description:
      'Qualcomm Hackathon finalist — offline CNN plant disease detection (93%+ accuracy) on Snapdragon with multilingual treatment advice via edge NLP/TTS.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    tech: ['Snapdragon SNPE', 'QNN SDK', 'Flask', 'PyTorch', 'PlantVillage'],
    githubUrl: 'https://github.com/bejoy-jbt/LeafLens-Qualcomm-Hackathon',
    category: 'other',
    featured: true,
  },
  {
    id: 4,
    title: 'ConnectVerse',
    description:
      'MERN social platform for professional networking, real-time chat, and project showcasing with Socket.io.',
    image:
      'https://images.ctfassets.net/pdf29us7flmy/4OVj7HuuJkTyG5rHwLbXo5/022dc36619d3e86d20acae9c7b787020/resized.png?w=1440&q=100&fm=avif',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    githubUrl: 'https://github.com/bejoy-jbt/ConnectVerse-socialmedia-app-MERN-',
    category: 'web',
    featured: false,
  },
  {
    id: 5,
    title: 'AI Sentiment Analysis',
    description:
      'SST-2 movie review classifier with Hugging Face transformers, preprocessing, and PyTorch training pipeline.',
    image: '/projects/ai-sentiment-analysis.png',
    tech: ['Python', 'PyTorch', 'Transformers', 'NLTK', 'SST-2'],
    githubUrl: 'https://github.com/bejoy-jbt/Sentiment-analysis-using-SST2',
    category: 'other',
    featured: false,
  },
  {
    id: 6,
    title: 'QR Generator',
    description: 'Generate downloadable QR codes from text or URLs — React frontend with Python/Flask API on Vercel.',
    image: 'https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/img/homepage/homepage-step-1.webp',
    tech: ['React', 'Flask', 'Python', 'Vercel'],
    githubUrl: 'https://github.com/bejoy-jbt/or-generator',
    liveUrl: 'https://or-generator-using-python.vercel.app/',
    category: 'web',
    featured: false,
  },
  {
    id: 7,
    title: 'EV Management System',
    description: 'Web platform for EV drivers — charging stations, incentives, and operational insights.',
    image:
      'https://res.cloudinary.com/ds9azjvr2/image/upload/v1720786997/1720786994211-Why_20EV_20Technology_20is_20the_20Future_20of_20Transportation.webp_uucouz.webp',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/bejoy-jbt/EV-Management-System',
    category: 'web',
    featured: false,
  },
];

const filters = [
  { key: 'all' as const, label: 'All' },
  { key: 'web' as const, label: 'Backend / Web' },
  { key: 'mobile' as const, label: 'Mobile' },
  { key: 'other' as const, label: 'AI / Edge' },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'other'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad section-alt">
      <div className="container mx-auto px-4">
        <SectionHeading
          level="LV 06"
          label="Projects"
          title="Build Log"
          description="Spring Boot, edge AI, and full-stack quests."
        />

        <BlurFade className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`font-pixel text-[8px] px-4 py-2 transition-all ${
                filter === f.key
                  ? 'btn-retro !py-2 !px-4'
                  : 'retro-card-sm bg-surface hover:bg-accent/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <BlurFade key={project.id} delay={i * 60}>
              <RetroCard className="group h-full flex flex-col !p-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:text-accent"
                      aria-label="View details"
                    >
                      <Maximize2 size={16} />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:text-accent"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:text-accent"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {project.featured && (
                    <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                      Featured
                    </span>
                  )}
                  <h3 className="font-pixel text-[10px] mb-2">{project.title}</h3>
                  <p className="text-muted text-sm line-clamp-3 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs rounded-md border border-border bg-background/50 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-medium text-accent hover:underline text-left"
                  >
                    View details →
                  </button>
                </div>
              </RetroCard>
            </BlurFade>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal>
            <button
              type="button"
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            />
            <BlurFade inView className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto retro-card">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full border border-border text-muted hover:text-foreground"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <h3 className="font-pixel text-xs mb-3">{selectedProject.title}</h3>
                <p className="text-muted mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full border border-border bg-accent/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="btn-retro-outline !py-2 !px-4 !text-[8px]"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-retro !py-2 !px-4 !text-[8px]"
                    >
                      <ExternalLink size={16} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </BlurFade>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
