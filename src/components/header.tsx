// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Si deseas añadir estilo personalizado

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/distance-search" className="nav-link">Search by Distance</Link>
          </li>
          <li>
            <Link to="/reservoir-search" className="nav-link">Search Reservoir</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
