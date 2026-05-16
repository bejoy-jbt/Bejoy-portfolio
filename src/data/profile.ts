export const profile = {
  name: 'Bejoy JBT',
  firstName: 'Bejoy',
  title: 'Software Engineer',
  tagline:
    'Java backend developer building scalable microservices with Spring Boot — secure APIs, cloud-native deployment, and production-grade systems.',
  email: 'bejoyjbt.bennet@gmail.com',
  location: 'Bengaluru, India',
  links: {
    github: 'https://github.com/bejoy-jbt',
    linkedin: 'https://www.linkedin.com/in/bejoyjbt/',
    leetcode: 'https://leetcode.com/u/bejoyjbt/',
    portfolio: '#home',
  },
  resume: {
    /** Served from /public — Vite copies to site root */
    href: '/Bejoy_Software_Engineer.pdf',
    downloadName: 'Bejoy_Software_Engineer.pdf',
  },
  typedRoles: [
    'Software Engineer.',
    'Java Backend Developer.',
    'Spring Boot Engineer.',
    'Microservices Builder.',
  ],
  summary:
    'Java Backend Developer specializing in scalable microservices with Spring Boot. Experienced in secure RESTful APIs, JWT authentication, service discovery, structured logging, and production monitoring — with strong foundations in enterprise Java, database design, and cloud-native deployment.',
};

export const skillGroups = [
  {
    category: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'J2EE / Servlets',
      'Hibernate',
      'JSP & MVC',
      'RESTful APIs',
    ],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'ORM', 'Transaction Management', 'Schema Design', 'MongoDB'],
  },
  {
    category: 'DevOps & Monitoring',
    items: [
      'Docker',
      'AWS EC2',
      'Eureka Server',
      'Spring Actuator',
      'Prometheus',
      'Grafana',
      'Log4j',
    ],
  },
  {
    category: 'Frontend & Tools',
    items: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Git & Maven',
      'Postman',
      'Swagger',
      'JUnit',
    ],
  },
  {
    category: 'AI & Design',
    items: ['PyTorch', 'ML Pipelines', 'OpenCV', 'Figma', 'UX Research'],
  },
];

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Mphasis',
    type: 'Internship · On-site',
    period: 'Dec 2025 – Present',
    location: 'Bengaluru, India',
    highlights: [
      'Built microservices with Spring Boot and Eureka Server for service discovery and cross-service data transfer, with Log4j structured logging and Swagger UI for API documentation.',
      'Configured Spring Actuator for health metrics and integrated Prometheus and Grafana for real-time performance monitoring dashboards.',
      'Applied enterprise Java fundamentals (Servlets, JSP) for server-side request handling, strengthening production-grade microservices architecture.',
    ],
  },
  {
    role: 'IT Technical Support Intern',
    company: 'Allsec Technologies Limited',
    type: 'Internship · On-site',
    period: 'Dec 2023 – Jan 2024',
    location: 'Chennai, Tamil Nadu',
    highlights: [
      'Resolved hardware and software issues and managed IT service tickets with minimal downtime.',
      'Used ticketing workflows to track incidents and improve team productivity and user satisfaction.',
    ],
  },
];

export interface Achievement {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Finalist — Qualcomm Edge AI Hackathon',
    subtitle: '2025',
    description: 'LeafLens: offline plant disease detection on Snapdragon edge devices.',
  },
  {
    title: 'Sports Secretary',
    subtitle: 'Loyola College · 2023–2024',
    description: 'Organized and managed campus sports events and student activities.',
  },
  {
    title: 'Friends of Figma Community',
    subtitle: 'Member',
    description: 'Design community participation and collaborative learning.',
  },
];

export const certifications = [
  {
    title: 'Machine Learning Specialization',
    organization: 'DeepLearning.AI',
    description: 'Supervised learning, regression, classification, and Python ML workflows.',
    link: 'https://coursera.org/share/a7a1731ea34cf98dd001b427af2ef4b4',
  },
  {
    title: 'Innovation Through Design',
    organization: 'University of Sydney',
    description: 'User-centered design, prototyping, and iterative product development.',
    link: 'https://www.coursera.org/account/accomplishments/verify/9YPLCAM3KT99',
  },
  {
    title: 'Technical Support Fundamentals',
    organization: 'Google',
    description: 'IT support, troubleshooting, and systems administration.',
    link: 'https://www.coursera.org/account/accomplishments/verify/RDNJFH7ETB2P',
  },
  {
    title: 'Foundations of UX Design',
    organization: 'Google',
    description: 'User research, journey mapping, and interface design.',
    link: 'https://www.coursera.org/account/accomplishments/verify/UMNB75VNTSNJ',
  },
  {
    title: 'Python for Data Science, AI & Development',
    organization: 'IBM',
    description: 'Python, data analysis, and foundational AI concepts.',
    link: 'https://www.coursera.org/account/accomplishments/verify/AR2KLRPM8AWN',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'PSG College of Technology',
    status: 'In Progress',
    period: 'Aug 2024 – Present',
    location: 'Coimbatore, India',
    gpa: 'CGPA: 8.13 / 10',
    summary:
      'Advanced computing with focus on software engineering, distributed systems, and scalable application design.',
    achievements: [
      'Quick Cart & Spring Security auth systems — production-style Java backends',
      'Mphasis microservices internship — Spring Boot, Eureka, monitoring stack',
      'Qualcomm Edge AI Hackathon finalist (LeafLens)',
    ],
  },
  {
    degree: 'Bachelor of Science (Physics)',
    school: 'Loyola College (Autonomous)',
    status: 'Completed',
    period: 'Aug 2021 – Apr 2024',
    location: 'Chennai, India',
    gpa: 'CGPA: 8.66 / 10',
    summary:
      'Strong analytical foundation in physics applied to engineering, systems thinking, and problem solving.',
    achievements: [
      'Sports Secretary (2023–2024)',
      'UI/UX coursework and design practice',
      'Competitions and campus leadership awards',
    ],
  },
];
