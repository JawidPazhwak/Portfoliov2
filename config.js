/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  PORTFOLIO CONFIGURATION                                           ║
 * ║  Edit this file to personalize your portfolio.                     ║
 * ║  All sections pull from this single config — no HTML editing needed.║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

    // ─────────────────────────────────────────────
    // SITE META
    // ─────────────────────────────────────────────
    site: {
        title: "Developer Portfolio — Software Engineer & AI Specialist",
        description: "Portfolio of a top-tier software engineer — specializing in AI, full-stack development, and cutting-edge technology.",
        logo: "<Jawid Pazhwak />",               // Text shown in navbar & footer
        footerTagline: "Crafting the future, one line of code at a time.",
        copyright: "2026 Jawid Pazhwak",    // "© {copyright}. All rights reserved."
    },

    // ─────────────────────────────────────────────
    // HERO SECTION
    // ─────────────────────────────────────────────
    hero: {
        greeting: "Hi, I'm",
        name: "Jawid Pazhwak",
        typingPhrases: [
            "intelligent AI systems.",
            "scalable cloud platforms.",
            "beautiful user experiences.",
            "real-time data pipelines.",
            "the future of technology.",
        ],
        description: "Software engineer crafting intelligent systems and beautiful interfaces. Passionate about AI, distributed systems, and pushing the boundaries of technology.",
        badgeText: "Available for opportunities",
        stats: [
            { number: 50, suffix: "+", label: "Projects Built" },
            { number: 5,  suffix: "+", label: "Years Experience" },
            { number: 20, suffix: "+", label: "Technologies" },
        ],
    },

    // ─────────────────────────────────────────────
    // ABOUT SECTION
    // ─────────────────────────────────────────────
    about: {
        leadText: 'I\'m a <strong class="gradient-text">full-stack software engineer</strong> with a deep passion for building elegant, high-performance applications that make a real impact.',
        paragraphs: [
            "Driven by curiosity and a passion for technology, I am a Computer Science and Engineering student focused on software development, problem-solving, and emerging fields such as artificial intelligence and machine learning.",
            "Beyond academics, I enjoy building projects, exploring cutting-edge technologies, and continuously expanding my knowledge to grow as a developer and future engineer.",
        ],
        details: [
            { icon: "📍", text: "Dhaka, BD" },
            { icon: "🎓", text: "M.S. Computer Science" },
            { icon: "💼", text: "Senior Software Engineer" },
            { icon: "🌐", text: "Open Source Contributor" },
        ],
    },

    // ─────────────────────────────────────────────
    // SKILLS SECTION
    // Each category gets its own glass card.
    // ─────────────────────────────────────────────
    skills: [
        {
            title: "Frontend",
            icon: "code",       // Choices: code, server, brain, cloud, or any emoji
            items: [
                { name: "React / Next.js",  level: 95 },
                { name: "TypeScript",       level: 92 },
                { name: "Vue.js",           level: 85 },
                { name: "CSS / Tailwind",   level: 90 },
                { name: "Three.js / WebGL", level: 78 },
            ],
        },
        {
            title: "Backend",
            icon: "server",
            items: [
                { name: "Node.js / Express",    level: 93 },
                { name: "Python / FastAPI",      level: 90 },
                { name: "Go",                    level: 80 },
                { name: "GraphQL",               level: 88 },
                { name: "PostgreSQL / Redis",    level: 85 },
            ],
        },
        {
            title: "AI & Machine Learning",
            icon: "brain",
            items: [
                { name: "PyTorch / TensorFlow", level: 88 },
                { name: "LLM / NLP",            level: 85 },
                { name: "Computer Vision",       level: 80 },
                { name: "MLOps",                 level: 82 },
                { name: "Hugging Face",          level: 87 },
            ],
        },
        {
            title: "Cloud & DevOps",
            icon: "cloud",
            items: [
                { name: "AWS / GCP",                  level: 90 },
                { name: "Docker / K8s",               level: 88 },
                { name: "CI/CD Pipelines",            level: 92 },
                { name: "Terraform",                  level: 82 },
                { name: "Monitoring / Observability",  level: 85 },
            ],
        },
        {
            title: "Sports",
            icon: "☯️",
            items: [
                { name: "White Belt",  level: 100 },
                { name: "Yellow Belt", level: 100 },
                { name: "Orange Belt", level: 100 },
            ],
        },
    ],

    // ─────────────────────────────────────────────
    // PROJECTS SECTION
    // ─────────────────────────────────────────────
    projects: [
        {
            title: "Portfolio Website",
            description: "A modern and responsive personal portfolio website featuring a Matrix-inspired animated background, integrated music player, smooth navigation, and interactive UI elements to showcase my skills and projects.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            github: "https://github.com/yourusername/portfolio",
            live: "https://jawidpazhwak.github.io",
        },
        {
            title: "Music Player",
            description: "A web-based music player with audio streaming functionality, playlist management, playback controls, and social features designed to enhance the listening experience.",
            tags: ["JavaScript", "HTML", "CSS", "Web Audio API"],
            github: "https://github.com/yourusername/music-player",
            live: "",
        },
        {
            title: "Project 3",
            description: "A software development project demonstrating problem-solving skills, application design, and practical implementation of programming concepts.",
            tags: ["Programming", "Software Development", "Problem Solving"],
            github: "https://github.com/yourusername/project3",
            live: "",
        },
    ],

    // ─────────────────────────────────────────────
    // EDUCATION
    // ─────────────────────────────────────────────
    education: [
        {
            date: "2024 — Present",
            degree: "B.S. Computer Science",
            school: "Brac University",
            description: "Specialization in Artificial Intelligence and Machine Learning. Research focus on large-scale distributed systems and natural language processing. GPA: 3.95/4.0",
            highlights: ["AI Research Lab", "Dean's List", "Published 3 Papers"],
        },
    ],

    // ─────────────────────────────────────────────
    // CERTIFICATIONS
    // ─────────────────────────────────────────────
    certifications: [
        { title: "Certificate of Appreciation",         issuer: "Brac Institute of Language",                       date: "2026" },
        { title: "Certificate of Participation",        issuer: "BRACU WELLBEING TRIATHLON 2026",                   date: "2026" },
        { title: "Appointment Letter",                  issuer: "BracU Multicultural Club",                         date: "2026" },
        { title: "White Belt",                           issuer: "Afghanistan Wushu (Chinese Kung Fu) Federation",   date: "2022" },
        { title: "Yellow Belt",                          issuer: "Afghanistan Wushu (Chinese Kung Fu) Federation",   date: "2022" },
        { title: "Orange Belt",                          issuer: "Afghanistan Wushu (Chinese Kung Fu) Federation",   date: "2022" },
        { title: "Residential Semester House Champion",  issuer: "Brac University",                                  date: "2025" },
    ],

    // ─────────────────────────────────────────────
    // EXPERIENCE
    // ─────────────────────────────────────────────
    experience: [
        {
            date: "2020 — Present",
            role: "CSE Student",
            company: "Jawid Pazhwak",
            isCurrent: true,
            description: "Leading development of next-generation AI infrastructure. Architecting distributed training systems for foundation models. Mentoring a team of 8 engineers.",
            achievements: [
                "Built and deployed personal web development projects using modern technologies",
                "Strengthened problem-solving skills through coursework, coding practice, and academic projects",
                "Continuously exploring software engineering, artificial intelligence, and machine learning concepts",
            ],
            tags: ["Java", "Python", "JAX", "TPU", "Distributed Systems"],
        },
    ],

    // ─────────────────────────────────────────────
    // CONTACT & SOCIAL LINKS
    // ─────────────────────────────────────────────
    contact: {
        email: "jawidpazhwak@g.bracu.ac.bd",
        location: "Dhaka, BD",
        website: { label: "jawidpazhwak.dev", url: "https://jawidpazhwak.dev" },
    },

    socials: {
        github:    "https://github.com/JawidPazhwak",
        linkedin:  "https://linkedin.com/in/jawid-pazhwak-9951a9342",
        twitter:   "https://twitter.com/JawidPa",
        instagram: "https://instagram.com/jawidpazhwak",
    },
};
