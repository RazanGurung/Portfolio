export const personalInfo = {
  name: "Rajan Gurung",
  title: "Data Scientist & ML Engineer",
  location: "North Carolina, USA",
  workAuth: "Authorized to work in US",
  email: "rajan.gurung@example.com",
  linkedin: "https://linkedin.com/in/rajangurung",
  github: "https://github.com/rajangurung",
  summary: "Data Scientist and ML Engineer with 4+ years of experience developing AI-driven solutions, NLP pipelines, and big data applications. Skilled in deploying ML models into production, optimizing pipelines at scale, and delivering measurable business impact. Strong foundation in statistics, predictive modeling, and cloud-based MLOps."
}

export const metrics = {
  experience: "4+ years",
  projects: "10+ projects",
  certifications: "3 certifications",
  impact: "Enterprise scale"
}

export const skills = {
  "Data Science & ML": [
    "Python", "PyTorch", "Transformers", "Scikit-learn", 
    "XGBoost", "NLP", "Deep Learning", "Statistics"
  ],
  "Big Data & Processing": [
    "Apache Spark", "Kafka", "HDFS", "Airflow", "PySpark"
  ],
  "MLOps & Deployment": [
    "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", 
    "FastAPI", "Streamlit"
  ],
  "Data & Visualization": [
    "SQL", "Power BI", "Pandas", "Plotly", "Jupyter"
  ],
  "Development": [
    "Next.js", "TypeScript", "Git", "REST APIs"
  ]
}

export const projects = [
  {
    id: "sentiment-sleuth",
    title: "Amazon Sentiment Sleuth",
    subtitle: "LLM-powered sentiment analysis of Amazon reviews",
    description: "Built classification pipeline for large-scale review data with improved F1 score by 15% on imbalanced classes, processing 50K+ reviews/day",
    impact: ["15% F1 improvement", "50K+ reviews/day", "Real-time inference"],
    techStack: ["Python", "PyTorch", "Hugging Face", "FastAPI", "AWS"],
    repoLink: "https://github.com/rajangurung/sentiment-sleuth",
    caseStudyLink: "#",
    featured: true
  },
  {
    id: "accident-prediction",
    title: "Accident Severity Prediction",
    subtitle: "Big Data pipeline for vehicle collision analysis",
    description: "Deployed ML model for severity prediction with AUC = 0.89, reduced data prep time by 60% via PySpark pipelines",
    impact: ["AUC 0.89", "60% faster processing", "Scalable pipeline"],
    techStack: ["PySpark", "HDFS", "MLlib", "Plotly"],
    repoLink: "https://github.com/rajangurung/accident-prediction",
    caseStudyLink: "#",
    featured: true
  },
  {
    id: "bank-extractor",
    title: "Bank Statement Extractor",
    subtitle: "OCR + parsing to structured Excel",
    description: "Achieved 99% field capture accuracy on Wells Fargo PDFs with automated monthly categorization and summary generation",
    impact: ["99% accuracy", "Automated workflows", "Monthly processing"],
    techStack: ["Python", "Tesseract", "Pandas", "OpenPyXL"],
    repoLink: "https://github.com/rajangurung/bank-extractor",
    caseStudyLink: "#",
    featured: false
  },
  {
    id: "enterprise-llm",
    title: "Enterprise LLM Platform (Ford)",
    subtitle: "Document Q&A and workflow automation",
    description: "Reduced turnaround time by 40%, saving 20+ hours/week. Implemented retrieval, guardrails, and orchestration for enterprise usage",
    impact: ["40% faster turnaround", "20+ hours saved/week", "Enterprise scale"],
    techStack: ["Retrieval pipelines", "LLM orchestration", "AWS"],
    repoLink: "#",
    caseStudyLink: "#",
    featured: true
  }
]

export const experience = [
  {
    period: "2023 - Present",
    role: "Senior Data Scientist",
    company: "TechCorp",
    highlights: [
      "Led deployment of AI/ML solutions into production environments on AWS and Kubernetes",
      "Built real-time data processing and analytics pipelines with Spark and Kafka",
      "Improved model accuracy by 25% through advanced feature engineering and ensemble methods"
    ]
  },
  {
    period: "2021 - 2023", 
    role: "ML Engineer",
    company: "DataFlow Inc",
    highlights: [
      "Developed ML pipelines and NLP models that improved predictive accuracy by 30%",
      "Collaborated cross-functionally to translate business problems into ML solutions",
      "Implemented MLOps practices reducing model deployment time by 50%"
    ]
  },
  {
    period: "2020 - 2021",
    role: "Data Analyst",
    company: "Analytics Solutions",
    highlights: [
      "Built data visualization dashboards serving 100+ stakeholders",
      "Automated reporting processes saving 15 hours/week of manual work",
      "Performed statistical analysis and A/B testing for product optimization"
    ]
  }
]

export const certifications = [
  "Google Advanced Data Analytics",
  "AWS Cloud Practitioner", 
  "IBM AI Mastery"
]
