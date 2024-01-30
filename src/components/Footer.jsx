// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid text-center" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      {/* Uncomment the line below if you want to include a copyright statement */}
       <p>&copy; 2024 Aakash Verma. All Rights Reserved.</p>
      <p>Contact me at: <a href="mailto:aakashverma1262@gmail.com" style={{color:"white", textDecoration:"none"}}>aakashverma1262@gmail.com</a></p>
    </footer>
  );
};

export default Footer;
