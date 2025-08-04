import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    role: 'Software Engineer Intern',
    company: 'Optum',
    duration: 'May 2022 – Aug 2022',
    description: [
      "Built secure, customer-facing features using TypeScript, React, and Node.js.",
      "Created reusable frontend components and implemented routing logic.",
      "Developed REST APIs, integrated with internal databases and third-party services.",
      "Worked with DevOps team to implement CI/CD workflows and monitoring tools.",
      "Collaborated with product managers and designers to iterate on requirements."
    ]
  },
  {
    role: 'Software Engineer',
    company: 'HPE',
    duration: 'June 2021 – May 2022',
    description: [
      "Contributed to building a scalable device management platform for enterprise users.",
      "Designed and developed backend views and APIs using Django and PostgreSQL.",
      "Used Celery to implement background processing for file parsing and device status tracking.",
      "Worked with Chart.js and AJAX to visualize device data in real time.",
      "Participated in secure development and cloud best practices using the shared responsibility model."
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">Experience Timeline</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <FaBriefcase size={24} />
            </div>
            <div className="timeline-content">
              <h3>{exp.role} — <span>{exp.company}</span></h3>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
