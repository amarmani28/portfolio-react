import profile from './profile.jpeg';
import { FaLightbulb, FaHtml5, FaCss3Alt, FaJs, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';

export const assets = {
    profile, project1, project2, project3,
};

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Learning Mindset',
        description: 'I like learning new technologies and applying them in my projects.',
        color: 'text-purple'
    },
    {
        icon: FaCode,
        title: 'Projects',
        description: 'I enjoy building projects to gain practical experience.',
        color: 'text-pink'
    },
    {
        icon: FaCode,
        title: 'Problem Solving',
        description: 'I like solving problems and improving my coding skills.',
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
        description: 'Improving my problem-solving skills through coding practice.',
        tags: ['Java', 'DSA (Basic)']
    }
];

export const projects = [
    {

        title: "Student Management System",
        description: "Student management system for managing students, courses, and enrollments.",
        image: project1,
        tech: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "MySQL"],
        demo: "https://student-management-system-s1m3.onrender.com",
        code: "https://github.com/amarmani28/student_management_system"
    },
    {
        title: "Real-Time Chat Application",
        description: "Real-time chat application with chat rooms, live messaging, active users, typing indicators, and file sharing.",
        image: project2,
        tech: ["React", "Spring Boot", "WebSocket", "STOMP", "MySQL", "Cloudinary"],
        demo: "https://realtime-chat-frontend-f4ok.onrender.com",
        code: "https://github.com/amarmani28/realtime-chat-frontend"
    },

    {
        title: "Flipzo  E-commerce Web Application",
        description: "Responsive e-commerce UI with product listing, search functionality, and interactive shopping cart.",
        image: project3,
        tech: ["HTML", "CSS", "JavaScript"],
        icons: [FaHtml5, FaCss3Alt, FaJs],
        demo: "https://flipzo-ecommerce-project.vercel.app",
        code: "https://github.com/amarmani28/flipzo-ecommerce-project",
    }

];
