const express = require('express');
const multer = require('multer');
const { getProjects, addProject } = require('../controllers/projectController');
const router = express.Router();

// Configure multer for storing images in the 'uploads' folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

router.get('/', getProjects);
router.post('/', upload.single('image'), addProject);

module.exports = router;
