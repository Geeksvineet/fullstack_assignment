import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://real-trust-flipr.onrender.com/api/subscriptions', { email })
            .then(response => {
                alert('Subscribed!');
                setEmail(''); 
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            Subscribe Us <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="subs-btn" type="submit">Subscribe</button>
        </form>
    );
};

export default Newsletter;
