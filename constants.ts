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
  github: "https://github.com/mohitreddy1302",     
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C", "C++", "Go", "Bash/Shell", "TypeScript"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "AWS RDS"],
  },
  {
    category: "Frontend Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Axios"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes"],
  },
  {
    category: "Version Control and CI/CD",
    skills: ["Git", "GitHub", "GitLab", "Jenkins", "CI/CD Pipelines"],
  },
  {
    category: "Backend Technologies",
    skills: ["Node.js", "Flask", "Spring Boot", "JUnit", "Kafka"],
  },
  {
    category: "APIs and Integration",
    skills: ["REST APIs"],
  },
  {
    category: "Cloud",
    skills: ["AWS (EC2, Lambda, S3, VPC, ELB, IAM, CloudTrail, CloudWatch, ECS, EKS, Athena)", "Microsoft Azure"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Sunwest Consulting Pvt. Ltd.",
    role: "Software Engineering Intern",
    period: "Jun 2024 – Jun 2025",
    description: [
      "Refactored OpsFlow, an internal workflow management application used to automate and track multi-step business processes, from a monolithic architecture into Spring Boot microservices, reducing peak-time downtime by 20%.",
      "Designed and maintained RESTful APIs for workflow execution, user management, and role-based access control, and collaborated on a responsive Angular frontend to improve usability and operational efficiency.",
      "Improved system performance by implementing Redis-based caching for frequently accessed workflow data and optimizing slow SQL queries, reducing average API response times by 25–30%.",
      "Containerized backend services using Docker and deployed them on Kubernetes, enabling consistent deployments and improving service reliability across environments.",
      "Contributed to CI/CD pipelines (GitHub Actions/Jenkins), performed peer code reviews, and followed Agile practices to support reliable and frequent production releases.",
    ],
  },
  {
    company: "VCS IT Solutions Pvt. Ltd.",
    role: "Java Full Stack Developer",
    period: "Sep 2023 – Mar 2024",
    description: [
      "Developed and deployed a Spring Boot + React Employee Management System that reduced manual HR processes by 30% and improved data accuracy for 5+ internal teams.",
      "Built and optimized 15+ secure REST APIs for CRUD operations, authentication, and RBAC, improving backend response times by 20% through efficient query tuning and caching.",
      "Enhanced the UI with real-time search, dynamic filtering, and PDF export, increasing usability and internal adoption during rollout.",
      "Improved code reliability by writing 50+ unit and integration tests using JUnit, Mockito, and RTL, reducing regression issues across feature releases.",
      "Collaborated with cross-functional Agile teams to deliver iterative features, contributing to consistent sprint velocity and on-time releases.",
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