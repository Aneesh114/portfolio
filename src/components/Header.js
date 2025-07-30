import { Link } from 'react-router-dom';
import Projects from './Projects';
function Header() {
  return (
    <header style={{ backgroundColor: "gray", padding: "1rem", display: "flex", gap: "1rem" }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
        Home
      </Link>
      <Link to="/projects" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
        <Projects />
      </Link>
    </header>
  );
}

export default Header;
