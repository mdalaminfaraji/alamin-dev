import { FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiJsonwebtokens,
  SiAuth0,
  SiAxios,
  SiReactquery,
  SiGraphql,
  SiGooglecloud,
  SiNginx,
  SiPm2,
} from "react-icons/si";

export const personalInfo = {
  name: "Md Alamin Faraji",
  role: "Web Application Developer",
  phone: "+8801518420973",
  email: "alaminice1617@gmail.com",
  location: "Narail, Bangladesh",
  about:
    "I am a Web Application Developer from Bangladesh with extensive experience in web development. I specialize in creating attractive, fully responsive websites with a focus on user interface and branding. My expertise extends to cloud platforms like AWS, GCP, and deployment tools such as Nginx and PM2.",
  skills: [
    { name: "React.js", percentage: 90, icon: FaReact },
    { name: "Next.js", percentage: 85, icon: SiNextdotjs },
    { name: "Node.js", percentage: 85, icon: FaNodeJs },
    { name: "Express.js", percentage: 85, icon: SiExpress },
    { name: "MongoDB", percentage: 80, icon: SiMongodb },
    { name: "PostgreSQL", percentage: 75, icon: SiPostgresql },
    { name: "MySQL", percentage: 75, icon: SiMysql },
    { name: "SQLite", percentage: 70, icon: SiSqlite },
    { name: "Firebase", percentage: 80, icon: SiFirebase },
    { name: "TypeScript", percentage: 85, icon: SiTypescript },
    { name: "Tailwind CSS", percentage: 95, icon: SiTailwindcss },
    { name: "Material UI", percentage: 85, icon: SiMui },
    { name: "Ant Design", percentage: 80, icon: SiAntdesign },
    { name: "JWT", percentage: 90, icon: SiJsonwebtokens },
    { name: "NextAuth.js", percentage: 85, icon: SiAuth0 },
    { name: "Axios", percentage: 90, icon: SiAxios },
    { name: "Tanstack Query", percentage: 85, icon: SiReactquery },
    { name: "GraphQL", percentage: 75, icon: SiGraphql },
    { name: "AWS", percentage: 70, icon: FaAws },
    { name: "GCP", percentage: 70, icon: SiGooglecloud },
    { name: "Nginx", percentage: 75, icon: SiNginx },
    { name: "PM2", percentage: 80, icon: SiPm2 },
    { name: "Git", percentage: 90, icon: FaGitAlt },
  ],
};

export const projects = [
  {
    id: 1,
    title: "The Luxury Brand Cleaning Services ",
    description:
      "Raptor The Luxury Brand, a premier Canadian cleaning services platform offering a wide range of services like window cleaning, interior/exterior cleaning, gutter maintenance, and high-rise cleaning.",
    tech: [
      "Next.js",
      "Material UI",
      "Express",
      "Node.js",
      "MySQL",
      "Redux",
      "JWT",
      "NextAuth.js",
      "stripe",
      "Google map API",
      "Hostinger VPS Server",
    ],
    image: "/raptor-logo-squre.jpg",
    liveUrl: "https://www.raptorscleaning.com/",
    features: [
      "Responsive Design",
      "Stripe Integration",
      "Google Map API",
      "Users can request quotes for services",
      "Track updates on service requests",
      "View team details, including photos of assigned teams",
      "Access invoices and other service-related information",
      "Payment Integration: Seamless payment processing using Stripe",
      "Service Pages: Detailed views of the company's offerings to help users understand and choose the services they need",
      "Optimized for accessibility and SEO",
    ],
    images: [
      "/projects/raptor-fe-1.png",
      "/projects/raptor-fe-2.png",
      "/projects/raptor-fe-3.png",
      "/projects/raptor-fe-4.png",
      "/projects/raptor-fe-5.png",
    ],
    overview:
      "Raptor The Luxury Brand is a dedicated cleaning service company based in Canada. The platform serves as a comprehensive showcase of their professional cleaning services, allowing users to browse services, request quotes, and manage their service history. The project focuses on creating an elegant, user-friendly interface that reflects the premium nature of the brand while providing robust functionality for both customers and administrators.",
    challenges:
      "The main challenges included implementing a secure booking system, integrating real-time updates for service statuses, and creating an intuitive admin dashboard for managing service requests and team assignments.",
    solutions:
      "I implemented a comprehensive booking system with Stripe integration for secure payments, developed a real-time notification system for service updates, and designed a powerful admin dashboard that allows staff to manage everything from service requests to team assignments efficiently.",
    isGithubPrivate: true,
    githubUrlClient:
      "https://github.com/mailtoabusadat/raptorscleaning.com-app",
    githubUrlServer:
      "https://github.com/mailtoabusadat/raptorscleaning.com-server",
  },
  {
    id: 2,
    title: "PIF Capital",
    description:
      "PIF Capital has been dedicated to helping small and medium enterprises navigate the complexities of capital markets, operational scaling, and corporatisation.",
    tech: [
      "Next.js",
      "tailwind css",
      "shadcn",
      "Strapi CMS",
      "stripe",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Graphql",
      "zustand",
      "React pdf/renderer",
    ],
    image: "/logo.webp",
    features: [
      "Responsive Design",
      "Stripe Integration",
      "Developed a comprehensive booking page that handles fetching event data, managing referral codes, and processing payments using Zustand for state management.",
      "Implemented referral code validation and discount calculations, including real-time updates and error handling for invalid codes.",
      "Built a secure payment handling system with terms and conditions validation, payment processing, and redirection to a success page upon completion.",
      "Designed a dynamic Purchase History component with filtering options, pagination, and invoice management, allowing users to download invoices as PDFs.",
      "Integrated third-party libraries such as @react-pdf/renderer for PDF generation, dayjs for date manipulation, and Zustand for state management.",
      "Optimized user experience by providing real-time feedback on payment status, event progress, and referral code applications with a clean and responsive UI.",
    ],
    images: [
      "/projects/pif-1.png",
      "/projects/pif-2.png",
      "/projects/pif-3.png",
      "/projects/pif-4.png",
    ],
    overview:
      "PIF Capital is a financial institution dedicated to helping small and medium enterprises navigate the complexities of capital markets. This platform enables users to book events, manage referrals, and access comprehensive financial resources. The project required a sophisticated booking system with referral code validation and discount calculations.",
    challenges:
      "Implementing a secure payment system with Stripe integration, managing complex state across the booking flow, and creating a robust PDF invoice generation system were the main challenges faced during development.",
    solutions:
      "I implemented Zustand for state management to handle the complex booking flow, integrated Stripe for secure payments, and used @react-pdf/renderer to create downloadable invoices. The platform also includes real-time validation of referral codes and dynamic discount calculations.",
    liveUrl: "https://client.pifcapital.sg/events",
    isGithubPrivate: true,
    githubUrlClient: "https://github.com/nexstacksg/pif-client",
    githubUrlServer: "https://github.com/nexstacksg/pif-be",
  },
  {
    id: 3,
    title: "YouthMedia24",
    description:
      "YouthMedia24 is a dynamic news portal dedicated to empowering the younger generation with the latest news on innovations and emerging technologies. Our mission is to keep young minds informed and inspired by sharing insightful stories, groundbreaking advancements, and up-to-date technology trends",
    tech: [
      "Next.js",
      "strapi cms",
      "Mui",
      "Zustand",
      "GraphQL",
      "Firebase",
      "GCP",
    ],
    image: "/youthMedia24.png",
    features: [
      "Developed a comprehensive news platform, YouthMedia24, targeting the younger generation with a focus on innovations and updated technology.",
      "Implemented user authentication and role-based access control for Regular Users, Admins, and Super Admins using JWT/OAuth.",
      "Built dynamic dashboards for different user roles to manage submissions, approvals, and analytics efficiently.",
      "Integrated rich media support for articles, allowing users to upload images, videos, and audio files seamlessly.",
      "Designed a mobile-responsive and user-friendly UI using Next.js and Tailwind CSS for an optimal browsing experience.",
      "Leveraged Strapi CMS for backend management and Zustand for state management to handle articles, comments, and user data efficiently.",
    ],
    images: [
      "/projects/youth-1.png",
      "/projects/youth-2.png",
      "/projects/youth-3.png",
      "/projects/youth-4.png",
      "/projects/youth-5.png",
      "/projects/youth-6.png",
    ],
    overview:
      "YouthMedia24 is a modern news platform targeting the younger generation with content focused on innovation and technology. The platform features both user-facing news pages and comprehensive admin dashboards for content management. The project aims to keep young minds informed about the latest technological advancements and innovations.",
    challenges:
      "Implementing role-based access control, creating efficient content management workflows, and ensuring optimal performance with rich media content were the primary challenges of this project.",
    solutions:
      "I used JWT/OAuth for secure authentication, implemented role-based dashboards for content management, and optimized media handling to ensure fast load times even with image-heavy content. Strapi CMS was used for backend management, providing a flexible and powerful content management system.",
    liveUrl: "https://youth-media24-fe.vercel.app/bangla",
    isGithubPrivate: false,
    githubUrlClient: "https://github.com/mdalaminfaraji/youthMedia24-fe",
    githubUrlServer: "https://github.com/mdalaminfaraji/youth-media-24-be",
  },
  {
    id: 4,
    title: "VanishVote",
    description:
      "VanishVote is an anonymous polling application that allows users to create polls that automatically expire after a set time. This repository contains the frontend of the application built with Next.js and Tailwind CSS.",
    tech: [
      "Next.js",
      "Express js",
      "TailwindCss",
      "Typescript",
      "Mongodb",
      "MOngoose",
      "Node js",
    ],
    image: "/vanishvote.png",
    features: [
      "Create Anonymous Polls: Create polls with multiple options that expire after a set time",
      "Privacy Controls: Set polls to be private (accessible only via direct link) or public",
      "Result Visibility: Option to hide results until the poll expires",
      "Share Functionality: Easily share poll links with others",
      "Real-time Results: See votes updating in real-time",
      "Mobile Responsive: Works seamlessly on all devices",
      "No Login Required: Create and vote on polls without an account",
    ],
    images: [
      "/projects/vanishvote-1.png",
      "/projects/vanishvote-2.png",
      "/projects/vanishvote-3.png",
    ],
    overview:
      "VanishVote is an innovative polling application that allows users to create anonymous polls that automatically expire after a set time. The app is designed with privacy in mind, giving users control over who can see their polls and when results are visible. The project focuses on creating a simple, intuitive interface for quick poll creation and participation.",
    challenges:
      "Implementing the auto-expiry functionality, ensuring real-time updates for poll results, and maintaining anonymity while preventing abuse were the main challenges faced during development.",
    solutions:
      "I implemented a robust backend system that handles poll expiration through scheduled tasks, used WebSockets for real-time result updates, and designed a clean, intuitive interface that makes poll creation and voting simple and straightforward.",
    liveUrl: "https://vanishvote-frontend.vercel.app/",
    isGithubPrivate: false,
    githubUrlClient: "https://github.com/mdalaminfaraji/vanishvote-frontend",
    githubUrlServer: "https://github.com/mdalaminfaraji/vanishvote-backend",
  },
  {
    id: 5,
    title: "Admin Panel for Raptor - The Luxury Brand",
    description:
      "Admin Panel of Raptor The Luxury Brand, a cutting-edge management tool for a premier Canadian cleaning services company. As part of a team of three developers, I worked on the frontend development of the admin dashboard, ensuring seamless functionality and a user-friendly design.",
    tech: [
      "Next.js",
      "Material UI",
      "Express",
      "Node.js",
      "MySQL",
      "Redux",
      "JWT",
      "NextAuth.js",
      "stripe",
      "Google map API",
      "Hostinger VPS Server",
    ],
    image: "/projects/Raptor-1.png",
    features: [
      "Admin Dashboard: Quick Links: Simplified access to key functionalities like creating new customers, bookings, invoices, blog posts, webmail, payments, and reports.",
      "Metrics Overview: Designed cards to display essential metrics,including:Cross-sales, total expenses, and revenue Total jobs (average, completed, canceled, in progress)",
      "Upcoming payments, total invoices, and customer/provider stats Average customer visits  Last 30 Days Summary: Updated information at a glance.",
      "Quotes Management: Table View: Designed a quotes table with features like searching, pagination, and Google location direction.",
      "Quote Details: Integrated property estimation and the ability to convert quotes into bookings.",
      "Bookings Management: Data Table: Developed the booking table with efficient search and pagination.",
      "Detailed View: Enhanced booking details for better data insights.",
      "Invoice Creation: Developed a streamlined invoice creation system to simplify payment tracking.",
      "Our Team Section: Designed and implemented a section to manage team details effortlessly.",
      "Reports Section: Created a detailed reports area for tracking operational insights and performance.",
    ],
    images: [
      "/projects/Raptor-1.png",
      "/projects/Raptor-2.png",
      "/projects/Raptor-3.png",
      "/projects/Raptor-4.png",
      "/projects/Raptor-5.png",
      "/projects/Raptor-6.png",
      "/projects/Raptor-7.png",
    ],
    overview:
      "I contributed to the Admin Panel of Raptor The Luxury Brand, a management tool for a leading Canadian cleaning services company. As part of a three-member team, I focused on frontend development, ensuring a seamless and intuitive user experience.",
    challenges:
      "I faced dynamically color for border , image background and icon color for admin dashboard reusable card design also I faced invoice creation and payment tracking issues.",
    solutions:
      "At First I took help From my senior developer How can i generate this color and then i found out that i can use color alpha packages like color generator to generate color for border , image background and icon color for admin dashboard reusable card design I read stripe docs to understand how to create invoice and payment tracking.",
    liveUrl: "https://admin.raptorscleaning.com",
    isGithubPrivate: true,
    githubUrlClient:
      "https://github.com/mailtoabusadat/admin.raptorscleaning.com-app",
    githubUrlServer:
      "https://github.com/mailtoabusadat/admin.raptorscleaning.com-server",
  },
  {
    id: 6,
    title: "TH Consulting",
    description:
      "TH Consulting is a modern web application built with Next.js that provides employment consulting services. The platform offers comprehensive solutions for employment mediation, worker assignment, and employment administration, available in both English and Croatian languages.",
    tech: [
      "Next.js",
      "Tailwind css",
      "Shadcn",
      "React js",
      "Typescript",
      "framer-motion",
      "zod",
    ],
    image: "/projects/thconsultinglogo.png",

    features: [
      "Multilingual Support: Full English and Croatian language support, dedicated layouts for each language, easy language switching",

      "Service Categories: Mediation in Employment: Complete employment process handling for foreign workers, Assignment of Workers: Flexible worker rental solutions for specific periods, Employment Administration: Full documentation support for foreign worker employment",

      "User Interface: Modern and responsive design, Interactive navigation with dropdown menus, Service-specific detailed pages, Contact forms for inquiries",

      "Technical Features: Server-side rendering with Next.js 14, Dynamic routing for service pages, Responsive layouts using Tailwind CSS, Optimized images and fonts, SEO-friendly structure",
    ],
    images: [
      "/projects/TH-Consulting-1.png",
      "/projects/TH-Consulting-2.png",
      "/projects/TH-Consulting-3.png",
      "/projects/TH-Consulting-4.png",
      "/projects/TH-Consulting-5.png",
      "/projects/TH-Consulting-6.png",
    ],
    overview:
      "TH Consulting is an employment mediation agency that is registered and licensed by the Ministry of Labor of the Republic of Croatia. As your reliable partner, we will help you find suitable staff to create and improve productivity and competitiveness on the labor market.",
    challenges: "",
    solutions: "",
    liveUrl: "https://thconsulting.vercel.app/",
    isGithubPrivate: false,
    githubUrlClient: "https://github.com/mdalaminfaraji/thconsulting-fe",
    githubUrlServer: "",
  },
];

export const experiences = [
  {
    company: "NexStack, Singapore",
    position: "Nextjs React Developer",
    period: "Jun 2024 - Feb 2025",
    responsibilities: [
      "Team Leader of Bangladesh Branch",
      "Developed responsive web applications",
      "Assisted Backend Development with Strapi CMS",
      "Mentored junior developers",
      "Gain knowledge of cloud platforms like AWS, GCP, and deployment tools such as Nginx and PM2",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    company: "Raptor The Luxury Brand, Canada",
    position: "Frontend Developer",
    period: "July 2023 - June 2024",
    responsibilities: [
      "Developed responsive web applications",
      "Collaborated with design team",
      "Optimized application performance",
      "Integrated with payment gateway (Stripe)",
      "Implemented secure authentication and authorization",
      "Google map integration",
    ],
  },
];
