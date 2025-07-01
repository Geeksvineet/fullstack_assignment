const express = require('express');
const multer = require('multer');
const { getClients, addClient } = require('../controllers/clientController');
const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/', getClients);
router.post('/', upload.single('image'), addClient);

module.exports = router;
