import { FaGithub, FaRegHeart } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition-transform">
      <img src={project.image} alt={project.title} className="rounded-lg w-full h-40 object-cover" />
      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{project.description}</p>
      <div className="flex gap-2 mt-3">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded-md">{tech}</span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <a href={project.github} target="_blank" className="text-blue-500 flex items-center gap-1">
          <FaGithub /> GitHub
        </a>
        <button className="text-red-500 hover:scale-110 transition-transform"><FaRegHeart /></button>
      </div>
    </div>
  );
};

export default ProjectCard;
