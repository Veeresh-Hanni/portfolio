import { Code2, Cpu, Database, Terminal } from 'lucide-react';

export const personalInfo = {
    name: "Veeresh Hanni",
    title: "Full-Stack Software Engineer",
    tagline: "Architecting secure, scalable web solutions with Django, React, and Hybrid Database Systems.",
    email: "veereshhanni347@gmail.com",
    phone: "+91 8151858969",
    location: "Gadag, India",
    social: {
        linkedin: "https://linkedin.com/in/veeresh-hanni-9775ba33b/",
        github: "https://github.com/veeresh-hanni",
        email: "mailto:veereshhanni347@gmail.com"
    }
};

export const skills = [
    {
        id: 1,
        category: "Core Stack",
        icon: Code2,
        items: ["Python", "React.js", "Django", "SQL (MySQL)"]
    },
    {
        id: 2,
        category: "Infrastructure",
        icon: Terminal,
        items: ["Docker", "Linux", "REST APIs", "Apache Maven"]
    },
    {
        id: 3,
        category: "Data Architecture",
        icon: Database,
        items: ["MongoDB Atlas", "Hybrid Systems", "Django ORM", "Redis"]
    },
    {
        id: 4,
        category: "Tools",
        icon: Cpu,
        items: ["Git/GitHub", "VS Code", "IntelliJ IDEA", "Postman"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Pingone - Secure AI Architecture",
        role: "Full-Stack Architect",
        tech: ["React", "Django", "MongoDB", "SQL", "OpenAI API"],
        description: "Designed a secure, real-time AI conversational platform. Engineered a hybrid database architecture utilizing MongoDB for encrypted unstructured logs and SQL for relational user metadata. Implemented end-to-end cryptography.",
        links: {
            demo: "https://pingone.onrender.com",
            github: "https://github.com/veeresh-hanni"
        },
        featured: true
    },
    {
        id: 2,
        title: "Pharmacy Resource Planning System",
        role: "Backend Lead",
        tech: ["Python", "Django ORM", "MySQL", "MVC Architecture"],
        description: "Developed a comprehensive inventory management solution using the MVC pattern. Optimized complex Django ORM queries for stock tracking and implemented Role-Based Access Control (RBAC).",
        links: {
            demo: null, // No live link
            github: "https://github.com/veeresh-hanni/pms"
        },
        featured: false
    },
    {
        id: 3,
        title: "IPO Web Application (Internship)",
        role: "SDE Intern Project",
        tech: ["React.js", "Django", "SQL", "Rest API"],
        description: "Contributed to a high-traffic fintech application at Bluestock Fintech. Optimized API response times for real-time IPO data retrieval and engineered scalable frontend components.",
        links: {
            demo: null,
            github: null
        },
        featured: false
    }
];

export const experience = [
    {
        id: 1,
        role: "Software Development Engineer Intern",
        company: "Bluestock Fintech",
        period: "April 2025 – May 2025",
        location: "Remote",
        achievements: [
            "Engineered full-stack features for a live IPO Web Application using React and Django.",
            "Implemented complex SQL queries for efficient data retrieval.",
            "Collaborated in an agile environment to enhance system scalability."
        ]
    }
];

export const education = [
    {
        id: 1,
        degree: "Diploma in Computer Science & Engineering",
        school: "Government Polytechnic, Gadag",
        period: "2022 – 2025",
        details: "CGPA: 9.5"
    }
];