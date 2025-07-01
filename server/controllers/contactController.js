const ContactForm = require('../models/ContactForm');

exports.getContacts = async (req, res) => {
    try {
        const contacts = await ContactForm.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addContact = async (req, res) => {
    const { name, email, mobile, city } = req.body;
    try {
        const newContact = new ContactForm({ name, email, mobile, city });
        await newContact.save();
        res.json(newContact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
