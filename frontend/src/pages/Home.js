import React from 'react';
import Chatbot from '../component/Chatbot';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="feedback-section">
        <h1>Your</h1>
        <h1>Feedback,</h1>
        <h1>Our Priority</h1>
        <p>Your feedback is the key to unlocking a better experience</p>
      </div>
      <Chatbot /> {/* Include Chatbot component */}
    </div>
  );
}

export default Home;
