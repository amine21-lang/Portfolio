type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  private: boolean;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center max-w-md mx-auto">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
    />
    <h3 className="text-2xl font-bold mb-3 text-white text-center">
      {project.title}
    </h3>
    <p className="text-gray-300 mb-4 text-center">{project.description}</p>
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="bg-[#2A4759] px-3 py-1 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
    {/* GitHub Button */}
    {project.private ? (
      <div className="inline-block px-6 py-2 bg-gray-600 rounded-lg text-white font-semibold text-center cursor-not-allowed opacity-70">
        Private Repository
      </div>
    ) : (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-[#243c4b] rounded-lg hover:bg-[#2A4759] transition text-white font-semibold text-center"
      >
        View GitHub Repo
      </a>
    )}
  </div>
);

export default ProjectCard;
