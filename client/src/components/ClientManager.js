import React, { useState } from 'react';
import './ClientManager.css';
import axios from 'axios';

const ClientManager = () => {
    const [client, setClient] = useState({ name: '', description: '', designation: '' });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', client.name);
        formData.append('description', client.description);
        formData.append('designation', client.designation);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('https://real-trust-flipr.onrender.com/api/clients', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setClient({ name: '', description: '', designation: '' });
            setImage(null);
            alert('Client added successfully!'); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Client Management</h2>
            <form onSubmit={handleSubmit} className="form-client">
                <input type="text" name="name" placeholder="Client Name" value={client.name} onChange={handleChange} />
                <input type="text" name="description" placeholder="Client Description" value={client.description} onChange={handleChange} />
                <input type="text" name="designation" placeholder="Client Designation" value={client.designation} onChange={handleChange} />
                <input type="file" name="image" onChange={handleImageChange} />
                <button type="submit">Add Client</button>
            </form>
        </div>
    );
};

export default ClientManager;
