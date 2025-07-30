import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Correcto: "NavLink" con L mayúscula

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>C</span>
        <h3>orado Desarrollador Web</h3>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <NavLink to="/curriculum">Curriculum</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
