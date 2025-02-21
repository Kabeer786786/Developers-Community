import { useState } from "react";
import { motion } from "framer-motion";
import Filters from "./Filters";
import ProjectsGrid from "./ProjectsGrid";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([
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
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    techStack: "",
    github: ""
  });

  const [showForm, setShowForm] = useState(false); // Toggle state for the form
  

  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) return;
    
    setProjects([
      ...projects,
      {
        ...newProject,
        techStack: newProject.techStack.split(",").map(tech => tech.trim())
      }
    ]);
    
    setNewProject({ title: "", description: "", image: "", techStack: "", github: "" });
    setShowForm(false); // Close form after submission
  };

  return (
    <div className="h-screen max-w-[1400px] flex m-auto gap-4 pt-[4.75rem] pb-2.5 ">
      {/* Left Sidebar (Scrollable) */}
      <div className="w-1/4 px-6 py-6 bg-gray-200 rounded-lg overflow-y-auto max-h-screen">
        {/* Add New Project Button */}
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all">
          {showForm ? "Close Form" : "➕ Add New Project"}
        </button>

        {/* Add Project Form with Smooth Animation */}
        {showForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-lg font-semibold mb-3">Add a New Project</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={newProject.title}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
                required
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={newProject.description}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Project Image URL"
                value={newProject.image}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
              />
              <input
                type="text"
                name="techStack"
                placeholder="Tech Stack (comma separated)"
                value={newProject.techStack}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
              />
              <input
                type="url"
                name="github"
                placeholder="GitHub Repo URL"
                value={newProject.github}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
              />
              <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                Submit Project
              </button>
            </form>
          </motion.div>
        )}
        <h1 className="text-xl font-semibold text-gray-700 py-4 text-center">Recent Projects</h1>

        {/* Projects List */}
        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Right Main Content (Scrollable) */}
      <div className="w-3/4 mx-auto px-6 py-6 rounded-lg bg-gray-100 overflow-y-auto max-h-screen">
        <h1 className="text-4xl font-bold text-center mb-6">Discover & Collaborate on Projects</h1>
        <Filters />
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Projects;
