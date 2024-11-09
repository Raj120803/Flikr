import React from 'react';
import './Contactus.css'
import Joinsection from '../Joinsection/Joinsection';
import Footer from '../Footer/Footer';

function ContactUs() {
  return     <div className="contact-us-page">
  {/* Header Section */}
  <section className="contact-header">
    <h1>Contact Us</h1>
    <p>We're here to help and answer any questions you might have. We look forward to hearing from you!</p>
  </section>

  {/* Contact Information Section */}
  <section className="contact-info-section">
    <h2>Get In Touch</h2>
    <div className="contact-info">
      <div className="info-item">
        <h3>Address</h3>
        <p>123 Finsweet St, Suite 500, Fintown, FT 12345</p>
      </div>
      <div className="info-item">
        <h3>Email</h3>
        <p>contact@finsweet.com</p>
      </div>
      <div className="info-item">
        <h3>Phone</h3>
        <p>+123 456 7890</p>
      </div>
    </div>
  </section>

  {/* Contact Form Section */}
  <section className="contact-form-section">
    <h2>Send Us a Message</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
 <Joinsection/>
 <Footer/>
</div>

}

export default ContactUs;
