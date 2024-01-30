// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'black', fontSize: 'large' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#links">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#project">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
