import { Experience, Project, Education, Certification, SkillCategory } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mohit Reddy Amanaganti",
  title: "Software Engineer | Full Stack Developer",
  summary: "Graduate student in Software Engineering skilled in Java, Python, JavaScript, Spring Boot, and React. Certified AWS Cloud Practitioner with hands-on expertise in AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and Agile development. Experienced in building AI-driven and cloud-deployed applications.",
  location: "San Jose, CA 95113",
  phone: "+1 408 210 6386",
  email: "mohitreddyamanaganti@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohit-reddy-01a001286", 
  github: "https://github.com/mohitreddy123",     
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C"],
  },
  {
    category: "Frontend Technologies",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Axios", "Tailwind CSS", "Angular"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Cloud",
    skills: ["AWS (EC2, S3, DynamoDB, Lambda, ECS, EKS)", "Azure"],
  },
  {
    category: "DevOps and Version Control Tools",
    skills: [],
    subcategories: [
      {
        name: "DevOps",
        skills: ["Docker", "Kubernetes", "CI/CD Pipelines"],
      },
      {
        name: "Version Control",
        skills: ["Git", "GitHub"],
      },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Sunwest Consulting Pvt. Ltd.",
    role: "Software Engineering Intern",
    period: "June 2024 - June 2025",
    description: [
      "Developed a large-scale application into independent modules using Spring Boot, Docker, and Kubernetes, enhancing scalability and reducing downtime by 20%.",
      "Designed and developed RESTful APIs and implemented a responsive Angular frontend for seamless user access.",
      "Optimized application performance by implementing caching strategies and database query tuning, improving response times.",
      "Enhanced development workflows by implementing CI/CD pipelines, collaborating in Agile teams, and conducting peer reviews.",
    ],
  },
  {
    company: "VCS IT Solutions Pvt. Ltd.",
    role: "Java Full Stack Developer",
    period: "September 2023 - March 2024",
    description: [
      "Engineered a full-stack Employee Management System leveraging Java (Spring Boot), React.js, and MySQL, improving HR efficiency by 30%.",
      "Developed secure and scalable RESTful APIs for CRUD operations, authentication, and role-based access control.",
      "Designed and optimized responsive UI with React, Axios, and Bootstrap, enabling real-time search, filtering, and PDF functionality.",
      "Strengthened code quality with unit & integration testing (JUnit, Mockito, React Testing Library).",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "San Jose State University",
    degree: "Master of Science, Software Engineering",
    period: "Aug 2025 – May 2027",
    gpa: "3.8 CGPA",
  },
  {
    institution: "CVR College of Engineering, India",
    degree: "Bachelor of Technology, Computer Science",
    period: "Nov 2021 - April 2025",
    gpa: "3.6 CGPA",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Alumni Portal with RAG Integration",
    subtitle: "AI-Powered Alumni Engagement",
    technologies: ["Python", "Streamlit", "LangChain", "ChromaDB", "FAISS", "RAG"],
    description: [
      "Developed an AI-driven Alumni Portal using Python and LangChain integrated with ChromaDB/FAISS to deliver accurate responses.",
      "Built a scalable pipeline for intelligent information retrieval and personalized alumni interactions.",
      "Deployed the system with a Streamlit-based UI to enable seamless digital communication.",
    ],
  },
  {
    title: "Spartan Exchange",
    subtitle: "Cloud-Deployed Campus Marketplace",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS", "JWT"],
    description: [
      "Developed a full-stack campus marketplace achieving 25% higher user interaction during pilot tests.",
      "Implemented NLP-based semantic search, improving search relevance by 20%.",
      "Enhanced reliability with Dockerized microservices, reducing deployment time by 35% and maintaining 98% uptime.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    date: "12/05/2024",
    image: "/certificates/AWS.png", 
    link: "https://www.credly.com/go/eo0YgXtj"
  },
  {
    title: "Google Cybersecurity",
    issuer: "Coursera",
    date: "Feb 27, 2024",
    image: "/certificates/CyberSecurity.png",
    link: "https://coursera.org/verify/professional-cert/HZZYPU9MVXN2"
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "Google for Developers / EduSkills",
    date: "July - Sept 2024",
    image: "/certificates/AI-ML.png",
  },
  {
    title: "Java (DSA with Java)",
    issuer: "Apna College",
    date: "2024",
    image: "/certificates/Apna-College.png",
  },
  {
    title: "Coding 101",
    issuer: "Smart Interviews",
    date: "05.01.24",
    image: "/certificates/Coding-101.png",
  },
];