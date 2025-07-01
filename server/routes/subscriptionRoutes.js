// server/routes/subscriptionRoutes.js
const express = require('express');
const { getSubscriptions, addSubscription } = require('../controllers/subscriptionController');
const router = express.Router();

router.get('/', getSubscriptions);
router.post('/', addSubscription);

module.exports = router;
