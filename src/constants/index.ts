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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management",
    tech: ["Next.js", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/projects/task-manager.jpg",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video courses and progress tracking",
    tech: ["Next.js", "AWS S3", "Express", "MongoDB"],
    image: "/projects/lms.jpg",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management",
    tech: ["Next.js", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/projects/task-manager.jpg",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video courses and progress tracking",
    tech: ["Next.js", "AWS S3", "Express", "MongoDB"],
    image: "/projects/lms.jpg",
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
