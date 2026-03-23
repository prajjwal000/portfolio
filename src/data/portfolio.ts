/** Single source of truth for site copy (aligned with resume). */

export const about = {
  summary: [
    "My work spans both ends of the software stack, and the two levels of experience are deliberately complementary. Systems programming — browser engine contributions, network servers, language tooling — builds the kind of mechanical understanding that changes how you think about higher-level code. Application work in TypeScript, React, and Go services keeps that curiosity grounded in real use cases.",
    "At the lower end, I contributed to the Ladybird browser engine, tracking down HTML-parsing edge cases and a session-history race condition that had been causing intermittent test failures; the patch improved WPT pass-rates by over ten tests and included regression coverage to prevent recurrence. Other projects in that space include an HTTP/1.1 server built from scratch in C with a custom request lexer and epoll event loop, and a tree-walking interpreter for a Lisp-like language in Go.",
    "The higher-level work draws on the same foundations — an understanding of what sits beneath the abstractions and why things fail in the ways they do. Whether the task is a React frontend, a Go service, or a low-level protocol implementation, the approach is to understand the problem thoroughly, keep the code clean and tested, and see it through.",
  ],
} as const

export const identity = {
  name: "Prajjwal Verma",
  tagline:
    "Software developer working on browsers, protocols, and the layers underneath typical web apps.",
  email: "prajjwalverma74@gmail.com",
  phone: "+91 9140501850",
  linkedInUrl: "https://www.linkedin.com/in/prajjwal74/",
  githubUrl: "https://github.com/prajjwal000",
  githubUsername: "prajjwal000",
} as const

/** Public URL for the resume PDF (place file at `public/resume.pdf`). */
export const resumePdfPath = "/resume.pdf"

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C", "C++", "JavaScript", "TypeScript", "Python", "Golang"],
  },
  {
    title: "Backend",
    items: ["RESTful APIs", "WebSockets (Gorilla)", "JWT Auth", "BSD Sockets"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Database & Infrastructure",
    items: ["PostgreSQL", "SQLite", "Linux", "Docker", "CI/CD"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Neovim", "Postman", "Opencode", "Makefiles"],
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical Reasoning",
      "Critical Thinking",
      "Creative Problem Solving",
    ],
  },
]

/** Subset shown on the home page; links to full skills page. */
export const homeSkillPreview: string[] = [
  ...skillGroups[0].items.slice(0, 4),
  ...skillGroups[1].items.slice(0, 2),
]

export const experience = [
  {
    org: "Ladybird Browser Engine",
    role: "Open Source Contributor",
    period: "Jun 2025 – Aug 2025",
    url: "https://github.com/LadybirdBrowser/ladybird",
    prUrl: "https://github.com/LadybirdBrowser/ladybird/pull/4956",
    bullets: [
      "Landed 2 PRs that fixed HTML-parsing edge cases and eliminated a session-history race condition, raising WPT pass-rate by 10+ tests.",
      "Added regression test-suite coverage for the race condition; patch now blocks future CI failures.",
      "Collaborated with maintainers to refine solution for correctness and performance before merge.",
    ],
  },
] as const

export const projects = [
  {
    title: "HTTP Server",
    period: "Mar 2025 – Apr 2025",
    githubUrl:
      "https://github.com/prajjwal000/socket_util/tree/main/httpServer",
    bullets: [
      "Engineered an HTTP/1.1 server in C using an epoll-based event loop for non-blocking I/O.",
      "Implemented a custom lexer/parser to tokenize and validate incoming requests.",
      "Enforced strict RFC compliance for GET and POST methods to ensure robust protocol handling.",
    ],
    tech: ["C", "BSD Sockets", "Epoll", "Linux"],
  },
  {
    title: "Hex Editor",
    period: "Jan 2025 – Feb 2025",
    githubUrl: "https://github.com/prajjwal000/hex_editor",
    bullets: [
      "Built a command-line hex editor in Go that enables users to view and interactively edit binary file contents in hexadecimal format with Neovim integration.",
      "Optimized low-level file I/O operations by implementing safe memory-loading techniques, temporary file buffering, and precise permission handling for modified binary outputs.",
      "Designed an ergonomic TUI layout displaying data in 8-byte rows alongside ASCII interpretations, improving readability and debugging of raw binary streams.",
    ],
    tech: ["Go", "System Calls", "TUI"],
  },
  {
    title: "MonkeyLang Interpreter",
    period: "Jun 2024 – Jul 2024",
    githubUrl: "https://github.com/prajjwal000/monkey_interpreter",
    bullets: [
      "Architected a tree-walking interpreter including a custom lexer, Pratt parser, AST, and evaluator without external parser libraries.",
      "Implemented advanced language features: first-class functions, closures, hash maps, and conditional control flow.",
      "Established a suite of comprehensive unit tests to ensure parser correctness and prevent regressions.",
    ],
    tech: ["Go", "Compiler Design", "AST"],
  },
] as const

export const certificates = [
  {
    title: "Introduction to Machine Learning",
    issuer: "IIT Madras",
    date: "Apr 2025",
    verifyUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS46S44750023804390079",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Nov 2024",
    verifyUrl: "https://coursera.org/verify/P8CJOPITK6Z3",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Sep 2024",
    verifyUrl: "https://coursera.org/verify/6U8H2PE12J55",
  },
] as const

export const achievements = [
  {
    category: "Academic",
    text: "Achieved O grade in every programming subject at university.",
  },
  {
    category: "Practice",
    text: "Solved 250 problems on LeetCode.",
  },
  {
    category: "Competitive programming",
    text: "Achieved Rank 3000 in AtCoder Beginner Contest (Jan 2026).",
  },
  {
    category: "CTF",
    text: "Secured 300th place in KnightCTF 2026 (Jan 2026).",
  },
  {
    category: "CTF",
    text: "Active participant in Google CTF 2025 (Jun 2025).",
  },
] as const

export const education = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    credential: "B.Tech in Computer Science and Engineering",
    detail: "CGPA: 8.9/10",
    period: "Aug 2023 – Present",
  },
  {
    school: "Dr A K Public School",
    location: "Uttar Pradesh, India",
    credential: "Senior Secondary",
    detail: "Percentage: 83%",
    period: "Apr 2020 – Mar 2022",
  },
  {
    school: "Dr A K Public School",
    location: "Uttar Pradesh, India",
    credential: "High School",
    detail: "Percentage: 89%",
    period: "Apr 2018 – Mar 2020",
  },
] as const

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/achievements", label: "Achievements" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const
