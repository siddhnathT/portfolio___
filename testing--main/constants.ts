import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, SocialLink, CertificationItem } from './types';

export const PERSONAL_INFO = {
  name: "Siddhnath Arjun Tiwari",
  title: "AI, IoT & Full-Stack Developer",
  email: "siddhnathtiwari7@gmail.com",
  phone: "+49 015510833938",
  location: "Magdeburg, Germany",
  about: "Innovative technology professional seeking to leverage expertise in AI, IoT, and full-stack development to create cutting-edge smart systems. With hands-on experience in computer vision, blockchain, and cybersecurity, I aim to develop secure, intelligent solutions that bridge hardware and software for real-world impact."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/siddhnath-tiwari', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/siddhnatht', icon: 'github' },
  { name: 'Email', url: 'mailto:siddhnathtiwari7@gmail.com', icon: 'mail' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Data Quality Specialist",
    company: "Deep Cognition",
    period: "Aug 2023 – Sep 2024",
    description: [
      "Built OCR models with Tesseract, EasyOCR, and OpenCV for data extraction.",
      "Visualized data using Power BI, Matplotlib, and Seaborn.",
      "Fine-tuned LLMs with Hugging Face, PyTorch, and TensorFlow.",
      "Optimized pipelines using Pandas, NumPy, and SQL.",
      "Merged CV (OpenCV, YOLO) and NLP (SpaCy, NLTK) for document automation."
    ],
    skills: ["OCR", "LLMs", "Python", "Power BI", "TensorFlow"]
  },
  {
    title: "Web Application Penetration Testing Intern",
    company: "Indian Server Pvt. Ltd.",
    period: "Mar 2023",
    description: [
      "Conducted vulnerability assessments using Burp Suite, OWASP ZAP, Nmap, Wireshark, and Nessus.",
      "Performed network scanning, traffic analysis, and port enumeration.",
      "Identified injection flaws, authentication issues, and misconfigurations.",
      "Prepared security reports with risk assessments and mitigation strategies."
    ],
    skills: ["Burp Suite", "OWASP", "Network Security", "Nmap"]
  },
  {
    title: "Data Analysis Intern",
    company: "Deloitte",
    period: "Jun 2022 – Aug 2022",
    description: [
      "Performed data analysis using Excel, Python, and MATLAB for comprehensive analytics.",
      "Cleaned and transformed data with Python (Pandas, NumPy), SQL, and MATLAB.",
      "Automated tasks using Python scripts, MATLAB automation, and Power Query."
    ],
    skills: ["Python", "SQL", "MATLAB", "Excel"]
  },
  {
    title: "Consulting Intern (Strategy & UX Design)",
    company: "Accenture",
    period: "Jan 2022 – Apr 2022",
    description: [
      "Created stakeholder presentations using PowerPoint and Canva.",
      "Developed business strategies using SWOT, PESTLE, and Porter’s Five Forces.",
      "Managed projects with Jira and Trello using agile methodologies."
    ],
    skills: ["Strategy", "UX Design", "Agile", "Jira"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "AI Malaria Detection",
    period: "Academic Project",
    description: [
      "Web-based malaria detection using VGG19 transfer learning.",
      "Quickly identifies malaria from blood smear images with high accuracy.",
      "Features a user-friendly web interface for instant results."
    ],
    techStack: ["VGG19", "Transfer Learning", "Flask", "Medical AI"],
    kpi: "98% Accuracy",
    architectureImage: "User -> Web UI -> Flask -> VGG19 Model -> Prediction"
  },
  {
    title: "Handwriting Recognition",
    period: "Academic Project",
    description: [
      "Machine learning model for recognizing handwritten text.",
      "Converts handwritten characters or digits into digital text accurately.",
      "Useful for digitizing notes, forms, and historical documents."
    ],
    techStack: ["CNN", "Deep Learning", "OCR", "Python"],
    kpi: "95% Recognition Rate",
    architectureImage: "Input Image -> Preprocessing -> CNN -> Softmax -> Text Output"
  },
  {
    title: "Hybrid Approach for Liver Tumor Detection",
    period: "Feb 2023 – Dec 2023",
    description: [
      "Utilized ResNet50 and VGG16 CNN architectures for CT image feature extraction.",
      "Implemented advanced image segmentation techniques.",
      "Developed precision-recall balanced model for clinical diagnostic applications."
    ],
    techStack: ["CNN", "ResNet50", "VGG16", "Python"],
    kpi: "97% F1-Score",
    architectureImage: "CT Scan -> Preprocessing -> ResNet50/VGG16 -> Segmentation -> Tumor Mask"
  },
  {
    title: "IoT-Based Medical Monitoring System",
    period: "Aug 2022 – Nov 2022",
    description: [
      "Developed an IoT-enabled real-time patient monitoring system.",
      "Integrated biomedical sensors to measure heart rate, temperature, and SpO2.",
      "Implemented data transmission to a cloud dashboard for continuous monitoring."
    ],
    techStack: ["IoT", "Sensors", "Cloud", "Embedded Systems"],
    kpi: "Real-time Latency < 200ms",
    architectureImage: "Sensors -> Microcontroller -> Wi-Fi -> Cloud Dashboard -> Alert System"
  },
  {
    title: "CratePass: Blockchain Gate Pass Management",
    period: "Aug 2024 – Oct 2024",
    description: [
      "Developed decentralized application (dApp) on Stellar blockchain.",
      "Implemented smart contracts using Rust and Soroban SDK.",
      "Ensured tamper-proof record keeping for secure access management."
    ],
    techStack: ["Blockchain", "Stellar", "Rust", "Soroban SDK"],
    kpi: "100% Tamper-Proof",
    architectureImage: "User -> Frontend -> Soroban SDK -> Stellar Network -> Smart Contract"
  },
  {
    title: "Aptos Blockchain To-Do List Application",
    period: "Sep 2024 – Oct 2024",
    description: [
      "Built full-stack dApp on Aptos blockchain.",
      "Implemented smart contracts for task management.",
      "Designed user-friendly interface with secure wallet integration."
    ],
    techStack: ["Aptos", "Blockchain", "Smart Contracts"],
    kpi: "Secure Wallet Integration",
    architectureImage: "User -> Wallet -> Aptos Client -> Move Module -> Blockchain State"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "SQL", "R", "Rust"]
  },
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning", "Computer Vision", "LLMs", "NLP (spaCy, NLTK)", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    category: "Web & Cloud",
    items: ["Web Development", "Cloud Computing", "REST APIs", "Docker", "Google Cloud"]
  },
  {
    category: "Data Analytics",
    items: ["Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn", "MATLAB", "MongoDB"]
  },
  {
    category: "Security Tools",
    items: ["Nmap", "Burp Suite", "OWASP ZAP", "Wireshark", "Nessus"]
  },
  {
    category: "Hardware / IoT",
    items: ["IoT Systems", "Embedded Systems", "Sensor Networks"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Medical Systems Engineering",
    institution: "Otto-von-Guericke Universität Magdeburg, Germany",
    period: "April 2025 – Present"
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Visvesvaraya Technological University, Bangalore",
    period: "Aug 2019 – Jul 2023"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Google Cloud Skill Badges",
    period: "2022 - Present",
    description: "Verified skill badges for Agentic AI, Cloud Databases, and Infrastructure.",
    link: "https://www.skills.google/public_profiles/d80c0530-2bc9-439a-97dc-9dbf012ae17a"
  },
  {
    title: "Strategy Consulting Virtual Internship",
    period: "Sep 2022",
    description: "Accenture Australia - Market entry strategy & analysis.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Australia/MD2p8dDih7zoQ9KRC_Accenture%20Australia_sPYePqsxtYhAib4Lm_1662718306482_completion_certificate.pdf"
  },
  {
    title: "Elements of AI",
    period: "Aug 2021",
    description: "University of Helsinki - AI fundamentals & ethics.",
    link: "https://certificates.mooc.fi/validate/ais3wnkgyx8"
  },
  {
    title: "Blockchain Developer",
    period: "Mar 2022",
    description: "Built decentralized applications on Aptos blockchain"
  }
];

export const RESEARCH_INTERESTS = [
  "AR for Surgery & Organ Deformation Modeling",
  "IoT Systems & Smart Monitoring",
  "Deep Learning in Healthcare",
  "Machine Unlearning",
  "UAV Swarm Coordination",
  "Gaussian Processes for Anomaly Detection"
];

export const PERSONAL_INTERESTS = [
  "Learn by doing",
  "Daily Self-Improvement",
  "Interdisciplinary Collaboration",
  "Coding & Tech Blogging",
  "Chess & Strategy Games"
];

export const QA_DATASET = [
  {
    questions: ["who is siddhnath", "who are you", "tell me about yourself"],
    answer: "Siddhnath Arjun Tiwari is a Master’s student in Medical Systems Engineering at OVGU, with strong experience in AI, machine learning, IoT, and medical technology. He has worked on projects like AI-based malaria detection, handwriting recognition, liver tumor detection, and IoT systems."
  },
  {
    questions: ["what projects", "list projects", "work done"],
    answer: "He has completed several applied AI and IoT projects, including:\n- Web-based AI Malaria Detection using VGG19 transfer learning\n- Handwriting recognition using machine learning\n- Liver tumor detection using hybrid CNN + ResNet\n- IoT-based electric theft detection\n- OCR accuracy improvement using LLMs\n- AI projects for IRS (USA) client"
  },
  {
    questions: ["malaria", "malaria detection"],
    answer: "It is a web-based system that uses VGG19 transfer learning to detect malaria from blood smear images. Users upload an image, and the model instantly predicts whether the cell is infected, providing a fast and accessible digital diagnostic tool."
  },
  {
    questions: ["handwriting", "handwriting recognition"],
    answer: "It is a machine learning model that recognizes handwritten digits or characters and converts them to digital text. It is designed for automation and fast digitization of notes and documents."
  },
  {
    questions: ["research", "interests", "research interests"],
    answer: "His interests include augmented reality for surgery, organ deformation modeling, IoT systems, anomaly detection, swarm UAV coordination, and machine unlearning."
  },
  {
    questions: ["technologies", "tech stack", "tools"],
    answer: "Deep learning (TensorFlow, Keras), transfer learning models like VGG19, CNNs, IoT sensors, AI for OCR, UAV path planning algorithms, and AR visualization methods."
  },
  {
    questions: ["motivation", "drive", "goal"],
    answer: "He believes in “learning by doing” and strives to improve daily. He loves working on interdisciplinary projects that combine AI, IoT, AR, and medical technology."
  },
  {
    questions: ["education", "background", "study"],
    answer: "He holds a Bachelor’s in Electronics and Communication Engineering from SVCE Bangalore and is pursuing his Master’s at OVGU in Medical Systems Engineering."
  },
  {
    questions: ["industry", "experience", "work"],
    answer: "Yes. He worked with an AI-based company where he handled OCR, deep learning, and contributed to a project for the IRS (USA)."
  },
  {
    questions: ["ar", "augmented reality", "medical ar"],
    answer: "He explores using AR to enhance surgical accuracy, enable real-time visualization, and model organ deformation during minimally invasive procedures."
  }
];
