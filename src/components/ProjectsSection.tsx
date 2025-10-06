import ProjectCard from "./ProjectCard ";
import landingImage from "../assets/landing.png";
import RhythmfyImage from "../assets/Rhythmfy.png";
import ArtSphereImage from "../assets/ArtSphere.jpg";
import weeasyorderImage from "../assets/WEEASYORDER.png";
import EasyScienceImage from "../assets/EasyScience.png";
import TrafficGNNImage from "../assets/TrafficGNN.png";
import SafeGuardianAIImage from "../assets/SafeGuardianAI.png";
import PortfolioImage from "../assets/PORTFOLIO.png";

const projects = [
  {
    id: 1,
    title: "SofiMedTransfer",
    description:
      "A secure file transfer web application developed during my internship at SofiMed, featuring JWT authentication, role-based access, WebSocket notifications, and a Next.js frontend.",
    imageUrl: landingImage,
    technologies: [
      "Spring Boot",
      "MySQL",
      "JWT",
      "WebSocket",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/amine21-lang/SofiMedTransfer",
    private: true,
  },
  {
    id: 2,
    title: "Rhythmfy",
    description:
      "A mobile music streaming application built with Flutter and FastAPI. Features AI-powered recommendations, offline playback, and smart personalization.",
    imageUrl: RhythmfyImage,
    technologies: ["Flutter", "FastAPI", "Python", "MongoDB", "AI/ML", "JWT"],
    githubUrl: "https://github.com/amine21-lang/Rhythmfy",
    private: false,
  },
  {
    id: 3,
    title: "ArtSphere",
    description:
      "An online art marketplace for buying and selling paintings, designs, and photos, built with Agile methodology. Includes secure payments, user management, and product listings.",
    imageUrl: ArtSphereImage,
    technologies: [
      "Spring Boot",
      "MySQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/amine21-lang/ArtSphere",
    private: false,
  },
  {
    id: 4,
    title: "SafeGuardian AI – Multilingual Scam Detection Agent",
    description:
      "Developed during the MIT Global AI Hackathon 2025, SafeGuardian AI is a multilingual AI agent designed to detect scams across WhatsApp and websites. Built within 24 hours by an international team using responsible AI principles and agile collaboration. Selected from over 850 participants worldwide.",
    imageUrl: SafeGuardianAIImage, // replace with your project image
    technologies: ["Python", "LLMs", "NLP", "Responsible AI", "Agile"],
    githubUrl: "https://github.com/amine21-lang/scamDetection",
    private: true,
  },
  {
    id: 5,
    title:
      "Traffic Congestion Prediction in Transportation Networks: A Graph Neural Network Approach",
    description:
      "An AI project that predicts urban traffic congestion using Graph Neural Networks (GNN) and Graph Attention Networks (GAT). Built with the METR-LA dataset, it combines spatial and temporal modeling through a hybrid GAT–LSTM architecture for real-time traffic forecasting. Applications include route optimization, traffic management, and data-driven urban planning.",
    imageUrl: TrafficGNNImage,
    technologies: ["Python", "PyTorch", "Graph Neural Networks", "GAT", "LSTM"],
    githubUrl: "https://github.com/amine21-lang/TrafficPrediction-GNN.git",
    private: false,
  },
  {
    id: 6,
    title: "WEEASYORDER",
    description:
      "A web application for managing table orders in restaurants and cafés. Developed with React for the frontend and .NET for the backend, featuring order tracking, menu management, and real-time updates.",
    imageUrl: weeasyorderImage,
    technologies: [
      "React",
      ".NET",
      "TypeScript",
      "Tailwind CSS",
      "WebSocket",
      "SQL Server",
    ],
    githubUrl: "https://github.com/yourusername/ml-customer-churn",
    private: true,
  },
  {
    id: 7,
    title: "EasyScience",
    description:
      "EasyScience is a JavaFX application designed for managing scientific articles, developed as part of an Object-Oriented Programming (OOP) school project using Java. It provides researchers, scientists, and academic institutions with a user-friendly platform to efficiently organize and manage their scientific papers. ",
    imageUrl: EasyScienceImage,
    technologies: ["Java", "JavaFX", "PDFBox"],
    githubUrl: "https://github.com/amine21-lang/EasyScience.git",
    private: false,
  },
  {
    id: 9,
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive portfolio website built to showcase my projects, achievements, and skills. Developed with React, TypeScript, and Tailwind CSS, featuring smooth animations, dark mode, and a clean UI optimized for all devices.",
    imageUrl: PortfolioImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/amine21-lang/Portfolio.git",
    private: false,
  },
];

const ProjectsSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">
      My Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
