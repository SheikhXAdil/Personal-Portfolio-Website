export const skillGroups = [
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

export type project = {
    title: string
    gitRepoText?: string
    gitRepoLink?: string
    img?: string | null
    desc: string
    techStack: string[]
}

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