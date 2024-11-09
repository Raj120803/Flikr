import React from 'react';
import './Aboutus.css'
import Joinsection from '../Joinsection/Joinsection';
import Footer from '../Footer/Footer';

function AboutUs() {
  return<div className="about-us-page">
  {/* Header Section */}
  <section className="about-header">
    <h1>About Us</h1>
    <p>Your journey to knowledge and insights begins with us.</p>
  </section>

  {/* Mission Section */}
  <section className="mission-section">
    <h2>Our Mission</h2>
    <p>
      We strive to empower individuals through shared knowledge and meaningful content. 
      Our mission is to create a community where everyone can learn, share, and grow together.
    </p>
  </section>

  {/* Team Section */}
  <section className="team-section">
    <h2>Meet Our Team</h2>
    <div className="team-grid">
      {['Alice Johnson', 'Bob Smith', 'Catherine Lee', 'David Brown'].map((name, index) => (
        <div key={index} className="team-member">
          <div className="avatar-placeholder"></div>
          <h3>{name}</h3>
          <p>Content Specialist</p>
        </div>
      ))}
    </div>
  </section>

  {/* Values Section */}
  <section className="values-section">
    <h2>Our Core Values</h2>
    <div className="values-grid">
      <div className="value">
        <h3>Integrity</h3>
        <p>We are committed to upholding the highest standards of integrity in everything we do.</p>
      </div>
      <div className="value">
        <h3>Excellence</h3>
        <p>We strive to excel in our work and deliver exceptional results for our community.</p>
      </div>
      <div className="value">
        <h3>Collaboration</h3>
        <p>Our success is built on collaborative efforts and mutual respect among team members.</p>
      </div>
      <div className="value">
        <h3>Innovation</h3>
        <p>We continuously seek new ideas and approaches to provide fresh and valuable content.</p>
      </div>
    </div>
  </section>
  <Joinsection/>
 <Footer/>
</div>
}

export default AboutUs;
