//src\components\ProjectCard.js
import './ProjectCard.css';

function ProjectCard({ image, title, description, repo }) {
  return (
    <div className="project-card" onClick={() => window.open(repo, "_blank")}>
      <img src={image} alt={title} className="project-img" />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
