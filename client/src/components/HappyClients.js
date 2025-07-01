import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HappyClients.css';

const HappyClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('https://real-trust-flipr.onrender.com/api/clients')
            .then(response => setClients(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="happy-clients">
            <h2>Happy Clients</h2>
            <div className="clients-container">
                {clients.map(client => (
                    <div key={client._id} className="client-card">
                        <img src={`http://localhost:5000/${client.image}`} alt={client.name} className="client-image" />
                        <p className="client-description">{client.description}</p>
                        <p className="client-name">{client.name}</p>
                        <p className="client-designation">{client.designation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HappyClients;
