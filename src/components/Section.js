// src/components/Section.js
import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';
import BackgroundParticles from './BackgroundParticles';
import { ReactTyped } from 'react-typed';



const Section = () => {
  return (
    <div className="section-container">
      <BackgroundParticles /> {/* This is now behind everything */}

      <div className="section-overlay" />

      <motion.h1
        className="hero-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="highlighted">Aneesh Reddy Dasari</span>
      </motion.h1>

      <motion.div
  className="hero-subtext"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <ReactTyped
    strings={[
      "Full Stack Developer",
      "Data Enthusiast",
      "Cloud Engineer",
      "Problem Solver",
    ]}
    typeSpeed={40}
    backSpeed={30}
    loop
  />
</motion.div>

      <motion.a
        href="/projects"
        className="hero-button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        View Projects
      </motion.a>
    </div>
  );
};

export default Section;
