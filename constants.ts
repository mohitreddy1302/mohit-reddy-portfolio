import { Experience, Project, Education, Certification, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Mohit Reddy",
  title: "Software Engineer",
  summary: "Software Engineer building backend services and full-stack applications in Java, Spring Boot, React, and AWS. Shipped production features at Cleartrip and AppStance spanning travel insurance claims, checkout payments, and ad-analytics pipelines. Experienced in distributed systems (Go, gRPC, Raft), Kubernetes, and ML-powered search (PyTorch, FAISS).",
  location: "San Jose, CA 95113",
  phone: "+1 408 210 6386",
  email: "mintureddy1302@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohit-reddy-01a001286",
  github: "https://github.com/mohitreddy1302",
  portfolio: "https://mohit-reddy-portfolio.vercel.app/",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "Go", "SQL", "JavaScript", "TypeScript", "C++", "C", "Bash"],
  },
  {
    category: "Backend & Distributed Systems",
    skills: ["Spring Boot", "FastAPI", "Node.js", "Microservices", "REST APIs", "gRPC", "GraphQL", "Raft", "Apache Kafka", "OAuth2", "OpenAPI"],
  },
  {
    category: "AI / ML & Search",
    skills: ["PyTorch", "ONNX Runtime", "FAISS", "Hugging Face", "BM25", "pandas", "NumPy"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "BoltDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Lambda, EventBridge, IAM, CloudWatch)", "Docker", "Kubernetes", "Helm", "Jenkins", "CI/CD", "Git"],
  },
  {
    category: "Testing & Observability",
    skills: ["JUnit 5", "Mockito", "WireMock", "Testcontainers", "Prometheus", "Grafana"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Redux Toolkit", "React Hook Form", "HTML/CSS", "Bootstrap"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "AppStance – Apple Ads AI Platform",
    role: "Software Engineer Intern",
    period: "May 2026 – Aug 2026",
    description: [
      "Reduced initial render time of the keyword performance dashboard from 3.2s to 2.2s (30% faster) by implementing component-level code splitting and lazy loading using React.lazy and Suspense in React.",
      "Engineered an automated data archival pipeline using AWS Lambda (Python), Amazon S3, and AWS EventBridge to extract 15,000+ daily keyword metrics (spend, taps, bids) from the Apple Ads API, eliminating manual CSV exports.",
      "Co-developed a Spring Boot (Java) webhook handler to ingest real-time Apple Ads campaign status updates into PostgreSQL, reducing dashboard data staleness from 15 minutes to under 2 minutes for live client accounts.",
      "Implemented retry logic with exponential backoff in Spring Boot (Java) for transient AppsFlyer API errors, cutting attribution sync failures by 40% in production.",
      "Built a Python (pandas) validation script reconciling Apple Ads API keyword records against PostgreSQL, catching a 3% mismatch rate that drove a sync bug fix and restored dashboard accuracy.",
    ],
  },
  {
    company: "Cleartrip",
    role: "Software Development Engineer",
    period: "May 2024 – Jun 2025",
    description: [
      "Designed an end-to-end Medical Flight Cancellation & Insurance Claims feature with contract-first OpenAPI specs and MongoDB data models, enabling self-serve cancellations and cutting manual agent effort by 40%.",
      "Integrated a third-party insurance claims service via Spring WebClient (Java) over OAuth2 client-credentials auth to auto-initiate claims at cancellation, removing a separate submission step and improving claim turnaround by 30%.",
      "Built a multi-step TV License checkout for South African customers in React.js using React Hook Form and Redux Toolkit, replacing an off-site payment redirect with inline payment in a single checkout.",
      "Secured and instrumented both integrations, protecting PII with Bean Validation, field-level encryption, and log masking while configuring Micrometer, Prometheus, and Grafana alerts to catch upstream degradation early.",
      "Engineered automated test suites across both integrations with JUnit 5, Mockito, WireMock stubs, and Testcontainers (MongoDB), gating Jenkins CI to catch contract regressions before Helm and Kubernetes deploys.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "San Jose State University, San Jose, CA",
    degree: "Master of Science in Software Engineering",
    period: "Aug 2025 – May 2027",
    gpa: "GPA: 3.8",
    coursework:
      "Data Structures and Algorithms, Operating Systems, Distributed Systems, Software Systems Engineering, Enterprise Software Platforms, Data Mining, Generative AI, Software Security Technologies",
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
    title: "Fault-Tolerant Distributed Job Scheduler",
    subtitle: "Distributed Systems",
    technologies: ["Go", "gRPC", "Raft", "BoltDB", "Docker", "AWS EC2"],
    description: [
      "Architected an at-least-once distributed job scheduler in Go, assigning work via time-bound gRPC leases reclaimed on expiry, sustaining 500 simulated jobs/sec across 3 coordinator and 3 worker AWS EC2 nodes.",
      "Implemented Raft-based state replication (hashicorp/raft) with BoltDB log persistence, achieving <3s leader failover with zero committed-job loss across 100 crash and network-partition tests.",
      "Designed exponential-backoff retries deduplicated via idempotency keys, sustaining 99.9% job completion under randomized worker failures with zero duplicate side effects across 10,000 retried jobs.",
    ],
  },
  {
    title: "Semantic Search & Ranking Engine",
    subtitle: "AI / ML & Search",
    technologies: ["Python", "PyTorch", "ONNX Runtime", "FAISS", "FastAPI", "Docker"],
    description: [
      "Engineered a hybrid retrieval pipeline over 1M MS MARCO passages, fusing BM25 with dense FAISS search via reciprocal rank fusion, raising Recall@100 from 0.68 to 0.78 over BM25 alone on 5,000 queries.",
      "Added a MiniLM cross-encoder to re-rank the top 50 hybrid candidates, boosting NDCG@10 from 0.42 to 0.53 over un-reranked hybrid retrieval while capping inference cost to a fixed candidate pool.",
      "Quantized PyTorch models to INT8 ONNX and served them with ONNX Runtime behind a Dockerized FastAPI service, cutting p95 latency from 430 ms to 250 ms at 10 QPS on an 8-core CPU with no GPU.",
    ],
  },
  {
    title: "Spartan Exchange",
    subtitle: "Campus Marketplace",
    technologies: ["React", "TypeScript", "Spring Boot", "Apache Kafka", "WebSocket", "PostgreSQL", "Docker", "AWS"],
    description: [
      "Engineered a full-stack campus marketplace using React (TypeScript), Spring Boot, and PostgreSQL, implementing indexed multi-criteria search (category, price, keyword) and paginated APIs to eliminate full-table scans.",
      "Built listing-bound real-time chat with Spring WebSocket (STOMP), publishing message and price-drop events to Apache Kafka to drive async buyer–seller notifications, with history persisted in PostgreSQL.",
      "Containerized services with Docker on AWS EC2 backed by RDS, S3 presigned uploads with client-side image compression (cutting payload size by 60%), and stateless JWT auth via Spring Security.",
    ],
  },
  {
    title: "Distributed Key-Value Store",
    subtitle: "Distributed Systems",
    technologies: ["Java", "Netty", "Protocol Buffers", "ZooKeeper", "Multithreading", "JMH"],
    description: [
      "Built a distributed in-memory key-value store in Java on a non-blocking Netty server with a Protocol Buffers wire protocol, routing keys to nodes via consistent hashing.",
      "Implemented primary–backup replication with a write-ahead log (WAL) and ZooKeeper-based failover, acking writes only after fsync and backup sync for zero acknowledged-write loss across simulated crashes.",
      "Boosted throughput 35% over a single-global-lock baseline (JMH) via lock striping with ReentrantReadWriteLock and a bounded ExecutorService, preserving consistency under parallel writes.",
    ],
  },
  {
    title: "Alumni Portal with RAG Integration",
    subtitle: "AI / RAG",
    technologies: ["Python", "LangChain", "ChromaDB", "Llama 3", "Sentence-Transformers", "RAGAS"],
    description: [
      "Built an alumni Q&A RAG pipeline in Python using LangChain, ChromaDB, and Llama 3 with metadata filtering (grad year, major, company), retrieving relevant records in <150 ms p95 across 4,500 profiles and FAQs.",
      "Indexed documents via 512-token recursive chunking (64-token overlap) and bge-small-en-v1.5 embeddings, raising Recall@5 from 0.64 to 0.82 over unchunked keyword search on 200 test queries.",
      "Enforced inline source citations via Pydantic schemas and prompt-level grounding rules in a Streamlit app, cutting unsupported answers from 28% to 4% (RAGAS) on an adversarial out-of-scope set.",
    ],
  },
  {
    title: "Image Caption Generator",
    subtitle: "Deep Learning",
    technologies: ["Python", "TensorFlow", "Keras", "NLTK", "GloVe", "Flask"],
    description: [
      "Built an encoder–decoder captioning pipeline in TensorFlow and Keras pairing InceptionV3 with a Bahdanau-attention LSTM decoder and GloVe embeddings, trained on 8,000 Flickr8k images (40,000 captions).",
      "Cut training time 60% by precomputing 8×8×2048 InceptionV3 feature maps, and raised BLEU-1 from 0.51 to 0.58 via beam search (k=3), dropout tuning (0.5), and ReduceLROnPlateau.",
      "Deployed a Flask web service caching the model weights and vocabulary tokenizer in memory, generating image captions in <350 ms p95 on CPU.",
    ],
  },
  {
    title: "LLM-Powered DevOps Assistant",
    subtitle: "AI + DevOps",
    technologies: ["Python", "LangChain", "OpenAI API", "Jenkins", "GitHub Actions", "Slack API", "LangSmith"],
    description: [
      "Built an LLM-powered CI failure assistant integrating the OpenAI API with Jenkins and GitHub Actions webhooks, classifying build failures across 5+ stages at 87% accuracy on 200 labeled builds.",
      "Engineered a multi-step LangChain pipeline that pre-filters logs with tiktoken budgeting (50K→4K tokens per build) and returns root causes with ranked fixes via function calling.",
      "Designed few-shot prompt templates from historical Jenkins failures, versioned and evaluated in LangSmith, posting structured summaries to Slack within 30s of a failed build.",
    ],
  },
  {
    title: "Farm Intrusion Classification System",
    subtitle: "Computer Vision",
    technologies: ["Python", "Django REST Framework", "TensorFlow", "Keras", "OpenCV", "MLflow"],
    description: [
      "Built a Django monitoring platform using TensorFlow, Keras, and OpenCV to classify farm intrusions across human, domestic, and wild animal classes, dispatching alerts in <500 ms.",
      "Fine-tuned a MobileNetV2 transfer-learning classifier with OpenCV augmentation, tracked in MLflow and validated with Grad-CAM, achieving 92% test accuracy on 3,000+ images at 24 FPS on CPU.",
      "Engineered 10+ REST API endpoints in Django REST Framework with RBAC, gating alerts at a 0.85 confidence threshold with a 10s debounce window to cut duplicate notifications by 78%.",
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
