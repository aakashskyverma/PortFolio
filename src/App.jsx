// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './stylesheet.css';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProfilesSection from './components/ProfilesSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <>
    <div style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <Navbar />
      <div className="container-fluid mt-5 justify-content-evenly" style={{backgroundColor:"black"}}>
      <HomeSection />
      <AboutSection />
      <ProfilesSection />
      <SkillsSection />
      
      <ProjectsSection />
     <ContactSection />
      </div>

      {/* Footer component can be added here */}
    </div>
    </>
  );
};

export default App;
