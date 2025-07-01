const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.addProject = async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Request File:', req.file);

    const { name, description } = req.body;
    const image = req.file ? req.file.path : ''; 


    try {
        const newProject = new Project({name, description, image});
        await newProject.save();
        res.json(newProject);
    } catch (err) {
        console.error('Error saving project:', err);
        res.status(500).json({ error: err.message });
    }
};