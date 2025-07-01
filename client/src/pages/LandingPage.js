import React from 'react';
import OurProjects from '../components/OurProjects';
import HappyClients from '../components/HappyClients';
import ContactForm from '../components/ContactForm';
import logo from '../assets/logo.svg';
import Footer from '../components/Footer';
import RealtorPage from '../components/RealtorPage';
import AboutUs from '../components/AboutUs';
import './LandingPage.css';

const LandingPage = () => (
    <div className="landing-page">
        {/* Header Section */}
        <header className="header">
            <img src={logo} alt="Real Trust Logo" className="logo" />
            <nav>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#projects">About Projects</a>
                <a href="#testimonials">Testimonials</a>
                <button className="contact-button">Contact</button>
            </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-content">
                <h2>Consultation, Design, & Marketing</h2>
                <p>We provide expert consultation, design, and marketing solutions to bring clients top dollar for the sale of their homes.</p>
            </div>
            <div className="form-container">
                <h3>Get a Free Consultation</h3>
                <ContactForm />
            </div>
        </section>

        <RealtorPage />
        <AboutUs />
        {/* Projects Section */}
        <section className="projects-section" id="projects">
            <OurProjects />
        </section>

        {/* Clients Section */}
        <section className="clients-section" id="testimonials">
            <HappyClients />
        </section>

        {/* Footer Section */}
        <Footer />
    </div>
);

export default LandingPage;
