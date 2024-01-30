// ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <div className="mt-5">
      <div id="contact" className="row mt-5 pt-3 justify-content-evenly" style={{ backgroundColor: 'black' }}>
        <div className="col-md-5 mt-3 text-white">
          <h2>Contact Form</h2>
          <form action="https://formspree.io/f/xqkreyoq" method="post">
            <div className="form-group">
              <label htmlFor="name">Enter Name</label>
              <input
                style={{ backgroundColor: '#212020', border: 'none' }}
                type="text"
                className="form-control text-white"
                id="name"
                name="name"
                aria-describedby="name"
              />
            </div>

            <div className="form-group pt-2">
              <label htmlFor="Email">Email</label>
              <input
                style={{ backgroundColor: '#212020', border: 'none' }}
                type="email"
                className="form-control text-white"
                id="Email"
                name="_replyto"
              />
            </div>

            <div className="form-group pt-2">
              <label htmlFor="message">Message</label>
              <textarea
                style={{ backgroundColor: '#212020', border: 'none' }}
                className="form-control text-white"
                id="message"
                name="message"
                aria-describedby="message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-5 mt-3 mb-md-5 text-white">
          <h2>Address</h2>
          <p>
            9/8 Scheam No.54 <br />
            Vijay Nagar, Indore <br />
            <i className="bi bi-telephone-fill"></i>
            9685327951 <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734.1288837067108!2d75.89046566688513!3d22.75425841666789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1705695961519!5m2!1sen!2sin"
              height="250"
              style={{ border: '0', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: 'black' }}>
        <div className="col-12">
          <table className="table-dark">...</table>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
