import React from 'react';
import aboutImage from '../assets/about-books.png'; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>📚 About Us</h2>
          <p>
            Welcome to <strong>BookBuddy</strong> – your smart companion for managing personal and library book collections.
            Whether you're a student, a librarian, or a passionate reader, BookBuddy helps you organize, track, and enjoy your reading life effortlessly.
          </p>
          <p>
            Our goal is to provide a seamless and visually appealing experience using modern technologies like React, Node.js, and MongoDB.
            We believe managing books shouldn't be boring – it should be fun, easy, and productive.
          </p>
          <p>
            💡 <em>"Read. Organize. Repeat."</em>
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About BookBuddy" />
        </div>
      </div>
    </section>
  );
};

export default About;
