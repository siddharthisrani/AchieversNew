/* =====================================================
   DNDC — Course catalogue data
   One object per program. course.js reads ?program= and
   renders the hero, stack chips and the stacked tiers.
   Each tier => one duration track with its own modules.
   ===================================================== */
   import { Courses } from "@/types/course";


export const courses: Courses= {

  /* ============================================================= */
  /* MERN FULL STACK  (reference build — fully detailed)           */
  /* ============================================================= */
  mern: {
    slug: "mern",
    name: 'MERN Full Stack',
    kicker: 'Flagship Program',
    category: 'Full Stack Development',
    titleLines: ['MERN Full', 'Stack'],
    sub: 'Build. Scale. Succeed with MERN. Production-grade products end-to-end — MongoDB, Express, React, and Node — paired with the engineering culture you\'d find at a real product team.',
    fee: '₹ 5,000',
    emi: '₹ 1,250 /mo',
    mode: 'Offline & Live',
    cohort: '22 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Demonstrate your expertise through real-world projects and practical software development skills.",
  issuer: "Data & Development Center",
  duration: "8 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-MERN",

  features: [
  {
    type: "verification",
    title: "Industry Verified",
    description: "Recognized upon successful completion of practical assessments."
  },
  {
    type: "projects",
    title: "Real World Projects",
    description: "Develop production-ready MERN applications."
  },
  {
    type: "skills",
    title: "Full Stack Skills",
    description: "Master React, Node.js, Express and MongoDB."
  },
  {
    type: "recognition",
    title: "Lifetime Recognition",
    description: "Showcase your achievement with confidence."
  }
]
},
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind', 'Redux', 'Docker', 'Kafka', 'Kubernetes', 'Git & GitHub', 'Figma', 'DSA'],
    tiers: [
      {
        name: 'Basic Program',
        duration: '2 Months',
        level: 'Foundation',
        blurb: 'The bedrock. Get fluent in the modern web and the logic that powers every application you\'ll ever build.',
        modules: [
          { t: 'HTML', d: 'Structure the web — build structured, beautifully designed responsive websites.' },
          { t: 'CSS', d: 'Design with style — beautiful, responsive, and user-friendly interfaces.' },
          { t: 'JavaScript', d: 'Add interactivity and dynamic behaviour to websites.' },
          { t: 'C++ & OOPS', d: 'Build strong object-oriented programming fundamentals.' },
        ],
      },
      {
        name: 'Advance Program',
        duration: '3 Months',
        level: 'Intermediate',
        blurb: 'Where logic meets the modern frontend. Strengthen problem-solving and start building real interfaces with React.',
        modules: [
          { t: 'Master Programming Logic', d: 'Strengthen programming logic and problem-solving ability.' },
          { t: 'Git / GitHub & Figma', d: 'Use Figma for UI/UX layouts and Git for version control to manage and track code.' },
          { t: 'Tailwind CSS', d: 'Design fast and modern UI components.' },
          { t: 'Advance JavaScript', d: 'Learn advanced JavaScript concepts to build scalable applications.' },
          { t: 'Basic React', d: 'Learn React to create fast and interactive user interfaces.' },
        ],
      },
      {
        name: 'Professional Program',
        duration: '4 Months',
        level: 'Professional',
        blurb: 'The full stack comes together. Frontend, backend, and database — wired into one real-time project.',
        modules: [
          { t: 'Foundations of the Web', d: 'Structure the foundation of modern, responsive web pages.' },
          { t: 'Git / GitHub & Figma', d: 'Design UI/UX layouts and manage code with version control.' },
          { t: 'Master Programming Logic', d: 'Build strong programming logic and problem-solving skills.' },
          { t: 'Advance JavaScript', d: 'Advanced JavaScript concepts to build scalable applications.' },
          { t: 'React', d: 'Create fast and interactive user interfaces.' },
          { t: 'Node.js', d: 'Build backend services using JavaScript.' },
          { t: 'MongoDB', d: 'Manage and store data in NoSQL databases.' },
          { t: 'Real-time Project', d: 'Build a complete real-time project using frontend and backend technologies.' },
        ],
      },
      {
        name: 'Expert Program',
        duration: '6 Months',
        level: 'Advanced',
        blurb: 'Build real projects, gain real experience. DSA, full MERN delivery, and job-readiness baked in.',
        modules: [
          { t: 'DSA with C++', d: 'Master data structures and algorithms for coding interviews.' },
          { t: 'Design the Web', d: 'Build structured and beautifully designed responsive websites.' },
          { t: 'Power the Web', d: 'Create dynamic and interactive web experiences.' },
          { t: 'Power the Web using React', d: 'Develop fast and modern component-based user interfaces.' },
          { t: 'Node.js', d: 'Build scalable backend services using JavaScript.' },
          { t: 'Power Your Data — MongoDB', d: 'Manage and store data in NoSQL databases.' },
          { t: 'Real Projects', d: 'A beginner project plus a complete full-stack mini project for real-world experience.' },
          { t: 'Career Support', d: 'Resume, ATS & LinkedIn optimization and mock interviews for job readiness.' },
        ],
      },
      {
        name: 'Industrial Program',
        duration: '8 Months',
        level: 'Industrial',
        blurb: 'Build. Practice. Launch. The complete industrial track — DevOps, scale, and a full e-commerce build.',
        modules: [
          { t: 'Design the Web', d: 'Structure the foundation of modern, responsive web pages.' },
          { t: 'Git / GitHub & Figma', d: 'Design UI/UX layouts and manage code efficiently.' },
          { t: 'Master Programming Logic', d: 'Think like a developer, solve like a pro — DSA for interviews and real coding.' },
          { t: 'Power the Web with React', d: 'Create fast, modern, component-based user interfaces.' },
          { t: 'Node.js', d: 'Code with simplicity and power — backend services in JavaScript.' },
          { t: 'MongoDB', d: 'Power your data — manage and store data in NoSQL databases.' },
          { t: 'Next.js', d: 'Create scalable, fast, and SEO-friendly React applications.' },
          { t: 'Docker, Kafka & Kubernetes', d: 'Build, deploy, and scale modern applications.' },
          { t: 'Industrial Projects', d: '1 Beginner Project, 1 Mini Project, and 1 full-fledged E-Commerce module.' },
          { t: 'Prepare, Present, Get Placed', d: 'Resume building, expert sessions, LinkedIn & Naukri optimization, ATS resume, mock interviews.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* PYTHON FULL STACK                                             */
  /* ============================================================= */
  python: {
    slug: "python",
    name: 'Python Full Stack',
    kicker: 'Full Stack Program',
    category: 'Full Stack Development',
    titleLines: ['Python Full', 'Stack'],
    sub: 'Code. Build. Succeed. Master Python end-to-end — from core programming to secure, scalable, database-driven web applications.',
    fee: '₹ 5,000',
    emi: '₹ 1,250 / mo',
    mode: 'Offline & Live',
    cohort: '22 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Showcase your Python full stack expertise through practical development experience.",
  issuer: "Data & Development Center",
  duration: "8 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-PY",

  features: [
  {
    type: "verification",
    title: "Industry Verified",
    description: "Awarded after successful project evaluation."
  },
  {
    type: "projects",
    title: "Hands-on Applications",
    description: "Build scalable Python web applications."
  },
  {
    type: "skills",
    title: "Backend Expertise",
    description: "Learn Django, APIs and database integration."
  },
  {
    type: "recognition",
    title: "Lifetime Recognition",
    description: "A credential that stays with your career."
  }
]
},
    stack: ['HTML', 'CSS', 'Python', 'C++ & OOPS', 'Django', 'FastAPI', 'React', 'SQL', 'MongoDB', 'Docker', 'Kafka', 'Kubernetes', 'Git & GitHub', 'Figma', 'DSA'],
    tiers: [
      {
        name: 'Basic Program', duration: '2 Months', level: 'Foundation',
        blurb: 'Foundations of the web and powerful backend programming with Python.',
        modules: [
          { t: 'HTML', d: 'Structure the web — build structured, responsive websites.' },
          { t: 'CSS', d: 'Design beautiful, responsive, and user-friendly interfaces.' },
          { t: 'Python', d: 'Learn powerful backend programming fundamentals.' },
          { t: 'C++ & OOPS', d: 'Build strong object-oriented programming fundamentals.' },
        ],
      },
      {
        name: 'Advance Program', duration: '3 Months', level: 'Intermediate',
        blurb: 'Programming logic, core and advanced Python, and database-driven applications.',
        modules: [
          { t: 'Master Programming Logic', d: 'Strengthen programming logic and problem-solving ability.' },
          { t: 'Git / GitHub & Figma', d: 'UI/UX layouts with Figma and version control with Git.' },
          { t: 'Core Python', d: 'Programming fundamentals and OOP concepts.' },
          { t: 'Advance Python', d: 'Develop dynamic, database-driven web applications.' },
        ],
      },
      {
        name: 'Professional Program', duration: '4 Months', level: 'Professional',
        blurb: 'Build secure, scalable, database-driven web apps with a full real-time project.',
        modules: [
          { t: 'Foundations of the Web', d: 'Structure the foundation of modern, responsive web pages.' },
          { t: 'Master Programming Logic', d: 'Build strong programming logic and problem-solving skills.' },
          { t: 'React', d: 'Add interactivity and build dynamic interfaces.' },
          { t: 'Core & Advance Python', d: 'Learn powerful backend programming fundamentals.' },
          { t: 'Databases', d: 'Manage and query databases efficiently for real-world applications.' },
          { t: 'Real-time Project', d: 'Build a complete real-time project using frontend and backend.' },
        ],
      },
      {
        name: 'Expert Program', duration: '6 Months', level: 'Advanced',
        blurb: 'DSA, scalable web applications, and job readiness — build real, ship real.',
        modules: [
          { t: 'DSA with C++ / Python', d: 'Master data structures and algorithms for coding interviews.' },
          { t: 'Design the Web', d: 'Build structured, beautifully designed responsive websites.' },
          { t: 'Power the Web with React', d: 'Develop fast, modern, component-based user interfaces.' },
          { t: 'Code with Python', d: 'Learn powerful backend programming fundamentals.' },
          { t: 'Power Your Data', d: 'Manage and query databases efficiently for real-world applications.' },
          { t: 'Real Projects', d: 'A beginner project plus a complete full-stack mini project.' },
          { t: 'Career Support', d: 'Resume, ATS & LinkedIn optimization and mock interviews.' },
        ],
      },
      {
        name: 'Industrial Program', duration: '8 Months', level: 'Industrial',
        blurb: 'Build. Practice. Launch. DevOps and a full e-commerce module on Python.',
        modules: [
          { t: 'Design & Power the Web', d: 'Responsive pages and dynamic React interfaces.' },
          { t: 'Master Programming Logic', d: 'DSA and problem-solving for interviews and real-world code.' },
          { t: 'Create Scalable Web Apps', d: 'Powerful, easy-to-use backend programming with Python.' },
          { t: 'Databases', d: 'Manage and query databases efficiently for real-world applications.' },
          { t: 'Docker, Kafka & Kubernetes', d: 'Build, deploy, and scale modern applications.' },
          { t: 'Industrial Projects', d: '1 Beginner, 1 Mini, and 1 full-fledged E-Commerce module.' },
          { t: 'Prepare, Present, Get Placed', d: 'Resume, expert sessions, LinkedIn/Naukri, ATS resume, mock interviews.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* JAVA FULL STACK                                              */
  /* ============================================================= */
  java: {
    slug: "java",
    name: 'Java Full Stack',
    kicker: 'Full Stack Program',
    category: 'Full Stack Development',
    titleLines: ['Java Full', 'Stack'],
    sub: 'Design. Develop. Deploy. Build enterprise-ready applications with Java, Spring Boot, Hibernate, and a modern React frontend.',
    fee: '₹ 5,000',
    emi: '₹ 1,250 / mo',
    mode: 'Offline & Live',
    cohort: '22 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Demonstrate your expertise through real-world projects and practical software development skills.",
  issuer: "Data & Development Center",
  duration: "8 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-MERN",

  features: [
  {
    type: "verification",
    title: "Industry Verified",
    description: "Validated through enterprise-style projects."
  },
  {
    type: "projects",
    title: "Enterprise Projects",
    description: "Develop Java full stack applications."
  },
  {
    type: "skills",
    title: "Java Expertise",
    description: "Master Spring Boot, APIs and modern Java."
  },
  {
    type: "recognition",
    title: "Lifetime Recognition",
    description: "A professional credential for your portfolio."
  }
]
},
    stack: ['HTML', 'CSS', 'Java', 'C++ & OOPS', 'Spring', 'Spring Boot', 'Hibernate', 'JSP', 'Servlets', 'React', 'SQL', 'Docker', 'Kafka', 'Kubernetes', 'Git & GitHub', 'DSA'],
    tiers: [
      {
        name: 'Basic Program', duration: '2 Months', level: 'Foundation',
        blurb: 'The web foundation and strong object-oriented Java fundamentals.',
        modules: [
          { t: 'HTML', d: 'Structure the web — build structured, responsive websites.' },
          { t: 'CSS', d: 'Design beautiful, responsive, and user-friendly interfaces.' },
          { t: 'Java', d: 'Build strong object-oriented programming fundamentals.' },
          { t: 'C++ & OOPS', d: 'Strengthen object-oriented programming concepts.' },
        ],
      },
      {
        name: 'Advance Program', duration: '3 Months', level: 'Intermediate',
        blurb: 'Programming logic, core and advanced Java, and the Spring framework.',
        modules: [
          { t: 'Master Programming Logic', d: 'Strengthen programming logic and problem-solving ability.' },
          { t: 'Core Java', d: 'Build strong object-oriented programming fundamentals.' },
          { t: 'Advance Java', d: 'Develop dynamic, database-driven web applications.' },
          { t: 'Spring', d: 'Develop secure, scalable, and database-driven web applications.' },
        ],
      },
      {
        name: 'Professional Program', duration: '4 Months', level: 'Professional',
        blurb: 'Secure, scalable backend systems with Spring, plus a full real-time project.',
        modules: [
          { t: 'Foundations of the Web', d: 'Structure the foundation of modern, responsive web pages.' },
          { t: 'Master Programming Logic', d: 'Build strong programming logic and problem-solving skills.' },
          { t: 'React', d: 'Add interactivity and build dynamic interfaces.' },
          { t: 'Java', d: 'Develop secure and scalable backend systems.' },
          { t: 'Databases', d: 'Manage and query databases efficiently for real-world applications.' },
          { t: 'Real-time Project', d: 'Build a complete real-time project using frontend and backend.' },
        ],
      },
      {
        name: 'Expert Program', duration: '6 Months', level: 'Advanced',
        blurb: 'DSA and enterprise Java applications with Spring Boot, Hibernate, and more.',
        modules: [
          { t: 'DSA with C++ / Java', d: 'Master data structures and algorithms for coding interviews.' },
          { t: 'Design & Power the Web', d: 'Responsive websites and dynamic React interfaces.' },
          { t: 'Power Enterprise Apps with Java', d: 'Develop secure and scalable backend systems.' },
          { t: 'Spring, Spring Boot & Hibernate', d: 'Master Thymeleaf, JSP, and Servlets for scalable backends.' },
          { t: 'Real Projects', d: 'A beginner project plus a complete full-stack mini project.' },
          { t: 'Career Support', d: 'Resume, ATS & LinkedIn optimization and mock interviews.' },
        ],
      },
      {
        name: 'Industrial Program', duration: '8 Months', level: 'Industrial',
        blurb: 'Build enterprise-ready applications, DevOps at scale, and a full e-commerce module.',
        modules: [
          { t: 'Design & Power the Web', d: 'Responsive pages and modern React interfaces.' },
          { t: 'Master Programming Logic', d: 'DSA and problem-solving for interviews and real-world code.' },
          { t: 'Enterprise Java', d: 'Spring, Spring Boot, Hibernate, Thymeleaf, JSP, and Servlets.' },
          { t: 'Databases', d: 'Manage and query databases efficiently for real-world applications.' },
          { t: 'Docker, Kafka & Kubernetes', d: 'Build, deploy, and scale modern applications.' },
          { t: 'Industrial Projects', d: '1 Mini Project and 1 full E-Commerce module for real experience.' },
          { t: 'Prepare, Present, Get Placed', d: 'Resume, expert sessions, LinkedIn/Naukri, ATS resume, mock interviews.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* DATA ANALYTICS                                              */
  /* ============================================================= */
  analytics: {
    slug: "data-analytics",
    name: 'Data Analytics',
    kicker: 'Analytics Program',
    category: 'Data & Business Intelligence',
    titleLines: ['Data', 'Analytics'],
    sub: 'Analyze data. Drive decisions. Turn raw numbers into business insight with Excel, SQL, Power BI, Tableau, and Python.',
    fee: '₹ 5,000',
    emi: '₹ 1,250 / mo',
    mode: 'Offline & Live',
    cohort: '24 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Validate your analytical thinking with business-driven data projects and dashboards.",
  issuer: "Data & Development Center",
  duration: "6 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-DA",

  features: [
  {
    type: "verification",
    title: "Industry Verified",
    description: "Certified after practical analytics assessments."
  },
  {
    type: "projects",
    title: "Business Case Studies",
    description: "Analyze real-world datasets and dashboards."
  },
  {
    type: "skills",
    title: "Analytics Skills",
    description: "Excel, SQL, Power BI and Python fundamentals."
  },
  {
    type: "recognition",
    title: "Lifetime Recognition",
    description: "Validate your analytical expertise."
  }
]
},
    stack: ['Excel', 'SQL', 'Power BI', 'Tableau', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics', 'ETL', 'Azure'],
    tiers: [
      {
        name: 'Basic Program', duration: '2 Months', level: 'Foundation',
        blurb: 'Organize, analyze, and visualize data — and manage it efficiently with SQL.',
        modules: [
          { t: 'Excel', d: 'Use formulas, functions, and tools to manage and interpret data effectively.' },
          { t: 'Power BI / Tableau', d: 'Create interactive dashboards and business reports from raw data.' },
          { t: 'SQL', d: 'Store, retrieve, and manipulate structured data with powerful queries.' },
          { t: 'Python for Analysis', d: 'Perform data analysis, automation, and real-world problem solving.' },
          { t: 'Hands-on Project', d: 'Apply your skills on a practical analytics project.' },
        ],
      },
      {
        name: 'Professional Program', duration: '4 Months', level: 'Professional',
        blurb: 'Numerical computing, data wrangling, and insightful statistical visualization.',
        modules: [
          { t: 'NumPy', d: 'Perform fast mathematical and array operations for data processing.' },
          { t: 'Pandas', d: 'Clean, transform, and analyze structured datasets efficiently.' },
          { t: 'Matplotlib & Seaborn', d: 'Create charts and advanced statistical visualizations.' },
          { t: 'Excel', d: 'Manage and interpret data with formulas, functions, and tools.' },
          { t: 'Power BI / Tableau', d: 'Build interactive dashboards and business reports.' },
          { t: 'Python Analytics', d: 'Data analysis, automation, and real-world problem solving.' },
          { t: 'Real Project', d: 'A hands-on analytics project to strengthen your portfolio.' },
        ],
      },
      {
        name: 'Industrial Program', duration: '6 Months', level: 'Industrial',
        blurb: 'Learn. Analyze. Deliver. Industry-grade projects with ETL and Azure cloud.',
        modules: [
          { t: 'Statistics', d: 'Learn statistical concepts to analyze data and make informed decisions.' },
          { t: 'SQL', d: 'Store, retrieve, and manipulate structured data efficiently.' },
          { t: 'NumPy & Pandas', d: 'Fast numerical operations and dataset processing.' },
          { t: 'Matplotlib & Seaborn', d: 'Meaningful visual insights and statistical visualizations.' },
          { t: 'ETL Processes', d: 'Prepare and transform data for analysis.' },
          { t: 'Power BI / Tableau', d: 'Transform data into actionable, interactive reports.' },
          { t: 'Azure Cloud', d: 'Deploy, manage, and scale applications on Microsoft Azure.' },
          { t: 'Industry Projects', d: '2 Mini Projects and 1 industry-grade project with real datasets.' },
          { t: 'Career Support', d: 'Resume, ATS & LinkedIn optimization and mock interviews.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* DATA SCIENCE                                                */
  /* ============================================================= */
  datascience: {
    slug: "data-science",
    name: 'Data Science',
    kicker: 'Industrial Program',
    category: 'Data Science & ML',
    titleLines: ['Data', 'Science'],
    sub: 'Collect, analyze, and understand data to find useful insights and make better decisions — from foundations to machine learning.',
    fee: '₹ 5,000',
    emi: '₹ 1,250 / mo',
    mode: 'Offline & Live',
    cohort: '20 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Earn recognition for solving real-world problems using data science and machine learning.",
  issuer: "Data & Development Center",
  duration: "8 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-DS",

  features: [
  {
    type: "verification",
    title: "Industry Verified",
    description: "Recognized through practical ML assessments."
  },
  {
    type: "projects",
    title: "AI & ML Projects",
    description: "Build predictive models using real datasets."
  },
  {
    type: "skills",
    title: "Data Science Skills",
    description: "Machine Learning, Python and AI workflows."
  },
  {
    type: "recognition",
    title: "Lifetime Recognition",
    description: "A trusted credential for future opportunities."
  }
]
},
    stack: ['Excel', 'SQL', 'Power BI', 'Tableau', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics', 'Machine Learning'],
    tiers: [
      {
        name: 'Complete Track', duration: '7 – 8 Months', level: 'Industrial',
        blurb: 'A single, deep track that takes you from data analysis foundations to predictive machine learning and a capstone.',
        modules: [
          { t: '01 · Data Analysis Foundations', d: 'Collect, clean, and analyze data to extract insights. Excel, SQL.' },
          { t: '02 · Data Visualization', d: 'Interactive dashboards and visual reports. Power BI, Tableau.' },
          { t: '03 · Python Programming', d: 'Handle and analyze data efficiently. Foundations, data handling, OOP.' },
          { t: '04 · Python Libraries', d: 'Manipulate, analyze, and visualize data. NumPy, Pandas, Matplotlib, Seaborn.' },
          { t: '05 · Statistics for Data Science', d: 'Descriptive & inferential statistics and probability.' },
          { t: '06 · Data Analysis Techniques', d: 'Identify patterns and trends. Exploratory Data Analysis (EDA).' },
          { t: '07 · Machine Learning Basics', d: 'Build predictive models. Supervised & unsupervised learning.' },
          { t: '08 · Projects & Career Support', d: '2 Mini Projects + 1 Industry Capstone, resume, LinkedIn & mock interviews.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* MACHINE LEARNING                                            */
  /* ============================================================= */
  ml: {
    slug: "ml",
    name: 'Machine Learning',
    kicker: 'Industrial Program',
    category: 'AI & Machine Learning',
    titleLines: ['Machine', 'Learning'],
    sub: 'Teach computers to learn from examples and improve at tasks without being told every step — from Python to MLOps.',
    fee: '₹ 5,000',
    emi: '₹ 1,250 / mo',
    mode: 'Offline & Live',
    cohort: '18 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Validate your machine learning expertise through predictive models and real-world datasets.",
  issuer: "Data & Development Center",
  duration: "8 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-ML",

  features: [
    {
      type: "verification",
      title: "Industry Verified",
      description: "Earned after practical model development and evaluation."
    },
    {
      type: "projects",
      title: "ML Projects",
      description: "Build regression, classification and predictive learning models."
    },
    {
      type: "skills",
      title: "Career Ready",
      description: "Develop skills expected from modern machine learning engineers."
    },
    {
      type: "recognition",
      title: "Lifetime Recognition",
      description: "A trusted credential for your professional journey."
    }
  ]
},
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics', 'Neural Networks', 'TensorFlow', 'MLflow', 'FastAPI', 'Git & GitHub'],
    tiers: [
      {
        name: 'Complete Track', duration: '8 – 10 Months', level: 'Industrial',
        blurb: 'Build intelligent systems that learn patterns from data and make predictions — ending in MLOps and deployment.',
        modules: [
          { t: '01 · Python for AI & ML', d: 'Programming fundamentals for data-driven and ML applications.' },
          { t: '02 · Libraries for AI/ML', d: 'NumPy, Pandas, Matplotlib, Seaborn for computation and visualization.' },
          { t: '03 · Statistics & Mathematics', d: 'Descriptive & inferential statistics, probability for ML.' },
          { t: '04 · Machine Learning', d: 'Supervised, unsupervised learning, and time series analysis.' },
          { t: '05 · Deep Learning', d: 'Neural networks to solve complex data problems.' },
          { t: '06 · Model Performance', d: 'Measure and improve model accuracy and effectiveness.' },
          { t: '07 · MLOps & Deployment', d: 'Version control, experiment tracking, and model deployment.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* ARTIFICIAL INTELLIGENCE                                     */
  /* ============================================================= */
  ai: {
    slug: "ai",
    name: 'Artificial Intelligence',
    kicker: 'Flagship Program',
    category: 'AI & Machine Learning',
    titleLines: ['AI', '& ML'],
    sub: 'Make the future. Build machines that think, learn, and solve problems like humans — from Python to Generative AI and the cloud.',
    fee: '₹ 40,000',
    emi: '₹ 5,000 / mo',
    mode: 'Offline & Live',
    cohort: '16 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Build intelligent AI-powered applications and demonstrate your expertise through practical projects.",
  issuer: "Data & Development Center",
  duration: "8 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-AI",

  features: [
    {
      type: "verification",
      title: "Industry Verified",
      description: "Awarded after successfully completing AI-focused practical assessments."
    },
    {
      type: "projects",
      title: "Real AI Projects",
      description: "Build intelligent applications using modern AI tools and frameworks."
    },
    {
      type: "skills",
      title: "Future Ready",
      description: "Prepare for emerging AI engineering and automation roles."
    },
    {
      type: "recognition",
      title: "Lifetime Recognition",
      description: "A credential that reflects your practical AI expertise."
    }
  ]
},
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics', 'Neural Networks', 'TensorFlow', 'NLP', 'Computer Vision', 'Generative AI', 'FastAPI', 'MLflow', 'Azure'],
    tiers: [
      {
        name: 'Complete Track', duration: '10 – 12 Months', level: 'Flagship',
        blurb: 'The most comprehensive program at DNDC — the full path from programming to deployed, cloud-scaled AI systems.',
        modules: [
          { t: '01 · Python Programming', d: 'Foundations, data handling, and object-oriented programming.' },
          { t: '02 · Python Libraries', d: 'NumPy, Pandas, Matplotlib, Seaborn for computation and visualization.' },
          { t: '03 · Statistics & Mathematics', d: 'Statistical concepts and math foundations for ML models.' },
          { t: '04 · Machine Learning', d: 'Supervised, unsupervised learning, and time series analysis.' },
          { t: '05 · Deep Learning', d: 'Neural networks and TensorFlow for powerful AI models.' },
          { t: '06 · Artificial Intelligence', d: 'Natural Language Processing, Computer Vision, and Generative AI.' },
          { t: '07 · Model Performance', d: 'Model evaluation and hyperparameter tuning.' },
          { t: '08 · MLOps & Deployment', d: 'Git & GitHub, FastAPI, and MLflow for production AI.' },
          { t: '09 · Cloud Computing', d: 'Use Azure to build, deploy, and scale ML and AI applications.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* PERSONALITY DEVELOPMENT (lighter)                          */
  /* ============================================================= */
  personality: {
    slug: "personality-development",
    name: 'Personality Development',
    kicker: 'All Levels',
    category: 'Communication & Career',
    titleLines: ['Personality', 'Development'],
    sub: 'Communication, interviews, executive presence, and the soft skills that actually move careers forward.',
    fee: '₹ 3,000',
    emi: '₹ 1,000 / mo',
    mode: 'Offline',
    cohort: '20 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Develop professional communication, leadership and workplace confidence through practical learning.",
  issuer: "Data & Development Center",
  duration: "2 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-PD",

  features: [
    {
      type: "verification",
      title: "Industry Verified",
      description: "Awarded after practical communication and personality assessments."
    },
    {
      type: "projects",
      title: "Interactive Sessions",
      description: "Learn through role plays, presentations and mock interviews."
    },
    {
      type: "skills",
      title: "Professional Growth",
      description: "Develop confidence, communication and leadership skills."
    },
    {
      type: "recognition",
      title: "Lifetime Recognition",
      description: "A certificate reflecting your professional development journey."
    }
  ]
},
    stack: ['Communication', 'Presence', 'Interviews', 'Body Language', 'Public Speaking', 'Storytelling'],
    tiers: [
      {
        name: 'Core Program', duration: '3 Months', level: 'All Levels',
        blurb: 'Build the presence, voice, and confidence that interviews and workplaces reward.',
        modules: [
          { t: 'Communication', d: 'Clear, confident verbal and written communication.' },
          { t: 'Executive Presence', d: 'Carry yourself with credibility in any room.' },
          { t: 'Interview Mastery', d: 'Structure, story, and delivery for real interview loops.' },
          { t: 'Body Language', d: 'Read and project the right non-verbal signals.' },
          { t: 'Workshops', d: '12 live workshops to practice and get feedback.' },
        ],
      },
    ],
  },

  /* ============================================================= */
  /* DIGITAL MARKETING (lighter)                                */
  /* ============================================================= */
  marketing: {
    slug: "digital-marketing",
    name: 'Digital Marketing',
    kicker: 'Beginner Friendly',
    category: 'Growth & Marketing',
    titleLines: ['Digital', 'Marketing'],
    sub: 'SEO, performance ads, brand, content, and the analytics layer that ties it all together into measurable growth.',
    fee: '₹ 15,000',
    emi: '₹ 5,000 / mo',
    mode: 'Offline & Live',
    cohort: '24 learners',
    nextBatch: 'Every Week',
    certificate: {
  title: "Professional Certificate",
  subtitle:
    "Showcase your digital marketing skills through practical campaigns and real business strategies.",
  issuer: "Data & Development Center",
  duration: "4 Months",
  validity: "Lifetime",
  certificateIdPrefix: "DNDC-DM",

  features: [
    {
      type: "verification",
      title: "Industry Verified",
      description: "Issued after successful completion of campaign-based assessments."
    },
    {
      type: "projects",
      title: "Live Campaigns",
      description: "Work on SEO, Meta Ads, Google Ads and social media marketing projects."
    },
    {
      type: "skills",
      title: "Portfolio Ready",
      description: "Build marketing case studies to showcase your expertise."
    },
    {
      type: "recognition",
      title: "Lifetime Recognition",
      description: "A credential demonstrating practical marketing knowledge."
    }
  ]
},
    stack: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics', 'Content', 'Email', 'Social Media'],
    tiers: [
      {
        name: 'Professional Program', duration: '4 Months', level: 'Beginner',
        blurb: 'From first campaign to full-funnel growth — with the analytics to prove it works.',
        modules: [
          { t: 'SEO', d: 'Rank organically with on-page, technical, and content SEO.' },
          { t: 'Google Ads', d: 'Search and display performance campaigns that convert.' },
          { t: 'Meta Ads', d: 'Audience targeting and creative testing across Meta platforms.' },
          { t: 'Content & Brand', d: 'Build a content engine and a brand people remember.' },
          { t: 'Analytics', d: 'Measure, attribute, and optimize the full funnel.' },
          { t: 'Live Projects', d: '3 live campaigns to build a real, results-backed portfolio.' },
        ],
      },
    ],
  },

};
