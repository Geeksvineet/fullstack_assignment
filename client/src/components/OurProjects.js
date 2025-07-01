import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OurProjects.css'; 

const OurProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://real-trust-flipr.onrender.com/api/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className="projects-container">
            <h2>Our Projects</h2>
            <p>We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.</p>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project._id} className="project-card">
                        <img src={`https://real-trust-flipr-frontend.onrender.com/${project.image}`} alt={project.name} />
                        <div className="card-content">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href="#" className="read-more-btn">READ MORE</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProjects;
