// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Name from './components/Name';
import Section from './components/Section';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';


function HomePage() {
  return (
    <main className="main-wrapper">
      <div className="left-half">
        
        <Section />
      </div>
      <div className="right-half">
        <Aside />
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;