import profile from './profile.jpeg';
import { FaLightbulb, FaHtml5, FaCss3Alt, FaJs, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import project1 from './project1.jpg';
import project2 from './project2.png';
import project4 from './project4.avif';

export const assets = {
    profile, project1, project2, project4,
};

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
        color: 'text-purple'
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'Beautiful design and user experience are at the heart of everything I create.',
        color: 'text-pink'
    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'I write maintainable, efficient code following best practices and modern patterns.',
        color: 'text-blue'
    }
];


export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description: 'Building responsive and interactive user interfaces using modern web technologies.',
        tags: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Backend Development',
        icon: FaServer,
        description: 'Developing server-side applications and RESTful APIs using Spring Boot.',
        tags: ['Java', 'Spring Boot', 'REST API']
    },
    {
        title: 'Database Management',
        icon: FaDatabase,
        description: 'Designing and managing relational databases for efficient data handling.',
        tags: ['MySQL']
    },
    {
        title: 'Cloud & Deployment',
        icon: FaCloud,
        description: 'Deploying applications and managing media using cloud-based services.',
        tags: ['Cloudinary', 'Vercel', 'Render']
    },
    {
        title: 'Tools & Technologies',
        icon: FaTools,
        description: 'Using essential tools for development, testing, and version control.',
        tags: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Web Storm', 'Postman']
    },
    {
        title: 'Problem Solving',
        icon: FaCode,
        description: 'Applying logical thinking to solve problems and build efficient solutions.',
        tags: ['Java', 'DSA (Basic)']
    }
];

export const projects = [
    {
        title: "Flipzo – E-commerce Web Application",
        description: "Responsive e-commerce UI with product listing, search functionality, and interactive shopping cart.",
        image: project1,
        tech: ["HTML", "CSS", "JavaScript"],
        icons: [FaHtml5, FaCss3Alt, FaJs],
        demo: "https://flipzo-ecommerce-project.vercel.app",
        code: "https://github.com/amarmani28/flipzo-ecommerce-project",
    },
    {
        title: "PayPlan – Loan EMI Calculator",
        description: "Interactive loan EMI calculator with real-time calculation using JavaScript.",
        image: project2,
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "https://pay-plan-pro.vercel.app/",
        code: "https://github.com/amarmani28/PayPlan",
    },

    {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
        image: project4,
        tech: ["React", "Tailwind CSS", "Framer Motion", "Markdown"],
        icons: [FaReact, FaCloud],
        demo: "#",
        code: "#",
    },

];
