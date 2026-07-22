export const profile = {
  name: 'Garima Swami',
  first: 'Garima',
  last: 'Swami',
  role: 'AI Engineer · Computer Vision · Data Science',
  tagline:
    'Building intelligent systems that understand data, images, and the world.',
  location: 'Berlin, Germany',
  availability: 'Open to opportunities',
  email: 'garimaswami646@gmail.com',
  linkedin: 'https://linkedin.com/in/garimaswami',
  github: 'https://github.com/gigs-codes',
  site: 'https://gigs-codes.github.io/gigs-portfolio',
  instagram: 'https://www.instagram.com/itsgarimoo/',
  youtube: 'https://www.youtube.com/@itsgarimo',
}

export const specialty = {
  title: 'AI Engineer',
  tags: ['Neural Networks', 'LLMs', 'Computer Vision', 'RAG', 'MLOps'],
}

// Cycling hero slides — icon key maps to an SVG in HeroIcons.jsx
export const heroSlides = [
  { verb: 'I DESIGN FOR', subject: 'INTELLIGENT SYSTEMS', icon: 'brain' },
  { verb: 'I BUILD', subject: 'COMPUTER VISION', icon: 'eye' },
  { verb: 'I ENGINEER', subject: 'RAG PIPELINES', icon: 'chat' },
  { verb: 'I RESEARCH', subject: 'HUMAN-CENTERED AI', icon: 'grad' },
]

export const workHighlights = [
  'Computer Vision & Real-time Systems',
  'RAG & LLM Orchestration',
  'MLOps & Data Pipelines',
  'Explainable & Responsible AI',
]

export const stats = [
  { num: '2+', label: 'Years of experience' },
  { num: '10+', label: 'Freelance & personal projects' },
  { num: '2', label: 'Peer-reviewed publications' },
  { num: '∞', label: 'Coffees consumed' },
]

export const aboutGreeting = "Hi, I'm Garima. 👋"

export const aboutTagline = 'AI Engineer • Developer • Creator'

export const aboutQuote =
  "Maybe we're all here in this universe to fix bugs, commit meaningful changes, and leave a better version behind."

export const about = [
  "I'm a Master's student in Artificial Intelligence at Brandenburg University of Technology (BTU), Germany.",
  "By day, I build Generative AI solutions as an AI Engineer at Abacus. By night, you'll probably find me solving LeetCode problems, experimenting with LLMs, or convincing another neural network that it should converge this time.",
  'I love building intelligent systems with Machine Learning, Computer Vision, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI, and Digital Twins.',
  'Outside of work, I code, capture, and create.',
  'I spend weekends making strange little projects where technology meets art, exploring new ideas through code, photography, and design. Occasionally, my weekday AI experiments and weekend creative projects become the same thing.',
]

export const pullQuote =
  "I love coffee — most of my ideas start with it. There's something about that first sip that unlocks the best thinking."

export const experience = [
  {
    date: 'Aug 2026 – Present',
    role: 'Gen AI Engineer',
    company: 'Abacus Medicine · Berlin, Germany',
    desc: 'Designing agentic AI workflows on top of pharmaceutical data — orchestrating multi-step automations in n8n, building LLM-powered retrieval pipelines with LangChain and RAG, and integrating generative AI into reliable, production-grade systems.',
    tags: ['Agentic AI', 'n8n', 'LLMs', 'RAG', 'LangChain'],
  },
  {
    date: 'Apr 2026 – Jun 2026',
    role: 'AI Intern',
    company: 'Fraunhofer IPK · Berlin, Germany',
    desc: 'Integrating intelligent virtual agents in metaverse environments. Building RAG pipelines for context-aware interactions, connecting LLMs with structured 2D/3D data sources, and supporting Digital Twin and Digital Product Passport workflows.',
    tags: ['RAG', 'LLMs', 'Digital Twin', 'Python', 'Metaverse'],
  },
  {
    date: 'Jul 2024 – Apr 2025',
    role: 'Software Developer',
    company: 'CodingPro · Bengaluru, India',
    desc: 'Engineered scalable AI-powered web applications with FastAPI and JavaScript. Developed data processing pipelines using NumPy and Pandas, and improved model accuracy by ~20% through feature engineering.',
    tags: ['FastAPI', 'Python', 'NumPy', 'Pandas', 'REST APIs'],
  },
  {
    date: 'Feb 2024 – May 2024',
    role: 'Software Developer, Project Trainee',
    company: 'ISRO · Bengaluru, India',
    desc: 'Developed NLP-based analytical components integrated into larger space systems. Designed structured data models for reliability analysis (FMECA) in a highly regulated research environment.',
    tags: ['NLP', 'FMECA', 'Data Modeling', 'Research'],
  },
  {
    date: 'Jun 2023 – Jul 2023',
    role: 'Full Stack Intern',
    company: 'Municipal Corporation of Delhi · Delhi, India',
    desc: 'Developed smart city web applications, integrating backend services with real-time analytics for urban data systems.',
    tags: ['Full Stack', 'RESTful Services', 'Smart City'],
  },
]

export const projects = [
  {
    icon: '🧠',
    title: 'Decision Support System for Knowledge Retrieval',
    desc: 'RAG-based system that retrieves, ranks, and synthesises domain knowledge to power AI-assisted decision-making — built with vector stores and LLM orchestration.',
    tags: ['RAG', 'LangChain', 'Python', 'Vector DB'],
    link: 'https://github.com/gigs-codes/Decision-Support-System-for-Knowledge-Retrieval-RAG-Based-',
  },
  {
    icon: '🔍',
    title: 'Explainable AI for Network Intrusion Detection',
    desc: 'Combines ML-based threat detection with SHAP/LIME explanations so security analysts can understand exactly why traffic is flagged — bridging performance with interpretability.',
    tags: ['XAI', 'SHAP', 'Scikit-learn', 'Security'],
    link: 'https://github.com/gigs-codes/E-XAI-Explainable-AI-for-Network-Intrusion-Detection',
  },
  {
    icon: '😴',
    title: 'AI Driver Drowsiness Detection',
    desc: 'Real-time facial landmark tracking detects eye closure patterns and fatigue signals, triggering audio-visual wake-up alerts to prevent accidents before they happen.',
    tags: ['OpenCV', 'dlib', 'Python', 'Real-time CV'],
    link: 'https://github.com/gigs-codes/AI-Driver-Drowsiness-Detection-Wake-Up-Alert-System',
  },
  {
    icon: '💬',
    title: 'RAG Knowledge Assistant',
    desc: 'A conversational knowledge assistant that grounds LLM responses in your own documents — chunks, embeds, retrieves, and generates with full context awareness.',
    tags: ['RAG', 'OpenAI', 'FAISS', 'Python'],
    link: 'https://github.com/gigs-codes/rag-knowledge-assistant',
  },
  {
    icon: '🏡',
    title: 'MLOps House Price Prediction',
    desc: 'End-to-end ML pipeline with automated retraining, model versioning, and API serving — a full MLOps blueprint for production-grade regression at scale.',
    tags: ['MLflow', 'FastAPI', 'Docker', 'Sklearn'],
    link: 'https://github.com/gigs-codes/mlops-house-price',
  },
  {
    icon: '📊',
    title: 'Automated Job Market Intelligence',
    desc: 'Scrapes, aggregates, and analyses job postings at scale — extracting skill trends, salary signals, and hiring patterns from the live market so you can navigate it with data.',
    tags: ['Web Scraping', 'NLP', 'Pandas', 'Analytics'],
    link: 'https://github.com/gigs-codes/Automated-Job-Market-Intelligence-System',
  },
  {
    icon: '🛒',
    title: 'Amazon Product Data Scraper',
    desc: 'Automated pipeline that extracts product listings, pricing history, reviews, and rankings from Amazon at scale — structured for downstream analytics and price alerting.',
    tags: ['BeautifulSoup', 'Selenium', 'Python', 'Data Pipeline'],
    link: 'https://github.com/gigs-codes/Automated-Amazon-Product-Data-Scraper',
  },
  {
    icon: '💪',
    title: 'AI Push-Up Trainer',
    desc: 'Pose estimation meets personal fitness — the system counts reps, evaluates form in real-time, and gives corrective audio feedback using body keypoint geometry.',
    tags: ['MediaPipe', 'OpenCV', 'Pose Estimation', 'Python'],
    link: 'https://github.com/gigs-codes/ai-pushup-trainer',
  },
  {
    icon: '🎤',
    title: 'AI Interview Coach',
    desc: 'Simulates technical and behavioural interviews, scores responses with an LLM judge, and delivers structured feedback on clarity, depth, and confidence — your private interview sparring partner.',
    tags: ['LLM', 'NLP', 'FastAPI', 'Python'],
    link: 'https://github.com/gigs-codes/ai-interview-coach',
  },
]

export const publications = [
  {
    venue: 'INCOFT — International Conference on Future Technologies',
    year: '2025',
    title: 'Early Detection of Dyslexia Using Multimodal Analysis',
    desc: 'A multimodal ML framework combining eye-tracking signals, handwriting kinematics, and linguistic pattern analysis to identify dyslexia markers earlier and more reliably than single-modality approaches.',
    tags: ['Multimodal AI', 'Signal Processing', 'NLP', 'Healthcare AI'],
    link: 'https://www.scitepress.org/publishedPapers/2025/136156/pdf/index.html',
  },
  {
    venue: 'IJIRCCE — International Journal of Innovative Research in Computer & Communication Engineering',
    year: '2023',
    title: 'WeSAFE: Enhancing Human Security Mobile Application',
    desc: 'A safety-focused mobile application leveraging real-time location tracking, emergency SOS, and intelligent threat context to enhance personal security — designed for vulnerable users and high-risk environments.',
    tags: ['Mobile Security', 'Real-time Systems', 'Android', 'Alert Systems'],
    link: 'https://www.ijircce.com/admin/main/storage/app/pdf/cRBzxpIlneYeHMeXX6aqAaIZqx6HTIAB2GuvdvPz.pdf',
  },
]

export const skills = [
  'Python', 'JavaScript', 'HTML / CSS', 'PyTorch', 'TensorFlow', 'OpenCV',
  'Scikit-learn', 'NumPy', 'Pandas', 'FastAPI', 'Flask', 'REST APIs',
  'SciPy', 'Matplotlib', 'LLMs', 'RAG', 'Docker', 'Git', 'Linux', 'AWS',
  'CI/CD', 'Digital Twin', 'Signal Proc.', 'Model Eval.',
]

export const education = [
  {
    degree: 'M.Sc. in Artificial Intelligence',
    school: 'Brandenburgische Technische Universität Cottbus',
    period: 'Oct 2025 – Present · Germany',
    desc: 'Neural Signal Analysis · Image Processing & Computer Vision · Causal Data Science · Modeling of Perception and Action',
  },
  {
    degree: 'B.Sc. in Computer Science',
    school: 'M.S. Ramaiah University of Applied Sciences',
    period: '2021 – 2024 · Bengaluru, India',
    desc: 'GPA: 1.9 / 4.0 (equivalent grading scale). Strong foundation in algorithms, data structures, software engineering, and applied machine learning.',
  },
]

export const lifestyle = [
  { caption: 'Every great idea starts with a warm cup ☕', img: 'coffee1' },
  { caption: 'Sunrise coding sessions — the best commits happen at dawn 🌅', img: 'work' },
  { caption: 'Refueling between neural networks and nature 🌿', img: 'coffee2' },
]
