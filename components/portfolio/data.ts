export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Atiq Rehman',
    intro: "Hello, I'm Atiq Rehman, a",
    resumeUrl: '/atiqCv.pdf',
    title: 'Senior Frontend Developer',
    tagline: 'Focused on Scalable Solutions.',
    email: 'atiqu555@gmail.com',
    linkedin: 'https://www.linkedin.com/in/atiq-ur-rehman-692559176/',
    github: 'https://github.com/atiqurrehman123',
    upwork: 'https://www.upwork.com/freelancers/atiqu3',
    summary:
      'I have 5 years of extensive experience in ReactJS and Next.js development. I specialize in turning complex designs and wireframes into high-quality, efficient code that works flawlessly across all devices. I excel at building highly reusable, performant components for scalable, large-scale enterprise projects.',
    avatarUrl: '/profile-photo.png',
  },
  navigation: {
    logo: '<AR />',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    visible: true,
    exploreProjectsButton: {
      text: 'Explore Projects',
      href: '#projects',
    },
    contactButton: {
      text: 'Contact Me',
      href: 'https://calendly.com/atiqu555/30min',
    },
  },
  sections: {
    projects: {
      visible: true,
      id: 'projects',
      number: '02',
      title: 'Key Projects Showcase',
    },
    experience: {
      visible: true,
      id: 'experience',
      number: '03',
      title: 'Professional Experience',
    },
    skills: {
      visible: true,
      id: 'skills',
      number: '04',
      title: 'Core Technical Expertise',
    },
  },
  footer: {
    visible: true,
    id: 'contact',
    label: '05. Ready to Connect?',
    title: "Let's Build Something Great.",
    description:
      "I'm currently seeking roles that challenge my expertise in large-scale React and Next.js applications. Whether you have a specific opportunity or a complex technical problem to solve, I'm available for a discussion.",
    ctaLabel: 'Schedule a Call',
    ctaHref: 'https://calendly.com/atiqu555/30min',
  },
  skills: [
    { name: 'ReactJS', icon: 'Code', color: 'text-blue-400' },
    { name: 'Next.js', icon: 'Zap', color: 'text-white' },
    { name: 'Redux', icon: 'Box', color: 'text-purple-400' },
    { name: 'TypeScript', icon: 'Type', color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: 'LayoutGrid', color: 'text-cyan-500' },
    { name: 'Node.js', icon: 'Server', color: 'text-green-500' },
    { name: 'Prisma', icon: 'Database', color: 'text-gray-300' },
    { name: 'Supabase', icon: 'Database', color: 'text-green-400' },
    { name: 'PostgreSQL', icon: 'Database', color: 'text-sky-400' },
    { name: 'NextAuth', icon: 'Key', color: 'text-yellow-400' },
    { name: 'RESTful API', icon: 'Link', color: 'text-red-400' },
    { name: 'Git', icon: 'GitBranch', color: 'text-orange-600' },
    { name: 'Webpack', icon: 'Package', color: 'text-blue-300' },
    { name: 'Docker', icon: 'Box', color: 'text-blue-500' },
    { name: 'PWA', icon: 'Smartphone', color: 'text-pink-400' },
    { name: 'Jira', icon: 'FileText', color: 'text-blue-600' },
    { name: 'JavaScript (ES6+)', icon: 'ScrollText', color: 'text-yellow-300' },
    { name: 'UI/UX Prototyping', icon: 'Brush', color: 'text-pink-300' },
  ],
  experience: [
    {
      company: 'Simplicity Technologies',
      role: 'Senior Frontend Developer',
      period: '06/2024 - Present',
      location: 'Islamabad, PAK',
      achievements: [
        'Led the launch of Dubbing Video Editor, improving user experience and project visibility.',
        'Enhanced user engagement via PTCL Audio Portal by ensuring seamless feature integration.',
        'Developed reusable React components for the Lab Patient Management System, reducing load times.',
      ],
    },
    {
      company: 'Code Hub System (UK Based)',
      role: 'Senior Frontend Developer',
      period: '08/2023 - 07/2024',
      location: 'Islamabad, PAK',
      achievements: [
        'Developed the IReport multi-tenant blog application, enabling user content management across all tenants.',
        'Built an AI Chat integrated with IReport, capable of generating responses in PDF/DOC formats.',
        'Created the Sphere management system to streamline organizational efficiency.',
      ],
    },
    {
      company: 'Code Minimalist Technologies',
      role: 'Senior Frontend Developer',
      period: '06/2022 - 11/2023',
      location: 'Islamabad, PAK',
      achievements: [
        "Built 'Photo ID', a comprehensive real estate web app for property showcasing.",
        'Created NCR Dashboard with bulk user import and interactive visualizations.',
        'Developed an enterprise-level drag-and-drop Workflow Builder similar to WordPress.',
      ],
    },
    {
      company: 'Simplicity Technologies',
      role: 'Junior Frontend Developer',
      period: '06/2021 - 06/2022',
      location: 'Islamabad, PAK',
      achievements: [
        'Developed a dynamic table listing for the Employee Management System, enabling efficient browsing and sorting of employee records.',
      ],
    },
    {
      company: 'Softoo Technologies',
      role: 'Backend Developer (Node.js, AWS)',
      period: '09/2020 - 02/2021',
      location: 'Islamabad, PAK',
      achievements: [
        'Developed a Slack Bot Attendance System within 3 months, leveraging AWS Lambda and API Gateway to automate attendance tracking and improve efficiency.',
      ],
    },
  ],
  projects: [
    {
      name: 'Aurex Permium Watches',
      category: 'Healthcare',
      icon: 'Monitor',
      description:
        'Modern e-commerce platform built with  featuring a full storefront (catalog, cart, checkout, order tracking) and an admin dashboard (analytics, product & order management, user roles) .',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'PostgreSQL',
        'MERN',
        'Supabase',
        'Server Side Rendering',
        'Tailwind CSS',
      ],
      link: 'https://e-commerce-sigma-lyart.vercel.app/checkout',
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765967599/ecomefront_mecccw.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765967607/ecomefront2_nbj5ps.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765967589/ecomefront3_bifbrf.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765967589/ecomefront3_bifbrf.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765967610/ecommerdashbaord_cdbrjb.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765967565/ecommerdashbaord2_acjwsz.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765967625/AUREX_-_Premium_Watches_E-Commerce_Platform_zrfq9d.mp4',
      ],
    },
    {
      name: 'Clinic Management System',
      category: 'Healthcare',
      icon: 'Monitor',
      description:
        'A production-ready clinic website and management system with doctor, receptionist, patient, and admin dashboards plus online appointments and full medical record tracking.',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'MongoDB',
        'MERN',
        'Server Side Rendering',
      ],
      link: 'https://al-raas-private-clinic.vercel.app/',
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765286626/p2_uxqowr.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765286614/health1_cm9wnu.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765286616/health3_rs6jxf.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765286616/health5_fd6faj.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765286615/health7_o0hfqm.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765286571/HCA_Healthcare_UK_-_Quality_Healthcare_Services_j2kavq.mp4',
      ],
    },
    {
      name: 'IMS Inventory Online',
      category: 'POS',
      icon: 'Monitor',
      description:
        'A web based inventory management system designed to help small and medium businesses get real-time visibility into their stock and operations. With IMS Inventory Online.',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'SUPABASE',
        'MERN',
        'POSTGRESQL',
      ],
      link: 'https://ims-inventory-online-58cq.vercel.app/login',
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765287345/pos2_gowuvy.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765287344/pos1_jlyqwa.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765287344/pos5_wls4zu.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765287344/pos3_at0syv.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765287344/pos4_yd4u6u.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765287344/pos6_su8sfj.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765287829/POS_System_-_Inventory_Management_oymamf.mp4',
      ],
    },
    {
      name: 'Echo9.ai Voice Editor',
      category: 'AI / Multimedia',
      icon: 'Zap',
      description:
        'An advanced AI voice and dubbing platform with millisecond-precise voice synthesis, frame-level subtitle and dubbing control, and tone/humor adaptation for natural, culturally accurate multilingual content.',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'AI Voice',
        'Dubbing',
      ],
      link: 'https://app.echo9.ai/sign-in?redirectUrl=/project',
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/fl_preserve_transparency/v1765285132/echo91_qwpgg4.jpg?_s=public-apps',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765285131/echo2_x4bsda.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765285132/echo3_x02lap.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765285059/Echo9.ai___AI_Dubbing_Subtitle_Studio_vipqyc.mp4',
      ],
    },
    {
      name: 'Sales Dashboard',
      category: 'SaaS Dashboard',
      icon: 'Monitor',
      description:
        '🚀 Real-time sales dashboards: Track revenue vs targets, forecast scenarios, and identify trends—driving 15-25% revenue growth. Segment customers by CLV, predict churn risks, optimize products—reducing ',
      tags: ['Next.js 15', 'TypeScript', 'Clerk', 'Shadcn UI', 'Tailwind v4'],
      link: 'https://sales-dashboard-seven-sandy.vercel.app/sales-dashboard/overview',
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293919/magic3_bdldng.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293918/magic1_ujxfeg.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293919/magic_yjmufv.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293920/magic2_sygrqh.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293920/magic9_xgslcl.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293919/magic5_uiau3v.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293922/magic6_nn5dys.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293922/magic10_chfnmj.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293921/magic4_fvogzh.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293922/magic12_kounqf.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765294792/Authentication___Sign_In_nj2e2f.mp4',
      ],
    },
    {
      name: 'MagicVest Dashboard',
      category: 'SaaS Dashboard',
      icon: 'Monitor',
      description:
        'A modern Next.js 15 + TypeScript dashboard template for managing multiple stores and payments in one place, with stats for 10+ stores, sales tracking, and analytics at a glance.',
      tags: ['Next.js 15', 'TypeScript', 'Clerk', 'Shadcn UI', 'Tailwind v4'],
      link: 'https://nextjs-clerk-dashboard-template.vercel.app/auth/sign-in',
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293919/magic3_bdldng.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293918/magic1_ujxfeg.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293919/magic_yjmufv.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293920/magic2_sygrqh.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293920/magic9_xgslcl.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293919/magic5_uiau3v.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293922/magic6_nn5dys.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293922/magic10_chfnmj.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293921/magic4_fvogzh.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765293922/magic12_kounqf.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765294792/Authentication___Sign_In_nj2e2f.mp4',
      ],
    },

    {
      name: 'AI Chat App',
      category: 'AI/Generative',
      icon: 'Cpu',
      description:
        'Integrated AI chat for IReport, fetching blog data and generating formatted responses (PDF/DOC) on demand.',
      tags: ['Next.js', 'OpenAI', 'Serverless'],
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765298614/irchat3_ti7k09.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765298614/irchat3_ti7k09.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765298610/irchat_dg2wlr.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765298612/irchat4_zx1kch.png',
      ],
      videos: ['https://www.loom.com/embed/b7a1aa04bd1c4bc0b09c26a6c3d942fe'],
    },
    {
      name: 'NCR Workflow Builder',
      category: 'Enterprise',
      icon: 'Layers',
      description:
        'An enterprise-level drag-and-drop platform for customizing and automating complex business workflows.',
      tags: ['Drag & Drop', 'Automation', 'TypeScript'],
      images: [],
      videos: [],
    },
    {
      name: 'IReport Blog App',
      category: 'Multi-tenant',
      icon: 'Star',
      description:
        'Scalable, multi-tenant blog application enabling creation and management of content across different tenant instances.',
      tags: ['Next.js', 'Multi-tenancy', 'Redux'],
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765299221/ireport1_nnrm4f.png',
      ],
      videos: ['https://www.loom.com/embed/f340867d96774539841d9b8188e4058f'],
    },
    {
      name: 'Photo ID',
      category: 'Real Estate',
      icon: 'ExternalLink',
      description:
        'A professional real estate web application focused on high-quality property showcasing and gallery management.',
      tags: ['React', 'Gallery', 'UX'],
      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765299846/uscope_sxzarw.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765299853/uscope1_o2cqgo.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1765299849/uscope3_hq4uij.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765300259/uscopevideo2_snubvc.mp4',
        'https://res.cloudinary.com/chat-app-work/video/upload/v1765300259/uscopevideo1_z2hflq.mp4',
      ],
    },
    {
      name: 'Code Vista',
      category: 'Company Website',
      icon: 'Monitor',
      description:
        'A company website for Code Vista, a software development company.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],

      images: [
        'https://res.cloudinary.com/chat-app-work/image/upload/v1767617368/codevista1_pnk1nx.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1767617369/codevista2_cgc4cq.png',
        'https://res.cloudinary.com/chat-app-work/image/upload/v1767617367/codevista_pgyuxo.png',
      ],
      videos: [
        'https://res.cloudinary.com/chat-app-work/video/upload/v1767617525/CodeVista_Studio_-_Modern_Software_Development_Agency_eyv4yd.mp4',
      ],
    },
    {
      name: 'PTCL Audio Portal',
      category: 'Enterprise',
      icon: 'Monitor',
      description:
        'Led development for this audio portal, integrating complex features to enhance operational efficiency and user engagement.',
      tags: ['React', 'Audio', 'Portal'],
      images: [],
      videos: [],
    },
  ],
} as const;
