// AboutSection.jsx
import React from "react";

const AboutSection = () => {
  const openResume = () => {
    const pdfUrl = "./assets/Aakash Verma Updated Resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="container-fluid mt-md-5 text-center" id="about">
      <div className="row pt-md-5 pb-md-3">
        <div className="col pt-5">
          <h1 className="text-white">About Me</h1>
        </div>
      </div>

      <div className="container-fluid mb-2">
        <div className="row justify-content-around pt-5 pb-5">
          <div className="col-md-7 text-white">
            <p
              className="text-justify"
              style={{ fontSize: "large", textAlign: "justify" }}
            >
              I am currently a dedicated student pursuing a Bachelor's degree in
              Computer Science at Shri Vaishnav Institute of Technology. With a
              fervent passion for web development, my journey in technology has
              been marked by a relentless pursuit of knowledge and a commitment
              to innovation. My primary focus lies in creating and designing
              websites that not only capture attention but also provide seamless
              and engaging user experiences. I believe that the intersection of
              creativity and technology is where the magic happens, and it is
              this belief that fuels my enthusiasm for frontend development.{" "}
              <br />
              Throughout my academic journey, I have honed my skills in various
              aspects of web development, embracing the ever-evolving landscape
              of technologies. My goal is to leverage my education, skills, and
              creativity to contribute meaningfully to the world of web
              development. <br />
              I am driven by the desire to bring ideas to life through the
              artful combination of design and code. I find joy in crafting
              visually appealing and user-friendly interfaces that leave a
              lasting impression. Whether it's solving complex problems or
              implementing innovative solutions, I am always eager to explore
              new horizons in the realm of frontend development. <br />
              As I continue my academic and professional journey, I am excited
              about the endless possibilities that lie ahead. I am open to
              collaboration, always seeking new challenges that push the
              boundaries of my knowledge and expertise. <br />
              Thank you for taking the time to learn a little about me. I am
              enthusiastic about the opportunities that the world of web
              development offers, and I am eager to contribute my skills and
              creativity to make a meaningful impact.
            </p>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <button
              onClick={openResume} // Assuming openResume is a function
              className="rounded-pill btn btn-outline-light btn-lg card-btn"
            >
              More about me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
