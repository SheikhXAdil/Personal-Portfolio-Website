import { achievement, certification, education, experience, interest, project, skillGroup } from "./types"

export const skillGroups: skillGroup[] = [
    {
        title: 'Languages',
        skills: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL'],
    },
    {
        title: 'Backend',
        skills: [
            'FastAPI',
            'NestJS',
            'Node.js',
            'ASP.NET Core',
            'REST APIs',
            'PostgreSQL',
            'TypeORM',
            'Docker',
        ],
    },
    {
        title: 'AI / ML',
        skills: [
            'Machine Learning',
            'Deep Learning',
            'Computer Vision',
            'RAG',
            'LangChain',
            'LLMs',
            'OpenAI',
            'Gemini',
        ],
    },
    {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'Linux'],
    },
]

export const projects: project[] = [
    {
        title: 'Multi-Tenant Service Management Platform',
        gitRepoText: 'View source',
        gitRepoLink: 'https://github.com/SheikhXAdil/CB-NestJs-Utilities',
        img: null,
        desc: 'A scalable backend platform designed for multi-tenant service management with role-based authorization, geospatial functionality, notifications, payments, and third-party integrations. This is a project i did during my time at CodeBryx and can\'t share the source code for this project but you can check out my nestjs utilities repo which contains some of the utilities i used in this project.',
        techStack: [
            'NestJS',
            'Fastify',
            'TypeORM',
            'PostgreSQL',
            'PostGIS',
            'Stripe',
        ],
    },
    {
        title: 'Edge AI deployment pipeline for resource-constrained hardware',
        gitRepoText: 'View source',
        gitRepoLink: 'https://github.com/SheikhXAdil/PSAU-Internship-Archive',
        img: null,
        desc: 'A research-oriented Edge AI pipeline exploring real-time custom object detection and deployment on resource-constrained embedded systems. This project explores the work I did during my internship at Prince Sultan University and the source code and resources are available in the above repo.',
        techStack: [
            'Python',
            'Computer Vision',
            'Deep Learning',
            'Edge AI',
            'Machine Learning',
        ],
    },
    {
        title: 'Slack AI Agent',
        gitRepoText: 'View source',
        gitRepoLink: 'https://github.com/SheikhXAdil/SlackAiAgent',
        img: null,
        desc: 'An AI-powered Slack bot for automated community-member research and analysis, rebuilt with FastAPI, Python, Google Gemini, LangChain, Slack Bolt, and PostgreSQL. This project started from a tutorial by Ania Kubów / freeCodeCamp, but I independently reimplemented the backend using FastAPI instead of the original Node.js/Express stack and deployed it using FastAPI Cloud.',
        techStack: [
            'Python',
            'FastAPI',
            'PostgreSQL',
            'LangChain',
            'Slack',
        ],
    },
]

export const interests: interest[] = [
    {
        title: 'Backend & System Architecture',
        description:
            'Designing reliable APIs, services, databases, and scalable backend systems.',
    },
    {
        title: 'Distributed & High-Performance Computing',
        description:
            'Learning about parallel computation, distributed systems, and efficient large-scale processing.',
    },
    {
        title: 'Edge Computing & Embedded Systems',
        description:
            'Exploring the deployment of AI and software solutions on resource-constrained devices and embedded systems.',
    },
    {
        title: 'Artificial Intelligence',
        description:
            'Building practical AI systems and exploring how intelligent capabilities can be integrated into software.',
    },
    {
        title: 'Machine Learning & Deep Learning',
        description:
            'Exploring machine learning models, neural networks, and their application to real-world problems.',
    },
    {
        title: 'Computer Vision',
        description:
            'Working with visual data, object detection, image understanding, and real-time vision systems.',
    },
]

export const educationItems: education[] = [
    {
        degree: 'BS Software Engineering',
        institution: 'University of the Punjab',
        department: 'Department of Software Engineering · FCIT',
        duration: '2023 — 2027',
        cgpa: '3.85 / 4.00',
    },
]

export const certifications: certification[] = [
    {
        title: 'Google IT Automation with Python Professional Certificate',
        issuer: 'Google · Coursera',
        image: null,
        link: 'https://coursera.org/share/f6d61ed4f5e1b93480da092f2365932a',
    },
    {
        title: 'Google Data Analytics Specialization',
        issuer: 'Google · Coursera',
        image: null,
        link: 'https://coursera.org/share/a1316c3f7b83792b8ba2275c19047bcc',
    },
    {
        title: 'Google AI Essentials Specialization',
        issuer: 'Google · Coursera',
        image: null,
        link: 'https://coursera.org/share/1f9ea3e9461b273a6d1854a07a90edb9',
    },
    {
        title: 'Introduction to Databases for Back-End Development',
        issuer: 'Meta · Coursera',
        image: null,
        link: 'https://coursera.org/share/75c8ea9dfec370db3561d7b9cb79b002',
    },
    {
        title: 'Introduction to Back-End Development',
        issuer: 'Meta · Coursera',
        image: null,
        link: 'https://coursera.org/share/599c401dd67a9de395b6946884e03024',
    },
    {
        title: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        image: null,
        link: 'https://www.freecodecamp.org/certification/sheikhxadil/javascript-algorithms-and-data-structures',
    },
]

export const achievements: achievement[] = [
    {
        title: 'Machine Learning Teaching Assistant',
        description:
            'Selected as a Teaching Assistant for Machine Learning, supporting undergraduate students through coursework, labs, and practical exercises.',
    },
    {
        title: 'Merit Scholarship & Laptop Award',
        description:
            'Received a government-funded merit scholarship and laptop based on academic performance during BS.',
    },
    {
        title: 'International AI Research Internship',
        description:
            'Completed an AI research internship focused on Edge AI, computer vision, and real-time inference for resource-constrained systems.',
    }
]

export const experiences: experience[] = [
    {
        title: 'Backend Developer',
        organization: 'CodeBryx',
        type: 'Part-time',
        location: 'Lahore, Pakistan',
        workMode: 'Onsite',
        description:
            'Designed and developed backend services and features for production applications using NestJS, Fastify, TypeORM, and PostgreSQL. Worked on different production level services and third party integrations. Also worked on chatbots and AI integrations and agents for different applications with python and FastAPI.',
        startDate: 'Jan 2024',
        endDate: 'Oct 2025',
        duration: '1 yr 10 mos',
    },
    {
        title: 'AI Research Intern',
        organization: 'PSAU R&D Center',
        type: 'Internship',
        location: 'Riyadh, Saudi Arabia',
        workMode: 'On-site',
        description:
            'Worked on Edge AI research focused on deploying real-time AI/ML models on resource-constrained embedded systems. Explored model development, optimization, and deployment considerations for real-time inference. Also worked with computer vision and deep learning models for object detection and tracking and its deployment on edge devices.',
        startDate: 'Aug 2026',
        endDate: 'Sep 2026',
        duration: '1 mo',
    },
]