import { Experience, Project, Education, Certification, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Mohit Reddy",
  title: "Software Engineer",
  summary: "Software Engineer building full-stack applications and scalable backend services using Java/Spring Boot, React, and AWS. Strong foundations in data structures, algorithms, and distributed systems, with hands-on experience in REST APIs, PostgreSQL/MongoDB, CI/CD, and container orchestration using Docker and Kubernetes.",
  location: "San Jose, CA 95113",
  phone: "+1 408 210 6386",
  email: "mintureddy1302@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohit-reddy-01a001286",
  github: "https://github.com/mohitreddy1302",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "C++", "C", "Bash"],
  },
  {
    category: "Backend & Distributed Systems",
    skills: ["Spring Boot", "Microservices", "REST APIs", "Apache Kafka", "GraphQL", "JUnit", "Mockito", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Lambda, IAM, CloudWatch)", "Docker", "Kubernetes", "CI/CD Pipelines", "Git", "GitHub"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML/CSS", "Bootstrap"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "AppStance – Apple Ads AI Platform",
    role: "Software Engineer",
    period: "May 2026 – Present",
    description: [
      "Reduced initial render time of the keyword performance dashboard from 3.2s to 2.2s (30% faster) by implementing component-level code splitting and lazy loading using React.lazy and Suspense in React.",
      "Built an automated data archival pipeline using AWS Lambda (Python) and Amazon S3 to store daily keyword-level performance data, including spend, taps, and bids, retrieved from the Apple Ads API and scheduled via AWS EventBridge, reducing manual data export and backup work.",
      "Contributed to a webhook handler using Spring Boot (Java) to ingest real-time Apple Ads campaign status updates into PostgreSQL, reducing dashboard data staleness from 15 minutes to under 2 minutes for a subset of test accounts.",
      "Implemented retry logic with exponential backoff in Spring Boot for failed AppsFlyer API calls, reducing synchronization failures in the module by an estimated 40% during testing.",
      "Developed a Python data validation script using pandas to compare sampled Apple Ads keyword records against internal PostgreSQL entries, identifying data mismatches in approximately 3% of the records analyzed.",
    ],
  },
  {
    company: "Cleartrip",
    role: "Software Development Engineer",
    period: "May 2024 – Jun 2025",
    description: [
      "Designed an end-to-end Medical Flight Cancellation and Insurance Claims feature, driving contract-first API design in OpenAPI and modelling cancellation, document, and claim-status collections in MongoDB, enabling customer self-serve cancellations and cutting manual agent effort by 40%.",
      "Integrated a third-party insurance claims service via Spring WebClient over OAuth2 client-credentials auth to auto-initiate claims at cancellation, removing a separate submission step and improving claim turnaround by 30%.",
      "Built a TV License checkout flow for South African customers in React.js using React Hook Form and Redux Toolkit for multi-step state and inline payment, consolidating an off-site payment journey into a single checkout.",
      "Hardened PII exchange across both integrations with Bean Validation, field-level encryption, and log masking, and instrumented flows with Micrometer, Prometheus, and Grafana alerting to catch upstream degradation before customer impact.",
      "Covered both integrations with JUnit 5, Mockito, WireMock contract tests, and Testcontainers MongoDB tests, gated in Jenkins CI ahead of Helm deploys to Kubernetes.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "San Jose State University, San Jose, CA",
    degree: "Master of Science in Software Engineering",
    period: "Aug 2025 – May 2027 (Expected)",
    gpa: "GPA: 3.8",
  },
  {
    institution: "CVR College of Engineering, Hyderabad, India",
    degree: "Bachelor of Technology in Computer Science",
    period: "Nov 2021 – Apr 2025",
    gpa: "GPA: 3.6",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Spartan Exchange",
    subtitle: "Campus Marketplace · Sep 2025 – Dec 2025",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS", "JWT"],
    description: [
      "Engineered a full-stack campus marketplace using React, Spring Boot, and PostgreSQL, supporting secure authentication, product listings, advanced filtering (category, price, keyword), and image uploads to streamline peer-to-peer transactions.",
      "Designed and integrated a real-time chat system enabling direct buyer–seller communication tied to product listings, improving user interaction and accelerating transaction workflows.",
      "Containerized backend services with Docker and deployed on AWS EC2, configured PostgreSQL on RDS and media storage on S3, and implemented JWT-based authentication to ensure secure, scalable, and production-ready infrastructure.",
    ],
  },
  {
    title: "Distributed Key-Value Store",
    subtitle: "Systems · Jan 2025 – Apr 2025",
    technologies: ["Java", "TCP Sockets", "Multithreading", "Concurrency"],
    description: [
      "Built a distributed in-memory key-value store in Java using TCP sockets and multithreaded request handling to support concurrent client requests with low-latency response times.",
      "Implemented cross-node data replication and disk-based persistence to prevent data loss, enabling automatic state recovery after simulated server crashes and failure scenarios.",
      "Improved scalability by optimizing thread pool management and reducing lock contention, increasing throughput by 35% on multi-core systems while maintaining consistency under parallel writes.",
    ],
  },
  {
    title: "Alumni Portal with RAG Integration",
    subtitle: "AI-Powered Alumni Engagement · Jan 2025 – Apr 2025",
    technologies: ["Python", "Streamlit", "LangChain", "ChromaDB", "FAISS", "RAG"],
    description: [
      "Developed an AI-driven alumni engagement platform using Python, LangChain, and a RAG pipeline integrated with ChromaDB and FAISS to deliver accurate, context-aware responses to alumni queries.",
      "Built a scalable intelligent retrieval pipeline enabling personalized alumni interactions by indexing institutional knowledge into vector embeddings, improving response relevance and query resolution accuracy.",
      "Deployed a Streamlit-based interactive UI to facilitate seamless digital communication, knowledge sharing, and alumni connectivity, reducing manual information lookup effort significantly.",
    ],
  },
  {
    title: "Animal Detection in Farms",
    subtitle: "Computer Vision · Feb 2025",
    technologies: ["Python", "Django", "TensorFlow", "Keras", "OpenCV"],
    description: [
      "Built a Django-based web application using TensorFlow/Keras and OpenCV to classify animals into Human, Domestic, and Wild categories from uploaded images and live webcam feeds.",
      "Engineered a real-time detection pipeline integrating OpenCV's VideoCapture with a pre-trained Keras model, achieving 92% classification accuracy across varied lighting conditions and backgrounds.",
      "Implemented secure user authentication with OTP verification, profile management, and role-based access across 10+ REST API endpoints, reducing manual farm supervision effort by 40%.",
    ],
  },
  {
    title: "Image Caption Generator",
    subtitle: "Deep Learning · Feb 2025",
    technologies: ["Python", "InceptionV3", "LSTM", "Flask"],
    description: [
      "Built an end-to-end image captioning pipeline using InceptionV3 for CNN-based feature extraction and LSTM for sequence generation, trained on thousands of Flickr8k image-caption pairs achieving a BLEU score of 0.58.",
      "Fine-tuned hyperparameters including sequence length, dropout, and learning rate schedules to improve caption coherence and grammatical accuracy across diverse image categories.",
      "Deployed a Flask web application with an intuitive image upload interface, enabling users to receive real-time AI-generated captions from the trained InceptionV3 + LSTM model with minimal latency.",
    ],
  },
  {
    title: "LLM-Powered DevOps Assistant",
    subtitle: "AI + DevOps · 2024",
    technologies: ["Python", "Jenkins", "OpenAI API", "LangChain", "Prompt Engineering"],
    description: [
      "Architected an LLM-powered log analysis system integrating OpenAI API with Jenkins webhook triggers to automatically classify build failures across 5+ pipeline stages, cutting triage time by 50%.",
      "Engineered a multi-turn prompt pipeline using LangChain to extract actionable root cause summaries and ranked remediation steps from unstructured CI logs, reducing mean time to resolution by 35%.",
      "Eliminated manual log inspection for recurring failure patterns by training prompt templates on historical Jenkins build data, decreasing pipeline maintenance overhead by 40% and accelerating developer feedback cycles.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    date: "12/05/2024",
    image: "/certificates/AWS.png",
    link: "https://www.credly.com/go/eo0YgXtj",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Coursera",
    date: "Feb 27, 2024",
    image: "/certificates/CyberSecurity.png",
    link: "https://coursera.org/verify/professional-cert/HZZYPU9MVXN2",
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
