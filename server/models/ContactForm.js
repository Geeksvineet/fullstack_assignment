const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    city: String,
});

module.exports = mongoose.model('ContactForm', ContactFormSchema);
