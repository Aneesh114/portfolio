// src/components/Header.js
//import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "gray",
        padding: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "yellow" : "white",
          fontWeight: "bold",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "yellow" : "white",
          fontWeight: "bold",
        })}
      >
        Projects
      </NavLink>
      <NavLink
        to="/skills"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "yellow" : "white",
          fontWeight: "bold",
        })}
      >
        Skills
      </NavLink>
      <NavLink
        to="/experience"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "yellow" : "white",
          fontWeight: "bold",
        })}
      >
        Experience
      </NavLink>
    </header>
  );
}

export default Header;
