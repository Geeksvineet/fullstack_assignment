# Real-Trust-Flipr

This Flipr Full-Stack Project is a MERN-based application with an admin panel to manage various entities like projects, clients, contacts, and subscribers. It allows administrators to add, view, and manage content through a user-friendly interface, while also displaying managed content dynamically on the frontend for general users.

Technologies Used

Frontend:

React: For building user interfaces and creating a responsive frontend.
CSS: Used with Bootstrap and custom styles for layout and design.
Axios: To make HTTP requests from the frontend to the backend.

Backend:

Node.js: For server-side logic and handling requests.
Express.js: As a backend framework for routing and middleware handling.
MongoDB: A NoSQL database to store and retrieve application data.

Other Tools:

Mongoose: For MongoDB object modeling and schema creation.
Nodemon: For automatically restarting the server during development.
Dotenv: For environment variable management.

Features

Admin Panel:

Project Management: Add, view, and manage projects, including uploading files.
Client Management: Add clients with details (name, description, designation, and image).
Contact List: View contact details submitted through the contact form.
Subscriber List: Manage email subscriptions for newsletters.

User Interface:

Display of projects, clients, and other dynamic content managed by the admin.
Contact form for user inquiries and email subscriptions.

Approach
Frontend Development:

React components were used to create a modular and reusable UI.
The application is structured with various components for each feature (e.g., ProjectManager, ClientManager).
Custom styles and CSS animations were applied to enhance the user experience.
Backend Development:

RESTful API with Express routes to handle CRUD operations for each entity (projects, clients, contacts, subscribers).
MongoDB was chosen to store non-relational data, making it easier to manage the dynamic data.
Mongoose schemas were used to enforce a structure for data models, such as for clients and projects.
File Uploads: Multer was used to handle file uploads, allowing admins to upload images and files.

Admin Panel:

Built separate components for managing different entities.
Integrated forms to allow admins to add or edit information.
Data submitted from the admin panel is sent to the backend API, which processes and stores it in the MongoDB database.

Installation and Setup
Follow these steps to set up and run the project locally.

Prerequisites:-
Node.js
MongoDB
Git

Access the Application
Open your browser and go to https://real-trust-flipr-frontend.onrender.com/  to view the landing page.
https://real-trust-flipr-frontend.onrender.com/admin to view admin panel
Steps
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/flipr-full-stack.git
cd flipr-full-stack

Backend Setup
Navigate to the backend folder:
cd server
Install backend dependencies:
npm install



Create a .env file in the server directory and add the following environment variables:
env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
Start the backend server:
npm run dev


