// ProjectsSection.jsx
import React from "react";

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
            <a href="https://github.com/aakashskyverma/weblock" target="_main">
              <img
                src="./assets/images/project1.png"
                className="card-img-top"
                style={{ marginTop: "90px", marginBottom: "70px" }}
                alt="..."
              />
            </a>
            <div className="card-body">
              <h5 className="card-title fw-bold">WebLock</h5>
              <p className="card-text">
                Weblock is a file encryption & sharing platform which uses a
                secret key to encryt the files, download it and share via email.
                This platform also provides decryption feature with the same
                secret key.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div className="card mx-auto d-flex justify-content-center bg-dark h-100 text-white">
            <a
              href="https://aakashverma-taskmanagment.netlify.app/"
              target="_main"
            >
              <img
                src="./assets/images/project2.png"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h5 className="card-title fw-bold">Task Management System</h5>
              <p className="card-text ">
                The Task Management System efficiently handles tasks, providing
                users with task viewing, updates, and statistics, while admins
                can assign tasks and access detailed user information.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-3 col-sm-5 col-7 pt-3 pb-3 text-white">
          <div className="card mx-auto d-flex justify-content-center bg-dark h-100 text-white">
            <a href="https://quiz-app-aakashverma.netlify.app/" target="_main">
              <img
                src="./assets/images/project3.png"
                className="card-img-top logs mt-3 "
                alt="portfolio_png"
              />
            </a>

            <div className="card-body">
              <h5 className="card-title fw-bold">Quiz App</h5>
              <p className="card-text">
                The Quiz App allows users to take quizzes and view their scores
                at the end of each test, providing a straightforward and
                efficient quiz-taking experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
