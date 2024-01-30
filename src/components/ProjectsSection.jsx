// ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  return (
    <div>
      <div id="project" className="row pt-md-5 pb-3">
        <div className="col-12 pt-md-5 text-white">
          <h1 className="text-center">Projects</h1>
        </div>
      </div>

      <div className="row pt-md-5 pb-3 justify-content-evenly">
        {/* Project 1 */}
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div className="card mx-auto d-flex justify-content-center bg-dark h-100 text-white">
            <img src="./assets/images/project1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Examination</h5>
              <p className="card-text ">
                Desktop application built in Java for Examination System using MySQL database for efficient management of exams and results.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div className="card mx-auto d-flex justify-content-center bg-dark h-100 text-white">
            <img src="./assets/images/project3.gif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">WebLock</h5>
              <p className="card-text">
                WebLock enables users to encrypt and decrypt files using different algorithms and custom keys, apply passwords to PDF files, generate file hashes, and verify file integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div className="card mx-auto d-flex justify-content-center bg-dark h-100 text-white">
            <a href="https://github.com/aakashskyverma/PortFolio">
            <img src="./assets/images/Portfolio (2).png" className="card-img-top logs" alt="portfolio_png" />
            </a>
              
            <div className="card-body">
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">
                Building a portfolio website using Bootstrap to showcase skills, projects, and experiences for a professional online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
