import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Siddhnath Arjun Tiwari",
  title: "AI, IoT & Medical Systems Engineer",
  contact: {
    email: "siddhnathtiwari7@gmail.com",
    phone: "+49 015510833938",
    location: "Magdeburg, Germany",
  },
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/siddhnath-tiwari", icon: "linkedin" },
    { platform: "GitHub", url: "https://github.com/siddhnatht", icon: "github" },
    { platform: "Email", url: "mailto:siddhnathtiwari7@gmail.com", icon: "mail" }
  ],
  objective: "Innovative technology professional seeking to leverage expertise in AI, IoT, and full-stack development to create cutting-edge smart systems. With hands-on experience in computer vision, blockchain, and cybersecurity, I aim to develop secure, intelligent solutions that bridge hardware and software for real-world impact. Passionate about applying machine learning and emerging technologies to solve complex challenges in medical systems and industrial applications.",
  experience: [
    {
      role: "Research Assistant",
      company: "Universitätsklinikum Magdeburg",
      location: "Magdeburg, Germany",
      duration: "Dec 2025 – Present",
      points: [
        "Conducting research on AI-driven medical image analysis and diagnostic systems",
        "Developing algorithms for processing clinical data and biosignals",
        "Collaborating with medical professionals to integrate engineering solutions into clinical workflows"
      ]
    },
    {
      role: "Data Quality Specialist",
      company: "Deep Cognition",
      location: "Bangalore",
      duration: "Aug 2023 – Sep 2024",
      points: [
        "Built OCR models with Tesseract, EasyOCR, and OpenCV for data extraction",
        "Visualized data using Power BI, Matplotlib, and Seaborn",
        "Fine-tuned LLMs with Hugging Face, PyTorch, and TensorFlow",
        "Optimized pipelines using Pandas, NumPy, and SQL",
        "Merged CV (OpenCV, YOLO) and NLP (SpaCy, NLTK) for document automation"
      ]
    },
    {
      role: "Web Application Penetration Testing Intern",
      company: "Indian Server Pvt. Ltd.",
      location: "Vijayawada",
      duration: "Mar 2023",
      points: [
        "Conducted vulnerability assessments using Burp Suite, OWASP ZAP, Nmap, Wireshark, and Nessus",
        "Performed network scanning, traffic analysis, and port enumeration",
        "Identified injection flaws, authentication issues, and misconfigurations",
        "Prepared security reports with risk assessments and mitigation strategies",
        "Followed OWASP Top 10 and CVE standards"
      ]
    },
    {
      role: "Data Analysis Intern",
      company: "Deloitte",
      location: "Bangalore",
      duration: "Jun 2022 – August 2022",
      points: [
        "Performed data analysis using Excel, Python, and MATLAB for comprehensive analytics",
        "Cleaned and transformed data with Python (Pandas, NumPy), SQL, and MATLAB",
        "Automated tasks using Python scripts, MATLAB automation, and Power Query"
      ]
    },
    {
      role: "Consulting Intern (Strategy & UX Design)",
      company: "Accenture",
      location: "Bangalore",
      duration: "Jan 2022 – Apr 2022",
      points: [
        "Created stakeholder presentations using PowerPoint and Canva",
        "Developed business strategies using SWOT, PESTLE, and Porter’s Five Forces",
        "Managed projects with Jira and Trello using agile methodologies"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Medical Systems Engineering",
      institution: "Otto-von-Guericke Universität Magdeburg",
      location: "Germany",
      duration: "April 2025 – Present"
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Visvesvaraya Technological University",
      location: "Bangalore",
      duration: "Aug 2019 – Jul 2023"
    }
  ],
  projects: [
    {
      title: "Hybrid Approach for Liver Tumor Detection using CNN and ResNet",
      date: "Feb 2023 – Dec 2023",
      description: [
        "Utilized ResNet50 and VGG16 CNN architectures for CT image feature extraction",
        "Implemented advanced image segmentation techniques, achieving 97% F1-score",
        "Developed precision-recall balanced model for clinical diagnostic applications"
      ]
    },
    {
      title: "Smart Health Monitoring System (IoT & Medical)",
      date: "Aug 2022 – Nov 2022",
      description: [
        "Designed a real-time patient monitoring system using ESP32 and medical sensors (ECG, SpO2, Temperature)",
        "Developed a cloud-based dashboard for doctors to view vital signs remotely",
        "Implemented automated alerts for abnormal readings using edge computing algorithms"
      ]
    },
    {
      title: "CratePass: Blockchain Gate Pass Management System",
      date: "Aug 2024 – Oct 2024",
      description: [
        "Developed decentralized application (dApp) on Stellar blockchain",
        "Implemented smart contracts using Rust and Soroban SDK",
        "Ensured tamper-proof record keeping for secure access management"
      ]
    },
    {
      title: "Aptos Blockchain To-Do List Application",
      date: "Sep 2024 – Oct 2024",
      description: [
        "Built full-stack dApp on Aptos blockchain",
        "Implemented smart contracts for task management",
        "Designed user-friendly interface with secure wallet integration"
      ]
    }
  ],
  skills: [
    { category: "AI & ML", skills: "TensorFlow, PyTorch, OpenCV, YOLO, Hugging Face, LLMs", level: 90 },
    { category: "Data Analytics", skills: "Pandas, NumPy, Power BI, SQL, MATLAB", level: 85 },
    { category: "Programming", skills: "Python, Java, C++, Rust", level: 88 },
    { category: "Web & Cloud", skills: "React, Node, Cloud Computing, REST APIs", level: 75 },
    { category: "Security", skills: "Burp Suite, OWASP ZAP, Nmap, Wireshark", level: 80 },
    { category: "IoT & Hardware", skills: "Embedded Systems, Sensor Networks", level: 70 }
  ],
  certifications: [
    { name: "Elements of AI", date: "Aug 2021", description: "Probability concepts & AI applications" },
    { name: "Creative Problem Solving", date: "Oct 2021", description: "Applied techniques for effective challenge resolution" },
    { name: "Aptos Bootcamp", date: "Mar 2022", description: "Built decentralized applications on Aptos blockchain" },
    { name: "Google Cloud (4 Certifications)", date: "Jan 2022", description: "Agentic AI apps with Cloud Databases" }
  ]
};
