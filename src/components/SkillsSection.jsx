// SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  return (
    <div>
      <div id="skills" className="pt-md-5">
        <div className="row pt-md-5">
          <div className="col-12 text-center text-white">
            <h1>Skills</h1>
          </div>
        </div>
      </div>

      <div className="row justify-content-evenly pt-3 pb-3" style={{ backgroundColor: 'black' }}>
        <div className="col-md-5 mt-5 pb-3">
          <img
            src="src/assets/images/skills.jpg"
            className="image-fluid rounded-circle mx-auto d-block"
            width="100%"
            alt=""
          />
        </div>

        <div className="col-md-5 pt-3 pb-3 text-white">
          <div className="container mt-5">
            <div className="row row-cols-2 row-cols-md-3">
              {/* Logo 1 */}
              <div className="col mb-3">
                <img src="src/assets/images/c-logo.png" alt="Logo 1" className="logo" />
              </div>
              {/* Logo 2 */}
              <div className="col mb-3">
                <img src="src/assets/images/java-logo.png" alt="Logo 2" className="logo" />
              </div>
              {/* Logo 3 */}
              <div className="col mb-3">
                <img src="src/assets/images/Javascript.png" alt="Logo 3" className="logo" />
              </div>
              {/* Logo 4 */}
              <div className="col mb-3">
                <img src="src/assets/images/HTML.png" alt="Logo 4" className="logo" />
              </div>
              {/* Logo 5 */}
              <div className="col mb-3">
                <img src="src/assets/images/Css.png" alt="Logo 5" className="logo" />
              </div>
              {/* Logo 6 */}
              <div className="col mb-3">
                <img src="src/assets/images/Mysql.png" alt="Logo 6" className="logo" />
              </div>
              {/* Logo 7 */}
              <div className="col mb-3">
                <img src="src/assets/images/DS.png" alt="Logo 7" className="logo" />
              </div>
              {/* Logo 8 */}
              <div className="col mb-3">
                <img src="src/assets/images/React.png" alt="Logo 8" className="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
