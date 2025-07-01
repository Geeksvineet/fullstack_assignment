import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SubscriberList.css'; // Import the CSS file

const SubscriberList = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        axios.get('https://real-trust-flipr.onrender.com/api/subscriptions')
            .then(response => setSubscribers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="subscriber-list-container">
            <h2>Subscriber List</h2>
            <ul className="subscriber-list">
                {subscribers.map(subscriber => (
                    <li key={subscriber._id} className="subscriber-item">
                        {subscriber.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubscriberList;
