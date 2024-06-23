// ProfilesSection.jsx
import React from "react";

const ProfilesSection = () => {
  return (
    <div
      className="row justify-content-evenly"
      style={{ backgroundColor: "black" }}
    >
      <div className="col-md-10">
        <div id="links" className="row pt-md-5 pb-md-3 pb-3">
          <div className="col-12 mt-5 text-center text-white">
            <h1>Profiles</h1>
          </div>
        </div>

        <div className="row justify-content-evenly p-3 pt-md-2 pb-md-3 row-cols-2 row-cols-md-3 ms-md-5 me-md-5">
          {/* LinkedIn */}
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark mx-auto d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/aakash-verma-32144a202/"
                target="_main"
              >
                <img
                  src="./assets/images/clogo1.png"
                  className="card-img-top logs"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6">LinkedIn</h4>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark mx-auto d-flex justify-content-center">
              <a href="https://github.com/aakashskyverma" target="_main">
                <img
                  src="./assets/images/github-icon.png"
                  className="card-img-top logs"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6">Github</h4>
                </div>
              </div>
            </div>
          </div>

          {/* HackerRank */}
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark">
              <a
                href="https://www.hackerrank.com/profile/aakashskyverma"
                target="_main"
              >
                <img
                  src="./assets/images/HackerRank.png"
                  className="card-img-top logs mx-auto d-block rounded "
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6">HackerRank</h4>
                </div>
              </div>
            </div>
          </div>

          {/* GeeksForGeeks */}
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark mx-auto d-flex justify-content-center">
              <a
                href="https://auth.geeksforgeeks.org/user/aakashskyverma"
                target="_main"
              >
                <img
                  src="./assets/images/GFG.png"
                  className="card-img-top logs"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6" style={{ whiteSpace: "nowrap" }}>
                    GeeksForGeeks
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* LeetCode */}
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark mx-auto d-flex justify-content-center">
              <a href="https://leetcode.com/aakashskyverma/" target="_main">
                <img
                  src="./assets/images/leetcode (2).png"
                  className="card-img-top logs"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6">LeetCode</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="col pt-3 pb-3 text-white">
            <div className="card bg-dark">
              <a
                href="https://www.instagram.com/aakashskyverma/"
                target="_main"
              >
                <img
                  src="./assets/images/insta.png"
                  className="card-img-top logs mx-auto image-fluid"
                />
              </a>
              <div className="card-body">
                <div className="card-title text-center fw-bold">
                  <h4 className="fs-md-4 fs-6">Instagram</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesSection;
