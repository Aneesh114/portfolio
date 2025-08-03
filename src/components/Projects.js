//src\components\Projects.js
import ProjectCard from './ProjectCard';
import './Projects.css';

import project1 from '../assets/project1.JPG';
import project2 from '../assets/project2.jpeg'
// Add more imports...

function Projects() {
  const projects = [
    {
      image: project1,
      title: 'Destinova',
      description: 'Smart AI travel recommendation System. Built with React, NextJS, MongoDB, and AWS',
      repo: 'https://github.com/Aneesh114/destinova',
    },
    {
      image: project2,
      title: 'Code Canvas',
      description: 'CodeCanvas is a real-time collaborative app with code/chat editor and whiteboard tools for remote teamwork. Built with Next.js, Clerk, Convex, Liveblocks, and Tailwind CSS.',
      repo: 'https://github.com/Aneesh114/CodeCanvasProject.git',
    },
    // Add more projects
  ];

  return (
    <section className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
