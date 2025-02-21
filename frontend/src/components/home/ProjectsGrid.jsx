import ProjectCard from "./ProjectCard";

const projects = [
  { 
    title: "AI Chatbot", 
    description: "An AI-powered chatbot for customer support.", 
    image: "/photoprint.webp",
    techStack: ["React", "Node.js", "AI"],
    github: "https://github.com/yourrepo"
  },
  { 
    title: "Portfolio Website", 
    description: "A beautiful portfolio for developers.", 
    image: "/photoprint.webp",
    techStack: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/yourrepo"
  },
  { 
    title: "Portfolio Website", 
    description: "A beautiful portfolio for developers.", 
    image: "/photoprint.webp",
    techStack: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/yourrepo"
  },
  { 
    title: "Portfolio Website", 
    description: "A beautiful portfolio for developers.", 
    image: "/photoprint.webp",
    techStack: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/yourrepo"
  },
  { 
    title: "Portfolio Website", 
    description: "A beautiful portfolio for developers.", 
    image: "/photoprint.webp",
    techStack: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/yourrepo"
  },
  { 
    title: "Portfolio Website", 
    description: "A beautiful portfolio for developers.", 
    image: "/photoprint.webp",
    techStack: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/yourrepo"
  }
];

const ProjectsGrid = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
