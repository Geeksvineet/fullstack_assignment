import React, { useState } from 'react';
import './ProjectManager.css';
import axios from 'axios';

const ProjectManager = () => {
    const [project, setProject] = useState({ name: '', description: '' });
    const [image, setImage] = useState(null);
    const [projects, setProjects] = useState([]);

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', project.name);
        formData.append('description', project.description);
        formData.append('image', image);

        try {
            const response = await axios.post('https://real-trust-flipr.onrender.com/api/projects', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProjects([...projects, response.data]);
            setProject({ name: '', description: '' });
            setImage(null);
            alert('Project added successfully!'); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Project Management</h2>
            <form onSubmit={handleSubmit} className="form-project">
                <input
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    value={project.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Project Description"
                    value={project.description}
                    onChange={handleChange}
                    className="textarea-custom"
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />
                <button type="submit">Add Project</button>
            </form>

            <div>
                <h3 className='Projects-head'>Projects List</h3>
                {projects.map((proj) => (
                    <div key={proj._id} className='projectList'>
                        <h4>{proj.name}</h4>
                        <p>{proj.description}</p>
                        {proj.image && (<img src={`https://real-trust-flipr.onrender.com/uploads/${proj.image}`} alt={proj.name} width="100" />)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectManager;
