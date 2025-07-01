import React from 'react';
import './AboutUs.css';
import img1 from '../assets/ab-img1.svg';  // Replace with your image paths
import img2 from '../assets/ab-img2.svg';
import img3 from '../assets/ab-img3.svg';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="image-section">
                <img src={img2} alt="Client meeting" className="image1" />
                <img src={img1} alt="Team discussion" className="image2" />
                <img src={img3} alt="Client handshake" className="image3" />
                <div className="decorative-box blue"></div>
                <div className="decorative-box orange"></div>
                <div className="decorative-circle large light-blue"></div>
                <div className="decorative-circle small dark-blue"></div>
            </div>
            <div className="text-section">
                <h1>About Us</h1>
                <p>
                    Fifteen years of experience in real estate, excellent customer service, and a
                    commitment to work hard, listen, and follow through. We provide quality services to
                    build relationships with clients and, more importantly, maintain these relationships
                    by communicating effectively.
                </p>
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>
    );
};

export default AboutUs;
