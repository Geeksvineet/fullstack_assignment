const Client = require('../models/Client');

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addClient = async (req, res) => {
    const { name, description, designation } = req.body;
    const image = req.file ? req.file.path : ''; 

    try {
        const newClient = new Client({ name, description, designation, image });
        await newClient.save();
        res.json(newClient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
