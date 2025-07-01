import React from 'react';
import ProjectManager from '../components/ProjectManager';
import ClientManager from '../components/ClientManager';
import ContactList from '../components/ContactList';
import SubscriberList from '../components/SubscriberList';

const AdminPanel = () => (
    <div>
        <ProjectManager />
        <ClientManager />
        <ContactList />
        <SubscriberList />
    </div>
);

export default AdminPanel;
