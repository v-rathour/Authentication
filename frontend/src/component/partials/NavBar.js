import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
      <nav>
        <div className="nav-bar">
          <h3 className="company-name">Bengle</h3>
          <ul className="buttons">
            <li className="login-button">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="signup-button">
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;