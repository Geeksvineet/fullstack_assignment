import React from 'react';
import './Footer.css'; // Assuming you'll create a separate CSS file for styling
import Newsletter from './Newsletter'; // Importing your existing Newsletter component
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/Linkedin.svg';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top Section */}
            <div className="footer-top">
                <div className="footer-overlay">
                    <h2>Learn more about our listing process, as well as our additional staging and design work.</h2>
                    <button className="learn-more-btn">LEARN MORE</button>
                </div>
            </div>

            {/* Middle Section */}
            <div className="footer-middle">
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-newsletter">
                    <Newsletter />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>&copy; All Rights Reserved 2023</p>
                <div className="footer-logo">
                    <img src={logo} alt="Real Trust Logo" />
                </div>
                <div className="footer-social-icons">
                    <a href="#"><img src={facebook} alt="Facebook Logo" /></a>
                    <a href="#"><img src={twitter} alt="twitter Logo" /></a>
                    <a href="#"><img src={linkedin} alt="linkedin Logo" /></a>
                    <a href="#"><img src={insta} alt="insta Logo" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
