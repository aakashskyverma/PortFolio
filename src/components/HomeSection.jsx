// HomeSection.jsx
import React from 'react';


const HomeSection = () => {

  const playSound = () => {
    // Replace 'sci_fi_door-6451.mp3' with your actual sound file
    const audio = new Audio('src/assets/futuristic-zoom-whoosh-1-183976.mp3');
    audio.autoplay = true;
    audio.play();
  };

  return (
    <div id="home" className="row " style={{ backgroundColor: 'black' }}>
      <div className="col-md-6 col-12 mt-5 text-white d-flex flex-column align-items-center justify-content-center">
        <div className="ms-5 me-5 mt-5 col-9">
          <h6>Web Developer</h6>
          <h1 style={{ color: 'crimson' }} className="pt-1 fw-bold">
            Hi I am Aakash Verma <br />
            from Indore, India.
          </h1>
          <h5 className="text-justify">
            Passionate about transforming ideas into captivating designs. Explore my portfolio for a journey through innovative concepts and visually stunning creations.
          </h5>
        </div>
      </div>
      <div className="col-md-6 mt-5 mb-5">
        <img
          id="hoverImage"
          src="/assets/images/profile.png"
          className="profile mt-5 img-fluid rounded-circle mx-auto d-block"
          onMouseOver={() => playSound()} // Assuming playSound is a function
          style={{ width: '60%' }}
          alt="..."
        />
      </div>
      {/* row end */}
    </div>
  );
};

export default HomeSection;
