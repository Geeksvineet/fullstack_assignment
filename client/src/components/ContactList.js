import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contactlist.css'; 

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://real-trust-flipr.onrender.com/api/contact')
            .then(response => setContacts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="contact-list-container">
            <h2>Contact List</h2>
            <ul className="contact-list">
                {contacts.map(contact => (
                    <li key={contact._id} className="contact-card">
                        <h3>{contact.name}</h3>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Mobile:</strong> {contact.mobile}</p>
                        <p><strong>City:</strong> {contact.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
