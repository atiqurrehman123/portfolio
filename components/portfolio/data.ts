export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Atiq Rehman",
    intro: "Hello, I'm Atiq Rehman, a",
    resumeUrl:"/atiqCv.pdf",
    title: "Senior Frontend Developer",
    tagline: "Focused on Scalable Solutions.",
    email: "atiqu555@gmail.com",
    linkedin: "https://www.linkedin.com/in/atiq-ur-rehman-692559176/",
    github: "https://github.com/atiqurrehman123",
    upwork: "https://www.upwork.com/freelancers/atiqu3",
    summary:
      "I have 5 years of extensive experience in ReactJS and Next.js development. I specialize in turning complex designs and wireframes into high-quality, efficient code that works flawlessly across all devices. I excel at building highly reusable, performant components for scalable, large-scale enterprise projects.",
    avatarUrl: "/profile-photo.png",
  },
  navigation: {
    logo: "<AR />",
    links: [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
  },
  hero: {
    visible: true,
    exploreProjectsButton: {
      text: "Explore Projects",
      href: "#projects",
    },
    contactButton: {
      text: "Contact Me",
      href: "https://calendly.com/atiqu555/30min",
    },
  },
  sections: {
    projects: {
      visible: true,
      id: "projects",
      number: "02",
      title: "Key Projects Showcase",
    },
    experience: {
      visible: true,
      id: "experience",
      number: "03",
      title: "Professional Experience",
    },
    skills: {
      visible: true,
      id: "skills",
      number: "04",
      title: "Core Technical Expertise",
    },
  },
  footer: {
    visible: true,
    id: "contact",
    label: "05. Ready to Connect?",
    title: "Let's Build Something Great.",
    description:
      "I'm currently seeking roles that challenge my expertise in large-scale React and Next.js applications. Whether you have a specific opportunity or a complex technical problem to solve, I'm available for a discussion.",
    ctaLabel: "Schedule a Call",
    ctaHref: "https://calendly.com/atiqu555/30min",
  },
  skills: [
    { name: "ReactJS", icon: "Code", color: "text-blue-400" },
    { name: "Next.js", icon: "Zap", color: "text-white" },
    { name: "Redux", icon: "Box", color: "text-purple-400" },
    { name: "TypeScript", icon: "Type", color: "text-blue-500" },
    { name: "Tailwind CSS", icon: "LayoutGrid", color: "text-cyan-500" },
    { name: "Node.js", icon: "Server", color: "text-green-500" },
    { name: "Prisma", icon: "Database", color: "text-gray-300" },
    { name: "Supabase", icon: "Database", color: "text-green-400" },
    { name: "PostgreSQL", icon: "Database", color: "text-sky-400" },
    { name: "NextAuth", icon: "Key", color: "text-yellow-400" },
    { name: "RESTful API", icon: "Link", color: "text-red-400" },
    { name: "Git", icon: "GitBranch", color: "text-orange-600" },
    { name: "Webpack", icon: "Package", color: "text-blue-300" },
    { name: "Docker", icon: "Box", color: "text-blue-500" },
    { name: "PWA", icon: "Smartphone", color: "text-pink-400" },
    { name: "Jira", icon: "FileText", color: "text-blue-600" },
    { name: "JavaScript (ES6+)", icon: "ScrollText", color: "text-yellow-300" },
    { name: "UI/UX Prototyping", icon: "Brush", color: "text-pink-300" },
  ],
  experience: [
    {
      company: "Simplicity Technologies",
      role: "Senior Frontend Developer",
      period: "06/2024 - Present",
      location: "Islamabad, PAK",
      achievements: [
        "Led the launch of Dubbing Video Editor, improving user experience and project visibility.",
        "Enhanced user engagement via PTCL Audio Portal by ensuring seamless feature integration.",
        "Developed reusable React components for the Lab Patient Management System, reducing load times.",
      ],
    },
    {
      company: "Code Hub System (UK Based)",
      role: "Senior Frontend Developer",
      period: "08/2023 - 07/2024",
      location: "Islamabad, PAK",
      achievements: [
        "Developed the IReport multi-tenant blog application, enabling user content management across all tenants.",
        "Built an AI Chat integrated with IReport, capable of generating responses in PDF/DOC formats.",
        "Created the Sphere management system to streamline organizational efficiency.",
      ],
    },
    {
      company: "Code Minimalist Technologies",
      role: "Senior Frontend Developer",
      period: "06/2022 - 11/2023",
      location: "Islamabad, PAK",
      achievements: [
        "Built 'Photo ID', a comprehensive real estate web app for property showcasing.",
        "Created NCR Dashboard with bulk user import and interactive visualizations.",
        "Developed an enterprise-level drag-and-drop Workflow Builder similar to WordPress.",
      ],
    },
    {
      company: "Simplicity Technologies",
      role: "Junior Frontend Developer",
      period: "06/2021 - 06/2022",
      location: "Islamabad, PAK",
      achievements: [
        "Developed a dynamic table listing for the Employee Management System, enabling efficient browsing and sorting of employee records.",
      ],
    },
    {
      company: "Softoo Technologies",
      role: "Backend Developer (Node.js, AWS)",
      period: "09/2020 - 02/2021",
      location: "Islamabad, PAK",
      achievements: [
        "Developed a Slack Bot Attendance System within 3 months, leveraging AWS Lambda and API Gateway to automate attendance tracking and improve efficiency.",
      ],
    },
  ],
  projects: [
    {
      name: "Clinic Management System",
      category: "Healthcare",
      icon: "Monitor",
      description:
        "A production-ready clinic website and management system with doctor, receptionist, patient, and admin dashboards plus online appointments and full medical record tracking.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "MongoDB",
        "MERN",
        "Server Side Rendering",
      ],
      link: "https://private-doctor-clinic-london.vercel.app/",
    },
    {
      name: "Echo9.ai Voice Editor",
      category: "AI / Multimedia",
      icon: "Zap",
      description:
        "An advanced AI voice and dubbing platform with millisecond-precise voice synthesis, frame-level subtitle and dubbing control, and tone/humor adaptation for natural, culturally accurate multilingual content.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI Voice",
        "Dubbing",
      ],
      link: "https://app.echo9.ai/sign-in?redirectUrl=/project",
    },
    {
      name: "MagicVest Dashboard",
      category: "SaaS Dashboard",
      icon: "Monitor",
      description:
        "A modern Next.js 15 + TypeScript dashboard template for managing multiple stores and payments in one place, with stats for 10+ stores, sales tracking, and analytics at a glance.",
      tags: ["Next.js 15", "TypeScript", "Clerk", "Shadcn UI", "Tailwind v4"],
      link: "https://nextjs-clerk-dashboard-template.vercel.app/auth/sign-in",
    },

    {
      name: "AI Chat App",
      category: "AI/Generative",
      icon: "Cpu",
      description:
        "Integrated AI chat for IReport, fetching blog data and generating formatted responses (PDF/DOC) on demand.",
      tags: ["Next.js", "OpenAI", "Serverless"],
    },
    {
      name: "NCR Workflow Builder",
      category: "Enterprise",
      icon: "Layers",
      description:
        "An enterprise-level drag-and-drop platform for customizing and automating complex business workflows.",
      tags: ["Drag & Drop", "Automation", "TypeScript"],
    },
    {
      name: "IReport Blog App",
      category: "Multi-tenant",
      icon: "Star",
      description:
        "Scalable, multi-tenant blog application enabling creation and management of content across different tenant instances.",
      tags: ["Next.js", "Multi-tenancy", "Redux"],
    },
    {
      name: "Photo ID",
      category: "Real Estate",
      icon: "ExternalLink",
      description:
        "A professional real estate web application focused on high-quality property showcasing and gallery management.",
      tags: ["React", "Gallery", "UX"],
    },
    {
      name: "PTCL Audio Portal",
      category: "Enterprise",
      icon: "Monitor",
      description:
        "Led development for this audio portal, integrating complex features to enhance operational efficiency and user engagement.",
      tags: ["React", "Audio", "Portal"],
    },
  ],
} as const;


