const PROJECTS = [
  {
    name: "User Registration App",
    emoji: "📱",
    tag: "Android",
    desc: "built an android app with jetpack compose — real-time validation, material 3, the whole vibe. users loved the snackbar feedback system.",
    tags: ["Kotlin", "Jetpack Compose", "Android SDK", "Material 3"],
    link: "https://github.com/anishakumari6/user_registration_app",
    date: "Dec 2025"
  },
  {
    name: "Crash Dataset Analysis & Interactive Dashboard",
    emoji: "🤟",
    tag: "Power BI",
    desc: "Designed and deployed a fully interactive Power BI dashboard featuring KPIs, slicers, drill-through pages, and dynamic visualizations, enabling stakeholders to explore data efficiently and reducing insight discovery time. 🧠",
    tags: ["Power BI", "Power Query", "DAX", "Data Modeling", "Interactive Dashboards"],
    link: "https://github.com/AnishaKumari6/CRASH_DATASET_ANALYSIS",
    date: "Nov 2025"
  },
  {
    name: "Pathfinding Puzzle Solver",
    emoji: "🗺️",
    tag: "Python",
    desc: "made dijkstra, BFS and DFS actually look cool. real-time grid, obstacle placement, and <30ms renders. algorithms finally hit different.",
    tags: ["Python"," Pygame"," Graph Algorithms (BFS, DFS, Dijkstra)"],
    link: "https://github.com/AnishaKumari6/PathFinding_Puzzle_Solver",
    date: "Sep 2025"
  }
];

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

// Category-wise tech stack (flat list with category labels)
const TECH_CATEGORIES = [
  {
    label: "Languages",
    color: "#E8500A",
    items: [
      { name: "Python",     logo: BASE + "python/python-original.svg" },
      { name: "Java",       logo: BASE + "java/java-original.svg" },
      { name: "Kotlin",     logo: BASE + "kotlin/kotlin-original.svg" },
      { name: "C",          logo: BASE + "c/c-original.svg" },
      { name: "C++",        logo: BASE + "cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", logo: BASE + "javascript/javascript-original.svg" },
    ]
  },
  {
    label: "Web",
    color: "#0ea5e9",
    items: [
      { name: "HTML",    logo: BASE + "html5/html5-original.svg" },
      { name: "CSS",     logo: BASE + "css3/css3-original.svg" },
      { name: "React",   logo: BASE + "react/react-original.svg" },
    ]
  },
  {
    label: "ML / Data Science",
    color: "#a855f7",
    items: [
      { name: "NumPy",       logo: BASE + "numpy/numpy-original.svg" },
      { name: "Pandas",      logo: BASE + "pandas/pandas-original.svg" },
      { name: "Scikit-learn",logo: BASE + "scikitlearn/scikitlearn-original.svg" },
      { name: "Matplotlib",  logo: BASE + "matplotlib/matplotlib-original.svg" },
      { name: "OpenCV",      logo: BASE + "opencv/opencv-original.svg" },
    ]
  },
  {
    label: "Mobile",
    color: "#22c55e",
    items: [
      { name: "Kotlin",  logo: BASE + "kotlin/kotlin-original.svg" },
      { name: "Android", logo: BASE + "androidstudio/androidstudio-original.svg" },
    ]
  },
  {
    label: "Tools & DevOps",
    color: "#f59e0b",
    items: [
      { name: "Git",     logo: BASE + "git/git-original.svg" },
      { name: "GitHub",  logo: BASE + "github/github-original.svg" },
      { name: "Jupyter", logo: BASE + "jupyter/jupyter-original.svg" },
      { name: "VS Code", logo: BASE + "vscode/vscode-original.svg" },
      { name: "Linux",   logo: BASE + "linux/linux-original.svg" },
    ]
  },
  {
    label: "Analytics & Office",
    color: "#06b6d4",
    items: [
      { name: "Power BI",  logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "MS Office", logo: "images/msofficeicon.png" },
    ]
  }
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2023 — Jul 2027",
    icon: "🎓",
    color: "#6C3EFF",
    current: true,
    highlights: ["CGPA: 8.02", "DSA", "Machine Learning", "Android Dev", "DBMS"]
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Army Public School, SP Marg",
    location: "Lucknow, India",
    period: "Apr 2020 — Mar 2022",
    icon: "📚",
    color: "#E8500A",
    current: false,
    highlights: ["Science Stream", "91%"]
  },
  {
    degree: "Matriculation (Class X)",
    school: "Army Public School, SP Marg",
    location: "Lucknow, India",
    period: "Apr 2019 — Mar 2020",
    icon: "🏫",
    color: "#22c55e",
    current: false,
    highlights: ["91%"]
  }
];

const TRAINING = [
  {
    title: "Mern Stack + Cloud Computing + Devops",
    period: "Jan 2026 — Feb 2026",
    icon: "☁️",
    color: "#0ea5e9",
    badge: "latest",
    points: [
      "Built full-stack apps using MERN",
      "Deployed apps on cloud platforms",
      "Hands-on practice with cloud tools and real-world test scenarios"
    ],
    // Add cert image: previewImg: "images/certs/cipher2.jpg"
    previewImg: null,
    previewBg: "#f0f8ff",
    gradient: "linear-gradient(135deg, #0ea5e9, #6C3EFF)",
    emoji: "☁️",
    skills: ["Cloud Computing", "Software Testing", "DSA", "QA"]
  },
  {
    title: "Data Structures & Algorithms",
    org: "Spleens Technologies & Education Pvt. Ltd.",
    period: "Jun 2025 — Jul 2025",
    icon: "💡",
    color: "#6C3EFF",
    badge: null,
    points: [
      "6-week structured DSA program covering 8+ major topics",
      "Arrays, Strings, Linked Lists, Trees, Graphs, Sorting & Searching",
      "100+ problems solved with focus on time & space complexity"
    ],
    // Add cert image: previewImg: "images/certs/cipher1.jpg"
    previewImg: "images/splen.png",
    previewBg: "#f5f0ff",
    gradient: "linear-gradient(135deg, #6C3EFF, #a855f7)",
    emoji: "💡",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "100+ Problems"]
  }
];

const CERTIFICATES = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    year: "Mar 2026",
    emoji: "🏆",
    color: "#F80000",
    gradient: "linear-gradient(135deg, #F80000, #ff6b35)",
    previewBg: "#fff0f0",
    // Add your cert: previewImg: "images/certs/oracle.jpg"
    previewImg: "images/cloud.png",
    skills: ["Cloud", "EC2", "S3", "IAM", "Security", "Scaling"]
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "Oct 2025",
    emoji: "🏅",
    color: "#332dab",
    previewBg: "#f5f0ff",
    gradient: "linear-gradient(135deg, #6C3EFF, #a855f7)",
    // Add your cert: previewImg: "images/certs/oracle.jpg"
    previewImg: "images/oracle.png",
    skills: ["Cloud","OracleCourse"]
  },
  {
    name: "NPTEL — Social Networks",
    issuer: "NPTEL · IIT",
    year: "Apr 2025",
    emoji: "🎓",
    color: "#0066CC",
    gradient: "linear-gradient(135deg, #0066CC, #00aaff)",
    previewBg: "#f0f6ff",
    // previewImg: "images/certs/nptel.jpg",
    previewImg: "images/nptel.png",
    skills: ["Social Network Analysis", "Graph Theory", "Network Science"]
  },
  {
    name: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
    year: "Feb 2025",
    emoji: "✅",
    color: "#2EC866",
    gradient: "linear-gradient(135deg, #2EC866, #00ff88)",
    previewBg: "#f0fff5",
    // previewImg: "images/certs/hackerrank.jpg",
    previewImg: "images/java.png",
    skills: ["Java", "OOP", "Problem Solving"]
  }
];

const CONTACT_CARDS = [
  { icon: "fas fa-envelope",  label: "email me",       value: "anisha10021kumari@gmail.com",      href: "mailto:anisha10021kumari@gmail.com",              color: "#E8500A" },
  { icon: "fab fa-linkedin-in",label:"linkedin",        value: "anisha-kumari5",  href: "https://www.linkedin.com/in/anisha-kumari5/",   color: "#0077B5" },
  { icon: "fab fa-github",    label: "github",          value: "AnishaKumari6",                 href: "https://github.com/AnishaKumari6",            color: "#ffffff" },
  
];
